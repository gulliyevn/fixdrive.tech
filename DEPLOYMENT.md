# FixDrive Production Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gulliyevn/fixdrive.tech)

### Option 2: Manual Deploy

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**

   ```bash
   vercel --prod
   ```

3. **Configure Environment Variables**
   - `GA_TRACKING_ID`: Your Google Analytics 4 tracking ID
   - `GOOGLE_SHEETS_API_URL`: Your Google Sheets API endpoint

## 📊 Performance Optimizations

### Bundle Analysis

- **Before**: 457.29 kB (153.73 kB gzip)
- **After**: 49.71 kB (13.69 kB gzip) - **9x improvement!**

### Chunk Strategy

- `vendor-react`: React core libraries
- `vendor-motion`: Framer Motion animations
- `vendor-router`: React Router
- `vendor-helmet`: SEO meta tags
- `vendor-ui`: Lucide React icons
- `pages-*`: Lazy-loaded pages
- `components-heavy`: Large components

### Critical Resources

- ✅ Preconnect to Google Fonts
- ✅ Preload Hero images (AVIF/WebP)
- ✅ Lazy loading for non-critical images
- ✅ Terser minification with console removal

## 🔧 CI/CD Pipeline

### GitHub Actions

- **Test**: Lint, type check, build
- **Deploy**: Automatic deployment to Vercel on main branch
- **Preview**: PR preview deployments

### Required Secrets

```bash
VERCEL_TOKEN=your_vercel_token
ORG_ID=your_vercel_org_id
PROJECT_ID=your_vercel_project_id
```

## 📈 Analytics & Monitoring

### Google Analytics 4

- Page views tracking
- Custom events:
  - Contact Sales button clicks
  - Newsletter subscriptions
  - App download clicks
  - Language changes
  - Theme toggles

### Performance Monitoring

- Lighthouse scores
- Core Web Vitals
- Bundle size tracking

## 🛡️ Security Headers

### Vercel Configuration

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- Cache control for assets (1 year)

## 🌐 Domain Setup

1. **Add Custom Domain in Vercel**
2. **Update DNS Records**

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.19.61
   ```

## 📱 PWA Features (Future)

- Service Worker
- Offline support
- App manifest
- Push notifications

## 🔍 SEO Optimizations

- Meta tags via React Helmet
- Open Graph tags
- Twitter Cards
- Structured data
- Sitemap generation
- Robots.txt

## 📊 Lighthouse Targets

- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >95
- **SEO**: >95

## 🚨 Monitoring & Alerts

- Vercel Analytics
- Google Analytics 4
- Error tracking (Sentry - optional)
- Uptime monitoring

## 📝 Post-Deploy Checklist

- [ ] Test all pages load correctly
- [ ] Verify analytics tracking
- [ ] Check mobile responsiveness
- [ ] Test language switching
- [ ] Verify contact forms work
- [ ] Check newsletter signup
- [ ] Test app store links
- [ ] Run Lighthouse audit
- [ ] Verify SSL certificate
- [ ] Test custom domain

## 🆘 Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Analytics Not Working

1. Check GA_TRACKING_ID is set
2. Verify gtag script loads
3. Check browser console for errors

### Performance Issues

1. Run bundle analyzer: `npm run build && open dist/stats.html`
2. Check Network tab in DevTools
3. Verify image optimization

## 📞 Support

For deployment issues:

- Check Vercel logs
- Review GitHub Actions
- Contact: [your-email@domain.com]
