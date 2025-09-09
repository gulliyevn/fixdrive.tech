#!/bin/bash

# FixDrive SSL Setup Script
# Generates SSL certificates and configures nginx for HTTPS

set -e

# Server configuration
SERVER_HOST="69.62.112.20"
SERVER_USER="root"
SERVER_PASS="0J-zaDcQy9JHH)9WSHbj"
DOMAIN_NAME="fixdrive.tech"

echo "🔒 Setting up SSL certificates for $DOMAIN_NAME..."

# Install certbot via snap (more reliable)
echo "📦 Installing certbot via snap..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "
    snap install --classic certbot
"

# Stop nginx temporarily for certificate generation
echo "⏸️ Stopping nginx temporarily..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "systemctl stop nginx"

# Generate SSL certificate
echo "🔐 Generating SSL certificate..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "
    /snap/bin/certbot certonly --standalone --non-interactive --agree-tos --email admin@$DOMAIN_NAME -d $DOMAIN_NAME -d www.$DOMAIN_NAME
"

# Update nginx configuration for HTTPS
echo "🔧 Updating nginx configuration for HTTPS..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "cat >/etc/nginx/sites-available/fixdrive <<'CONF'
server {
    listen 80;
    server_name $DOMAIN_NAME www.$DOMAIN_NAME;
    
    # Redirect all HTTP to HTTPS
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    listen 8080;
    server_name $DOMAIN_NAME www.$DOMAIN_NAME _;
    root /var/www/fixdrive;
    index index.html;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/$DOMAIN_NAME/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN_NAME/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Redirect www to non-www
    if (\$host = www.$DOMAIN_NAME) {
        return 301 https://$DOMAIN_NAME\$request_uri;
    }

    location = / {
        try_files /index.html =404;
    }

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|avif|ico|json)$ {
        expires 30d;
        add_header Cache-Control \"public, max-age=2592000, immutable\";
    }

    # Security headers
    add_header X-Frame-Options SAMEORIGIN always;
    add_header X-Content-Type-Options nosniff always;
    add_header Referrer-Policy \"strict-origin-when-cross-origin\" always;
    add_header Permissions-Policy \"camera=(), microphone=(), geolocation=(self)\" always;
    add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains\" always;
    add_header Content-Security-Policy \"default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://snap.licdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'\" always;
}
CONF
"

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "nginx -t"

# Start nginx
echo "🚀 Starting nginx..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "systemctl start nginx"

# Setup auto-renewal
echo "🔄 Setting up certificate auto-renewal..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "
    echo '0 12 * * * /snap/bin/certbot renew --quiet --reload-hook \"systemctl reload nginx\"' | crontab -
"

# Test HTTPS
echo "🧪 Testing HTTPS..."
if curl -s -f "https://$DOMAIN_NAME/" > /dev/null; then
    echo "✅ HTTPS setup successful!"
    echo "🌐 Site is now available at:"
    echo "   - https://$DOMAIN_NAME/"
    echo "   - https://www.$DOMAIN_NAME/ (redirects to $DOMAIN_NAME)"
    echo "   - http://$DOMAIN_NAME/ (redirects to HTTPS)"
    echo "   - http://69.62.112.20:8080/ (still works)"
else
    echo "❌ HTTPS test failed"
    exit 1
fi

echo "🎉 SSL setup completed successfully!"
echo ""
echo "📋 What was configured:"
echo "1. ✅ SSL certificates generated with Let's Encrypt"
echo "2. ✅ Nginx configured for HTTPS with HTTP→HTTPS redirect"
echo "3. ✅ Security headers added (HSTS, CSP, etc.)"
echo "4. ✅ Auto-renewal setup for certificates"
echo "5. ✅ www redirect to non-www"
