# Shopify Integration Guide - LegerLAB

## Overview

This directory contains Shopify theme files for integrating the LegerLAB React application with Shopify.

## Integration Approach: Headless Shopify (Recommended)

We recommend using **Headless Shopify** with the Storefront API:

### Advantages
- ✅ Keep the React SPA architecture
- ✅ Better performance and SEO control
- ✅ Modern development workflow
- ✅ Flexibility in design and features

### Architecture
```
React Frontend (LegerLAB) ←→ Shopify Storefront API ←→ Shopify Backend
```

## Setup Instructions

### 1. Create Shopify App

1. Go to Shopify Partners Dashboard
2. Create a new app
3. Enable Storefront API access
4. Note your Storefront Access Token

### 2. Configure Environment Variables

Create `.env.local` in project root:

```env
VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token
VITE_SHOPIFY_API_VERSION=2024-01
```

### 3. Install Shopify SDK

```bash
npm install @shopify/hydrogen-react
```

### 4. Integrate Storefront API

Use the Shopify Storefront API to:
- Fetch products
- Manage cart
- Process checkout
- Handle customer authentication

## Theme Files (Alternative: Embedded Approach)

If you prefer to embed React components in a Shopify theme:

### Directory Structure
```
shopify/theme/
├── layout/
│   └── theme.liquid          # Main layout with SEO
├── sections/
│   └── product-template.liquid
├── snippets/
│   ├── organization-schema.liquid
│   └── product-schema.liquid
└── templates/
    └── product.liquid
```

### Deployment

1. **Install Shopify CLI**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Login to Shopify**
   ```bash
   shopify login --store your-store.myshopify.com
   ```

3. **Push Theme**
   ```bash
   shopify theme push --path shopify/theme
   ```

## SEO Configuration for Shopify

### Metafields Setup

Add these metafields to products for enhanced SEO:

```json
{
  "namespace": "seo",
  "key": "custom_title",
  "value": "SEO optimized title",
  "type": "single_line_text_field"
}
```

### Product Metafields
- `seo.custom_title` - Custom SEO title
- `seo.custom_description` - Custom meta description
- `reviews.rating` - Average rating (for schema)
- `reviews.count` - Number of reviews (for schema)

## Best Practices

1. **Use Shopify CDN** for product images
2. **Implement lazy loading** for images
3. **Add structured data** (JSON-LD) to all product pages
4. **Optimize Core Web Vitals** - target LCP < 2.5s
5. **Mobile-first design** - ensure responsive layouts
6. **Canonical URLs** - prevent duplicate content issues

## Resources

- [Shopify Storefront API Docs](https://shopify.dev/api/storefront)
- [Hydrogen React](https://shopify.dev/custom-storefronts/hydrogen-react)
- [Shopify SEO Guide](https://help.shopify.com/en/manual/promoting-marketing/seo)
- [Schema.org Product](https://schema.org/Product)

## Support

For questions or issues with Shopify integration, consult:
- Shopify Partners Support
- Shopify Community Forums
- LegerLAB Development Team
