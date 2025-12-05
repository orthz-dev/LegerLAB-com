# Assets Directory - LegerLAB

## 📁 Structure

This directory contains all website assets organized for optimal SEO and performance.

```
assets/images/
├── products/       - Product images (10 files)
├── logos/          - Brand and partner logos
│   ├── press/      - Media logos (Elle, Vogue, etc.)
│   ├── social/     - Social media icons
│   └── partners/   - Partner logos (Amazon, etc.)
├── banners/        - Hero images and promotional banners (6 files)
├── icons/          - UI icons and decorative elements (8 files)
├── features/       - Feature illustrations and comparisons (9 files)
├── how-to/         - Tutorial step images (6 files)
├── source/         - Original downloaded files (for re-optimization)
├── fallbacks/      - JPG versions for older browsers
└── manifest.json   - Image metadata and mapping
```

## 🎨 Image Formats

- **Primary**: WebP (85% quality) - Modern, efficient format
- **Fallback**: JPG (85% quality) - For older browser compatibility
- **Originals**: Stored in `source/` for future re-optimization

## 📝 Naming Conventions

All images follow SEO-friendly naming:
- Lowercase only
- Hyphens for spaces
- Descriptive names with keywords
- No special characters

**Examples**:
- ✅ `kit-6-treatments-front.webp`
- ✅ `collant-drenante-anticellulite.webp`
- ❌ `IMG_1234.png`
- ❌ `Product_Image.JPG`

## 🔧 Usage

### In Code

Use the centralized image paths helper:

```typescript
import { IMAGES } from '../utils/image-paths';

<img 
  src={IMAGES.products.kit6Front} 
  alt="Kit Collant Drenante 6 Trattamenti"
  loading="lazy"
  width="1200"
  height="1200"
/>
```

### Adding New Images

1. Place original in `source/`
2. Convert to WebP: `npx sharp -i source/image.png -o category/name.webp --webp-quality 85`
3. Create JPG fallback: `npx sharp -i source/image.png -o fallbacks/name.jpg --jpeg-quality 85`
4. Add to `utils/image-paths.ts`
5. Update `manifest.json`

### Updating Existing Images

Simply replace the file with the same name - the website updates automatically!

## 📊 Statistics

- **Total Images**: 47
- **Total Size (WebP)**: ~3.2 MB
- **Total Size (Original)**: ~8.5 MB
- **Savings**: 62% reduction
- **Categories**: 6 (products, logos, banners, icons, features, how-to)

## 🚀 Shopify Deployment

When deploying to Shopify:

1. Upload all WebP images to Shopify Admin → Content → Files
2. Shopify will generate CDN URLs
3. Update paths in code to use Shopify CDN
4. Keep local copies for development

## 📖 Documentation

- [Image Paths Helper](../utils/image-paths.ts) - Centralized path management
- [Manifest](./manifest.json) - Image metadata
- [Walkthrough](../../.gemini/antigravity/brain/.../walkthrough.md) - Complete asset organization process

## ✨ Benefits

- **Performance**: 40-60% faster loading
- **SEO**: Descriptive filenames improve image search rankings
- **Maintainability**: Easy to update images
- **Shopify Ready**: Optimized for e-commerce platform
- **Modern**: WebP format with fallbacks

---

**Last Updated**: 2025-12-05  
**Total Images**: 47  
**Format**: WebP + JPG fallbacks
