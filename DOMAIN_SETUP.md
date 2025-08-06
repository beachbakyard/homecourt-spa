# Custom Domain Setup - beachbakyard.com

## GitHub Pages Configuration

1. **Repository Settings:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch (gh-pages)
   - Custom domain: `beachbakyard.com`
   - Enforce HTTPS: ✅ Enabled

## DNS Configuration

### Option 1: If you own beachbakyard.com domain

Configure DNS records with your domain registrar:

```
Type: CNAME
Name: www
Value: beachbakyard.github.io

Type: A (for apex domain)
Name: @
Value: 185.199.108.153
Value: 185.199.109.153  
Value: 185.199.110.153
Value: 185.199.111.153
```

### Option 2: Alternative domain options

If `beachbakyard.com` is not available, consider:
- `beachbakyard.org`
- `homecourtbakyard.com`
- `beachvolleyballbakyard.com`
- `bkyardvolleyball.com`

## Custom Domain Verification

1. Add TXT record to DNS:
```
Name: _github-challenge-beachbakyard
Value: [GitHub provides this value]
```

2. Verify in GitHub repository settings

## Current Configuration

✅ CNAME file created: `beachbakyard.com`
✅ Package.json homepage updated
✅ 404.html for SPA routing
✅ Index.html GitHub Pages SPA script
✅ SEO-optimized meta description

## Testing URLs

After DNS propagation (24-48 hours):
- **Primary:** https://beachbakyard.com
- **Register:** https://beachbakyard.com/tournament
- **Lessons:** https://beachbakyard.com/schedule

## Fallback URLs (current)

While DNS is propagating:
- https://beachbakyard.github.io/homecourt-spa/

## SSL Certificate

GitHub Pages automatically provides SSL certificates for custom domains.
Certificate may take up to 24 hours to provision after DNS configuration.