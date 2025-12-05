/**
 * Centralized image paths for the LegerLAB website
 * All images are stored locally in /react-assets/images/ with SEO-friendly names
 * WebP format with JPG fallbacks for older browsers
 */

export const IMAGES = {
    products: {
        kit6Front: '/react-assets/images/products/kit-6-treatments-front.webp',
        kit6Box: '/react-assets/images/products/kit-6-treatments-box.webp',
        kit1Front: '/react-assets/images/products/kit-1-treatment-front.webp',
        kit1Lifestyle: '/react-assets/images/products/kit-1-treatment-lifestyle.webp',
        refill500ml: '/react-assets/images/products/refill-500ml.webp',
        collantSolo: '/react-assets/images/products/collant-solo.webp',
        collantWearing1: '/react-assets/images/products/collant-wearing-1.webp',
        collantWearing2: '/react-assets/images/products/collant-wearing-2.webp',
        gelApplication1: '/react-assets/images/products/gel-application-1.webp',
        gelApplication2: '/react-assets/images/products/gel-application-2.webp',
    },

    logos: {
        press: {
            elle: '/react-assets/images/logos/press/elle-logo.webp',
            vogue: '/react-assets/images/logos/press/vogue-logo.webp',
            myPersonalTrainer: '/react-assets/images/logos/press/mypersonaltrainer-logo.webp',
            corriere: '/react-assets/images/logos/press/corriere-logo.webp',
        },
        social: {
            instagram: '/react-assets/images/logos/social/instagram-icon.webp',
            facebook: '/react-assets/images/logos/social/facebook-icon.webp',
            instagram3d: '/react-assets/images/logos/social/instagram-3d.webp',
        },
        partners: {
            amazon: '/react-assets/images/logos/partners/amazon-logo.webp',
        },
    },

    banners: {
        heroBackground: '/react-assets/images/banners/hero-background.webp',
        legsPromo: '/react-assets/images/banners/legs-promo.webp',
        legerExperience: '/react-assets/images/banners/leger-experience.webp',
        partnerOffer: '/react-assets/images/banners/partner-offer.webp',
        influencerPromo: '/react-assets/images/banners/influencer-promo.webp',
        storeImage: '/react-assets/images/banners/store-image.webp',
    },

    icons: {
        stars: '/react-assets/images/icons/stars-decoration.webp',
        ice: '/react-assets/images/icons/ice-icon.webp',
        collant: '/react-assets/images/icons/collant-icon.webp',
        store: '/react-assets/images/icons/store-icon.webp',
        hands: '/react-assets/images/icons/hands-icon.webp',
        influencer: '/react-assets/images/icons/influencer-icon.webp',
        shippingFree: '/react-assets/images/icons/shipping-free.webp',
        shippingFast: '/react-assets/images/icons/shipping-fast.webp',
    },

    features: {
        benefitsBadges: '/react-assets/images/features/benefits-badges.webp',
        saltProcessA: '/react-assets/images/features/salt-process-a.webp',
        saltProcessB: '/react-assets/images/features/salt-process-b.webp',
        saltProcessC: '/react-assets/images/features/salt-process-c.webp',
        saltProcessD: '/react-assets/images/features/salt-process-d.webp',
        gelDetails: '/react-assets/images/features/gel-details.webp',
        refillInfo: '/react-assets/images/features/refill-info.webp',
        comparisonVs1: '/react-assets/images/features/comparison-vs-1.webp',
        comparisonVs2: '/react-assets/images/features/comparison-vs-2.webp',
    },

    howTo: {
        step1: '/react-assets/images/how-to/step-01-prepare.webp',
        step2: '/react-assets/images/how-to/step-02-apply.webp',
        step3: '/react-assets/images/how-to/step-03-wear.webp',
        step4: '/react-assets/images/how-to/step-04-relax.webp',
        step5: '/react-assets/images/how-to/step-05-remove.webp',
        step6: '/react-assets/images/how-to/step-06-finish.webp',
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
