# Audit Codebase - Localhost Structure (/dev)

## 📍 Routing Map (React Router)

| URL Path | Component | Description | Shopify Equivalent |
| :--- | :--- | :--- | :--- |
| `/` | `Home.tsx` | Homepage | `index.json` + Sections |
| `/collant` | `CollantPage.tsx` | Product Landing / Collection | `product.json` or `collection.json` |
| `/come-funziona` | `HowToUse.tsx` | Informational Page | `page.how-to.json` |
| `/negozi` | `Retailers.tsx` | Store Locator / List | `page.retailers.json` |
| `/lo-sapevi-che` | `BlogDidYouKnow.tsx` | Blog Category / Article | `blog.liquid` or `article.liquid` |
| `/magazine` | `BlogMagazine.tsx` | Blog Category / Article | `blog.liquid` or `article.liquid` |
| `/ordina` | `OrderPage.tsx` | **Main Product Flow** | `product.liquid` (Custom Template) |
| `/chi-siamo` | `About.tsx` | About Page | `page.about.json` |
| `/faq` | `Faq.tsx` | FAQ Page | `page.faq.json` |
| `/privacy-policy` | `Legal.tsx` | Legal Page | `page.privacy.json` |
| `/spedizioni-resi` | `Legal.tsx` | Legal Page | `page.shipping.json` |

## 🧩 Component Structure

### Layout (`src/components`)
*   `Layout.tsx`: Main wrapper (Header + Footer).
*   `Header.tsx`: Navigation bar.
*   `Footer.tsx`: Site footer.
*   `PageWrapper.tsx`: SEO & Container wrapper.

### Key Pages Analysis
*   **OrderPage.tsx**: Appears to be the custom "Checkout/Product" flow. Crucial for migration. It likely replaces standard Shopify Product pages.
*   **CollantPage.tsx**: Focused marketing page for the main product.

### Unused/Dead Code?
*   `ProductPage.tsx`: Present in `pages/` but **NOT referenced in `App.tsx`**.
    *   *Action Item*: Check if this contains valuable logic effectively replaced by `OrderPage`, or if it's legacy.

## ⚠️ Migration Critical Points
1.  **Routing**: Valid URLs are hardcoded in `types.ts`. Shopify handles routing differently (e.g. `/products/*`, `/pages/*`). Redirects or strict stricture alignment needed.
2.  **Order Flow**: The React app has a custom `/ordina` flow. On Shopify, this typically maps to `/products/main-product`. We need to decide if we keep a custom landing page or use the standard product template.
3.  **Data Fetching**: React pages likely import JSON content directly or have hardcoded text. This must be replaced by Liquid schema settings.
