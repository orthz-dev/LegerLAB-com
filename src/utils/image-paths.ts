/**
 * Centralized image paths for the LegerLAB website
 * All images are stored locally in /react-assets/images/ (local) or /assets/images/ (Shopify)
 * WebP format with JPG fallbacks for older browsers
 */

// Determine base path dynamically
const getBasePath = () => {
    if (typeof window !== 'undefined' && (window as any).shopify_assets_url) {
        return (window as any).shopify_assets_url;
    }
    return '/react-assets/'; // Local dev fallback
};

const BASE = getBasePath();

// Helper to construct path (avoids double slashes if base has one)
// AND flattens structure for Shopify (images/products/a.jpg -> images-products-a.jpg)
const p = (path: string) => {
    if (typeof window !== 'undefined' && (window as any).shopify_assets_url) {
        // Production: Flatten path (replace slashes with hyphens) to match build script
        // Also remove any leading slash if present in path to avoid issues
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        const flattenedPath = cleanPath.replace(/\//g, '-');
        return `${BASE}${flattenedPath}`;
    }
    // Local: Keep original structure
    return `${BASE}${path}`;
};

export const IMAGES = {
    products: {
        kit6Front: p('images/products/kit-6-treatments-front.webp'),
        kit6Box: p('images/products/kit-6-treatments-box.webp'),
        kit1Front: p('images/products/kit-1-treatment-front.webp'),
        kit1Lifestyle: p('images/products/kit-1-treatment-lifestyle.webp'),
        refill500ml: p('images/products/refill-500ml.webp'),
        collantSolo: p('images/products/collant-solo.webp'),
        collantWearing1: p('images/products/collant-wearing-1.webp'),
        collantWearing2: p('images/products/collant-wearing-2.webp'),
        gelApplication1: p('images/products/gel-application-1.webp'),
        gelApplication2: p('images/products/gel-application-2.webp'),
    },

    logos: {
        press: {
            elle: p('images/logos/press/elle-logo.webp'),
            vogue: p('images/logos/press/vogue-logo.webp'),
            myPersonalTrainer: p('images/logos/press/mypersonaltrainer-logo.webp'),
            corriere: p('images/logos/press/corriere-logo.webp'),
        },
        social: {
            instagram: p('images/logos/social/instagram-icon.webp'),
            facebook: p('images/logos/social/facebook-icon.webp'),
            instagram3d: p('images/logos/social/instagram-3d.webp'),
        },
        partners: {
            amazon: p('images/logos/partners/amazon-logo.webp'),
        },
    },

    banners: {
        heroBackground: p('images/banners/hero-background.webp'),
        legsPromo: p('images/banners/legs-promo.webp'),
        legerExperience: p('images/banners/leger-experience.webp'),
        partnerOffer: p('images/banners/partner-offer.webp'),
        influencerPromo: p('images/banners/influencer-promo.webp'),
        storeImage: p('images/banners/store-image.webp'),
    },

    icons: {
        stars: p('images/icons/stars-decoration.webp'),
        ice: p('images/icons/ice-icon.webp'),
        collant: p('images/icons/collant-icon.webp'),
        store: p('images/icons/store-icon.webp'),
        hands: p('images/icons/hands-icon.webp'),
        influencer: p('images/icons/influencer-icon.webp'),
        shippingFree: p('images/icons/shipping-free.webp'),
        shippingFast: p('images/icons/shipping-fast.webp'),
    },

    features: {
        benefitsBadges: p('images/features/benefits-badges.webp'),
        saltProcessA: p('images/features/salt-process-a.webp'),
        saltProcessB: p('images/features/salt-process-b.webp'),
        saltProcessC: p('images/features/salt-process-c.webp'),
        saltProcessD: p('images/features/salt-process-d.webp'),
        gelDetails: p('images/features/gel-details.webp'),
        refillInfo: p('images/features/refill-info.webp'),
        comparisonVs1: p('images/features/comparison-vs-1.webp'),
        comparisonVs2: p('images/features/comparison-vs-2.webp'),
    },

    howTo: {
        step1: p('images/how-to/step-01-prepare.webp'),
        step2: p('images/how-to/step-02-apply.webp'),
        step3: p('images/how-to/step-03-wear.webp'),
        step4: p('images/how-to/step-04-relax.webp'),
        step5: p('images/how-to/step-05-remove.webp'),
        step6: p('images/how-to/step-06-finish.webp'),
    },
} as const;

/**
 * Get JPG fallback path for a WebP image
 * @param webpPath - Path to WebP image
 * @returns Path to JPG fallback
 */
export function getJPGFallback(webpPath: string): string {
    return webpPath.replace('.webp', '.jpg');
}

/**
 * Get image with fallback for older browsers
 * @param webpPath - Path to WebP image
 * @returns Object with webp and jpg paths
 */
export function getImageWithFallback(webpPath: string) {
    return {
        webp: webpPath,
        jpg: getJPGFallback(webpPath),
    };
}

/**
 * Alt text templates for SEO
 */
export const ALT_TEXT = {
    products: {
        kit6: 'Kit Collant Drenante Anticellulite 6 Trattamenti Léger Lab',
        kit1: 'Kit Collant Drenante Anticellulite 1 Trattamento Léger Lab',
        refill: 'Ricarica Gel Attivo 500ml per Collant Drenante Léger Lab',
        collant: 'Collant Drenante Anticellulite Léger Lab Made in Italy',
    },
    logos: {
        elle: 'Logo Elle Magazine',
        vogue: 'Logo Vogue Italia',
        myPersonalTrainer: 'Logo MyPersonalTrainer',
        corriere: 'Logo Corriere della Sera',
        instagram: 'Instagram Léger Lab',
        facebook: 'Facebook Léger Lab',
        amazon: 'Disponibile su Amazon',
    },
    icons: {
        stars: 'Decorazione stelle',
        ice: 'Icona gel effetto freddo',
        shipping: 'Spedizione gratuita e veloce',
    },
} as const;

export default IMAGES;
