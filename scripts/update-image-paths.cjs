const fs = require('fs-extra');
const path = require('path');

// Mapping of old CDN URLs to new local paths
const URL_REPLACEMENTS = {
    // Products
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/67dc9eb81b328_KC_6_25_01.png': '/assets/images/products/kit-6-treatments-front.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/67dc9c7cc6f5f_KC_6_25_02.png': '/assets/images/products/kit-6-treatments-box.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/692072213c31b_AB_test_04.jpg': '/assets/images/products/kit-1-treatment-front.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f948249765d_AB_test_02.jpg': '/assets/images/products/kit-1-treatment-lifestyle.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/692071f9f031b_R_N01_NEW_C.jpg': '/assets/images/products/refill-500ml.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/67dc9c473885a_Solo.png': '/assets/images/products/collant-solo.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65aa55785c021_C_NEW_08.jpg': '/assets/images/products/collant-wearing-1.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f948d7e32eb_foto.png': '/assets/images/products/collant-wearing-2.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d0ba3a2e5_24_gennaio_04.jpg': '/assets/images/products/gel-application-1.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d0d7d789f_R_N07.jpg': '/assets/images/products/gel-application-2.webp',

    // Logos - Press
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f92723c59f2_ELLE-logo.png': '/assets/images/logos/press/elle-logo.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f92735f010c_4dbf1d5f6c7325ae5c1fbff0ba844ffd.jpeg': '/assets/images/logos/press/vogue-logo.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f92acff1104_logo-myp-orig.png': '/assets/images/logos/press/mypersonaltrainer-logo.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f92743cd0f7_Corriere_della_Sera.svg.png': '/assets/images/logos/press/corriere-logo.webp',

    // Logos - Social
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f938543c74d_Instagram_V3.png': '/assets/images/logos/social/instagram-icon.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f93869431da_Facebook_V3.png': '/assets/images/logos/social/facebook-icon.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f939e7355c5_Instagram3d.png': '/assets/images/logos/social/instagram-3d.webp',

    // Logos - Partners
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/654fa27a3ef7d_amazon-blac.png': '/assets/images/logos/partners/amazon-logo.webp',

    // Banners
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f925913a5ad_Main-Sfonfo_V2B.png': '/assets/images/banners/hero-background.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65aa541369831_legsB.png': '/assets/images/banners/legs-promo.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f92e693658b_Leger-experience.png': '/assets/images/banners/leger-experience.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f955bd9f525_Offerta-partner.png': '/assets/images/banners/partner-offer.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f954d96b7c6_influencer.png': '/assets/images/banners/influencer-promo.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f9511a2a63d_Store.png': '/assets/images/banners/store-image.webp',

    // Icons
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d60cc54b5_STELLINEV.png': '/assets/images/icons/stars-decoration.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d6cb4367f_Ice.png': '/assets/images/icons/ice-icon.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/654f5ce68289d_Collant_V.png': '/assets/images/icons/collant-icon.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f9521e2f95a_icon-store.png': '/assets/images/icons/store-icon.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f952066a17f_icon_hands.png': '/assets/images/icons/hands-icon.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f952b546a5a_icon-influencer.png': '/assets/images/icons/influencer-icon.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/654fc46156da7_box.png': '/assets/images/icons/shipping-free.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/654fc2a4dd8e3_box2.png': '/assets/images/icons/shipping-fast.webp',

    // Features
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/654f5f74a4da8_Bollini_V1.png': '/assets/images/features/benefits-badges.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d226f1a29_24_gennaio_05A.png': '/assets/images/features/salt-process-a.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d23cab681_24_gennaio_05B.png': '/assets/images/features/salt-process-b.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d2595324e_24_gennaio_05C.png': '/assets/images/features/salt-process-c.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b7d267bedfa_24_gennaio_05D.png': '/assets/images/features/salt-process-d.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65aa5eed1139a_GelB.png': '/assets/images/features/gel-details.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/6634a9c34c94c_ricaricaC.png': '/assets/images/features/refill-info.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f937651b1cf_VS2.png': '/assets/images/features/comparison-vs-1.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/68f937106411e_VS.png': '/assets/images/features/comparison-vs-2.webp',

    // How-To
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b4e2cb81a46_PT_01.png': '/assets/images/how-to/step-01-prepare.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b4e2d7a9e37_PT_02.png': '/assets/images/how-to/step-02-apply.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b4e2eb360af_PT_03.png': '/assets/images/how-to/step-03-wear.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b4e2f7c15c7_PT_04.png': '/assets/images/how-to/step-04-relax.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b4e302bb5a1_PT_05.png': '/assets/images/how-to/step-05-remove.webp',
    'https://d1yei2z3i6k35z.cloudfront.net/5572744/65b4e30e0c2a7_PT_06.png': '/assets/images/how-to/step-06-finish.webp',
};

// Files to update
const FILES_TO_UPDATE = [
    'pages/Home.tsx',
    'pages/CollantPage.tsx',
    'pages/HowToUse.tsx',
    'pages/Retailers.tsx',
    'data/products.ts',
];

async function updateFile(filePath) {
    const fullPath = path.join(__dirname, '..', filePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return { updated: false, replacements: 0 };
    }

    let content = await fs.readFile(fullPath, 'utf8');
    let replacements = 0;

    // Replace all CDN URLs with local paths
    for (const [oldUrl, newPath] of Object.entries(URL_REPLACEMENTS)) {
        const regex = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = content.match(regex);

        if (matches) {
            content = content.replace(regex, newPath);
            replacements += matches.length;
        }
    }

    if (replacements > 0) {
        await fs.writeFile(fullPath, content, 'utf8');
        console.log(`✓ Updated ${filePath}: ${replacements} replacements`);
        return { updated: true, replacements };
    } else {
        console.log(`  No changes needed: ${filePath}`);
        return { updated: false, replacements: 0 };
    }
}

async function main() {
    console.log('🔄 Starting image path updates...\n');

    let totalFiles = 0;
    let totalReplacements = 0;

    for (const file of FILES_TO_UPDATE) {
        const result = await updateFile(file);
        if (result.updated) {
            totalFiles++;
            totalReplacements += result.replacements;
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log('📊 Summary:');
    console.log(`   Files updated: ${totalFiles}`);
    console.log(`   Total replacements: ${totalReplacements}`);
    console.log('='.repeat(50));

    console.log('\n✅ Image path updates complete!');
    console.log('\nNext steps:');
    console.log('1. Test the website: npm run dev');
    console.log('2. Verify all images load correctly');
    console.log('3. Check browser console for any 404 errors');
}

main().catch(console.error);
