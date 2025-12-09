# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Shopify theme** for Léger LAB, an Italian e-commerce site selling draining anti-cellulite tights (Collant Drenante Anticellulite). The project uses a **dual architecture**:

1. **Shopify Native Theme** (root directory) - The production theme
2. **React/Vite Development Environment** (`dev/` directory) - For building reusable components

## Architecture

### Dual-Mode System

The repository contains TWO separate codebases that work together:

**Production Theme (Root)**
- Standard Shopify theme structure with Liquid templates
- Located in root directories: `assets/`, `sections/`, `templates/`, `layout/`, `snippets/`, `config/`, `locales/`
- Uses TailwindCSS compiled to `assets/styles.css`
- Custom JavaScript in `assets/custom.js`
- Deployed directly to Shopify

**Development Environment (`dev/`)**
- React + TypeScript + Vite setup
- TailwindCSS + PostCSS for styling
- Builds assets that sync to the root `assets/` directory
- Used for complex component development before converting to Liquid

### Build Flow

```
dev/src/ (React/TS components)
    ↓ (npm run build)
dev/dist/assets/
    ↓ (npm run build:shopify)
assets/ (Shopify theme assets)
    ↓ (shopify theme push)
Shopify Store
```

## Development Commands

### Shopify Theme Development

```bash
# Start local development server with hot reload
shopify theme dev --store=leger-lab.myshopify.com

# Push theme to Shopify (production)
shopify theme push --store=leger-lab.myshopify.com
```

### React/Vite Development Environment (dev/)

All commands must be run from the `dev/` directory:

```bash
cd dev

# Start Vite dev server
npm run dev

# Build React app
npm run build

# Build and sync to Shopify theme assets
npm run build:shopify

# Preview production build
npm run preview

# Optimize images
npm run optimize-images

# Generate sitemap
npm run generate-sitemap

# Full SEO check (build + sitemap)
npm run seo-check
```

### Build Process Details

The `npm run build:shopify` command:
1. Compiles TypeScript (`tsc`)
2. Builds with Vite to `dev/dist/`
3. Runs `scripts/sync-shopify.js` which:
   - Copies main CSS from `dev/dist/assets/index-*.css` → `assets/styles.css`
   - Copies main JS from `dev/dist/assets/index-*.js` → `assets/custom.js`
   - Copies other non-HTML, non-JS assets (images, fonts)

## File Structure

### Shopify Theme (Root)

```
assets/              # Static files (CSS, JS, images)
  ├── styles.css     # Compiled TailwindCSS (built from dev/)
  ├── custom.js      # Main JavaScript bundle (built from dev/)
  └── *.{png,jpg}    # Images and other assets

config/              # Theme configuration
  ├── settings_schema.json   # Theme settings definition
  └── settings_data.json     # Instance settings (gitignored)

layout/
  └── theme.liquid   # Main HTML wrapper

sections/            # Reusable theme sections
  ├── header.liquid
  ├── footer.liquid
  ├── hero.liquid
  ├── main-product.liquid
  ├── main-collection.liquid
  └── ...            # Various content sections

snippets/            # Reusable Liquid components
  └── product-card.liquid

templates/           # Page templates
  ├── index.liquid        # Homepage
  ├── product.liquid      # Product page
  ├── collection.liquid   # Collection page
  ├── cart.liquid         # Cart page
  └── page.liquid         # Generic page

locales/             # Translations (Italian)
```

### React Development Environment (dev/)

```
dev/
├── src/
│   ├── components/    # React components
│   ├── pages/         # Page components (legacy/reference)
│   ├── utils/         # Utility functions
│   ├── data/          # Static data (products, metadata)
│   ├── config/        # Configuration files
│   └── types.ts       # TypeScript definitions
├── public/            # Static assets
├── scripts/           # Build scripts
│   └── sync-shopify.js  # Syncs dist to theme assets
├── dist/              # Build output (gitignored)
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Key Technical Details

### Styling System

- **TailwindCSS** is the primary styling solution
- Custom brand colors defined in `tailwind.config.js`:
  - `brand-strong`: #200A19 (dark purple)
  - `brand-text`: #3C514C (gray-green)
  - `brand-soft`: #FEEBEA (soft pink)
  - `brand-fresh`: #BCDEC8 (mint green)
- Font: **Lato** (loaded from Google Fonts in `layout/theme.liquid`)

### Shopify Liquid Patterns

**Section Schema**: Each `.liquid` file in `sections/` includes a schema:
```liquid
{% schema %}
{
  "name": "Section Name",
  "settings": []
}
{% endschema %}
```

**Templates**: Templates in `templates/` use sections:
```liquid
{% section 'section-name' %}
```

**Image Filters**: Use Shopify's image filters:
```liquid
{{ product.featured_image | img_url: 'master' }}
{{ image | img_url: '200x200', crop: 'center' }}
```

### Vite Configuration

- Base path: `./` (relative paths for Shopify CDN)
- Single bundle output (no code splitting for simplicity)
- Output patterns:
  - Entry files: `assets/[name]-[hash].js`
  - Assets: `assets/[name]-[hash].[ext]`
- Path alias: `@` → `./src`

### Git Workflow

- Main branch: `main`
- `.gitignore` excludes:
  - `config/settings_data.json` (Shopify instance settings)
  - `dev/node_modules`, `dev/dist`, `dev/.vite`
  - `.shopify` directory
- `.shopifyignore` prevents uploading dev files to Shopify

## Common Development Patterns

### Adding a New Section

1. Create `sections/my-section.liquid`
2. Add Liquid markup with TailwindCSS classes
3. Add schema at the bottom
4. Reference in template: `{% section 'my-section' %}`

### Building Complex Components

If a component is too complex for Liquid:

1. Build it in `dev/src/components/` using React
2. Test with `npm run dev`
3. Build with `npm run build:shopify`
4. Reference in Liquid: `{{ 'custom.js' | asset_url | script_tag }}`

### Modifying Styles

1. Update `dev/src/index.css` or Tailwind classes
2. Run `npm run build:shopify` from `dev/`
3. `assets/styles.css` will be updated
4. Theme automatically picks up changes

### Working with Product Data

- Live product data: Use Liquid objects (`product`, `collection`, `cart`)
- Static product definitions: See `dev/src/data/products.ts` and `products.json`
- SEO metadata: `dev/src/data/seo-metadata.json`

## Deployment

### GitHub Integration (Recommended)

1. Push to `main` branch
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Connect from GitHub"
4. Select this repository and `main` branch

### Shopify CLI

```bash
shopify theme push --store=leger-lab.myshopify.com
```

## Important Notes

- **Never commit** `config/settings_data.json` - it contains instance-specific settings
- **Always build from dev/** before pushing theme changes if you modified React components
- The `dev/` directory is excluded from Shopify uploads via `.shopifyignore`
- `custom.js` is large (~332KB) due to React bundle - this is expected for the dev environment
- Store URL: `leger-lab.myshopify.com`

## File Naming Conventions

- Liquid sections: `kebab-case.liquid`
- React components: `PascalCase.tsx`
- TypeScript types: `types.ts` (interfaces exported)
- Config files: `kebab-case.{js,ts,json}`
