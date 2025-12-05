/**
 * Centralized image paths for the LegerLAB website
 * All images are stored locally in /assets/images/ with SEO-friendly names
 * WebP format with JPG fallbacks for older browsers
 */

export const IMAGES = {
    products: {
        kit6Front: '/assets/images/products/kit-6-treatments-front.webp',
        kit6Box: '/assets/images/products/kit-6-treatments-box.webp',
        kit1Front: '/assets/images/products/kit-1-treatment-front.webp',
        kit1Lifestyle: '/assets/images/products/kit-1-treatment-lifestyle.webp',
        refill500ml: '/assets/images/products/refill-500ml.webp',
        collantSolo: '/assets/images/products/collant-solo.webp',
        collantWearing1: '/assets/images/products/collant-wearing-1.webp',
        collantWearing2: '/assets/images/products/collant-wearing-2.webp',
        gelApplication1: '/assets/images/products/gel-application-1.webp',
        gelApplication2: '/assets/images/products/gel-application-2.webp',
    },

    logos: {
        press: {
            elle: '/assets/images/logos/press/elle-logo.webp',
            vogue: '/assets/images/logos/press/vogue-logo.webp',
            myPersonalTrainer: '/assets/images/logos/press/mypersonaltrainer-logo.webp',
            corriere: '/assets/images/logos/press/corriere-logo.webp',
        },
        social: {
            instagram: '/assets/images/logos/social/instagram-icon.webp',
            facebook: '/assets/images/logos/social/facebook-icon.webp',
            instagram3d: '/assets/images/logos/social/instagram-3d.webp',
        },
        partners: {
            amazon: '/assets/images/logos/partners/amazon-logo.webp',
        },
    },

    banners: {
        heroBackground: '/assets/images/banners/hero-background.webp',
        legsPromo: '/assets/images/banners/legs-promo.webp',
        legerExperience: '/assets/images/banners/leger-experience.webp',
        partnerOffer: '/assets/images/banners/partner-offer.webp',
        influencerPromo: '/assets/images/banners/influencer-promo.webp',
        storeImage: '/assets/images/banners/store-image.webp',
    },

    icons: {
        stars: '/assets/images/icons/stars-decoration.webp',
        ice: '/assets/images/icons/ice-icon.webp',
        collant: '/assets/images/icons/collant-icon.webp',
        store: '/assets/images/icons/store-icon.webp',
        hands: '/assets/images/icons/hands-icon.webp',
        influencer: '/assets/images/icons/influencer-icon.webp',
        shippingFree: '/assets/images/icons/shipping-free.webp',
        shippingFast: '/assets/images/icons/shipping-fast.webp',
    },

    features: {
        benefitsBadges: '/assets/images/features/benefits-badges.webp',
        saltProcessA: '/assets/images/features/salt-process-a.webp',
        saltProcessB: '/assets/images/features/salt-process-b.webp',
        saltProcessC: '/assets/images/features/salt-process-c.webp',
        saltProcessD: '/assets/images/features/salt-process-d.webp',
        gelDetails: '/assets/images/features/gel-details.webp',
        refillInfo: '/assets/images/features/refill-info.webp',
        comparisonVs1: '/assets/images/features/comparison-vs-1.webp',
        comparisonVs2: '/assets/images/features/comparison-vs-2.webp',
    },

    howTo: {
        step1: '/assets/images/how-to/step-01-prepare.webp',
        step2: '/assets/images/how-to/step-02-apply.webp',
        step3: '/assets/images/how-to/step-03-wear.webp',
        step4: '/assets/images/how-to/step-04-relax.webp',
        step5: '/assets/images/how-to/step-05-remove.webp',
        step6: '/assets/images/how-to/step-06-finish.webp',
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
