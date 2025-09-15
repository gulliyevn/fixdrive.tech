#!/bin/bash

# FixDrive Deploy Script
# Hardcoded values for quick deployment

set -e

# Server configuration (hardcoded)
SERVER_HOST="69.62.112.20"
SERVER_USER="root"
SERVER_PASS="0J-zaDcQy9JHH)9WSHbj"
SERVER_PATH="/var/www/fixdrive"
DOMAIN_NAME="fixdrive.tech"

echo "🚀 Starting FixDrive deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy to server using rsync
echo "📤 Deploying to server..."
sshpass -p "$SERVER_PASS" rsync -avz --delete dist/ "$SERVER_USER@$SERVER_HOST:$SERVER_PATH/"

# Assets now have clean names without hashes - no need for symlinks
echo "✅ Assets have clean names without hashes"

# Update nginx configuration
echo "🔧 Updating nginx configuration (HTTP->HTTPS + 8080 fallback)..."
sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no "$SERVER_USER@$SERVER_HOST" "cat >/etc/nginx/sites-available/fixdrive <<'CONF'
# Redirect HTTP to HTTPS
server {
  listen 80;
  server_name $DOMAIN_NAME www.$DOMAIN_NAME;
  return 301 https://$DOMAIN_NAME\$request_uri;
}

# Primary HTTPS server
server {
  listen 443 ssl http2;
  server_name $DOMAIN_NAME www.$DOMAIN_NAME;
  root /var/www/fixdrive;
  index index.html;

  ssl_certificate /etc/letsencrypt/live/$DOMAIN_NAME/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/$DOMAIN_NAME/privkey.pem;
  ssl_protocols TLSv1.2 TLSv1.3;

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

  add_header X-Frame-Options SAMEORIGIN always;
  add_header X-Content-Type-Options nosniff always;
  add_header Referrer-Policy \"strict-origin-when-cross-origin\" always;
  add_header Permissions-Policy \"camera=(), microphone=(), geolocation=(self)\" always;
  add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains\" always;
  add_header Content-Security-Policy \"default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://snap.licdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'\" always;
}

# Fallback HTTP on 8080 (direct IP access)
server {
  listen 8080;
  server_name _;
  root /var/www/fixdrive;
  index index.html;

  location = / { try_files /index.html =404; }
  location / { try_files \$uri \$uri/ /index.html; }
}
CONF
nginx -t && systemctl restart nginx"

# Test deployment
echo "🧪 Testing deployment..."
if curl -s -f "http://$SERVER_HOST:8080/" > /dev/null; then
    echo "✅ Deployment successful!"
    echo "🌐 Site is live at:"
    echo "   - http://$SERVER_HOST:8080/"
    echo "   - http://$DOMAIN_NAME/"
    echo "   - http://www.$DOMAIN_NAME/ (redirects to $DOMAIN_NAME)"
else
    echo "❌ Deployment test failed"
    exit 1
fi

echo "🎉 FixDrive deployment completed successfully!"
echo ""
echo "📋 Next steps for domain setup:"
echo "1. Add DNS A records in Hostinger:"
echo "   - @ → $SERVER_HOST"
echo "   - www → $SERVER_HOST"
echo "2. Wait for DNS propagation (5-60 minutes)"
echo "3. Test your domain: http://$DOMAIN_NAME/"
