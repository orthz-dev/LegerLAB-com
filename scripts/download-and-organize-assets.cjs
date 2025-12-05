const https = require('https');
const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');

// Base paths
const ASSETS_DIR = path.join(__dirname, '..', 'assets', 'images');
const SOURCE_DIR = path.join(ASSETS_DIR, 'source');

// Image mapping with SEO-friendly names
const IMAGE_MAP = {
    // Products
    'products/kit-6-treatments-front.webp': '67dc9eb81b328_KC_6_25_01.png',
    'products/kit-6-treatments-box.webp': '67dc9c7cc6f5f_KC_6_25_02.png',
    'products/kit-1-treatment-front.webp': '692072213c31b_AB_test_04.jpg',
    'products/kit-1-treatment-lifestyle.webp': '68f948249765d_AB_test_02.jpg',
    'products/refill-500ml.webp': '692071f9f031b_R_N01_NEW_C.jpg',
    'products/collant-solo.webp': '67dc9c473885a_Solo.png',
    'products/collant-wearing-1.webp': '65aa55785c021_C_NEW_08.jpg',
    'products/collant-wearing-2.webp': '68f948d7e32eb_foto.png',
    'products/gel-application-1.webp': '65b7d0ba3a2e5_24_gennaio_04.jpg',
    'products/gel-application-2.webp': '65b7d0d7d789f_R_N07.jpg',

    // Logos - Press
    'logos/press/elle-logo.webp': '68f92723c59f2_ELLE-logo.png',
    'logos/press/vogue-logo.webp': '68f92735f010c_4dbf1d5f6c7325ae5c1fbff0ba844ffd.jpeg',
    'logos/press/mypersonaltrainer-logo.webp': '68f92acff1104_logo-myp-orig.png',
    'logos/press/corriere-logo.webp': '68f92743cd0f7_Corriere_della_Sera.svg.png',

    // Logos - Social
    'logos/social/instagram-icon.webp': '68f938543c74d_Instagram_V3.png',
    'logos/social/facebook-icon.webp': '68f93869431da_Facebook_V3.png',
    'logos/social/instagram-3d.webp': '68f939e7355c5_Instagram3d.png',

    // Logos - Partners
    'logos/partners/amazon-logo.webp': '654fa27a3ef7d_amazon-blac.png',

    // Banners
    'banners/hero-background.webp': '68f925913a5ad_Main-Sfonfo_V2B.png',
    'banners/legs-promo.webp': '65aa541369831_legsB.png',
    'banners/leger-experience.webp': '68f92e693658b_Leger-experience.png',
    'banners/partner-offer.webp': '68f955bd9f525_Offerta-partner.png',
    'banners/influencer-promo.webp': '68f954d96b7c6_influencer.png',
    'banners/store-image.webp': '68f9511a2a63d_Store.png',

    // Icons
    'icons/stars-decoration.webp': '65b7d60cc54b5_STELLINEV.png',
    'icons/ice-icon.webp': '65b7d6cb4367f_Ice.png',
    'icons/collant-icon.webp': '654f5ce68289d_Collant_V.png',
    'icons/store-icon.webp': '68f9521e2f95a_icon-store.png',
    'icons/hands-icon.webp': '68f952066a17f_icon_hands.png',
    'icons/influencer-icon.webp': '68f952b546a5a_icon-influencer.png',
    'icons/shipping-free.webp': '654fc46156da7_box.png',
    'icons/shipping-fast.webp': '654fc2a4dd8e3_box2.png',

    // Features
    'features/benefits-badges.webp': '654f5f74a4da8_Bollini_V1.png',
    'features/salt-process-a.webp': '65b7d226f1a29_24_gennaio_05A.png',
    'features/salt-process-b.webp': '65b7d23cab681_24_gennaio_05B.png',
    'features/salt-process-c.webp': '65b7d2595324e_24_gennaio_05C.png',
    'features/salt-process-d.webp': '65b7d267bedfa_24_gennaio_05D.png',
    'features/gel-details.webp': '65aa5eed1139a_GelB.png',
    'features/refill-info.webp': '6634a9c34c94c_ricaricaC.png',
    'features/comparison-vs-1.webp': '68f937651b1cf_VS2.png',
    'features/comparison-vs-2.webp': '68f937106411e_VS.png',

    // How-To
    'how-to/step-01-prepare.webp': '65b4e2cb81a46_PT_01.png',
    'how-to/step-02-apply.webp': '65b4e2d7a9e37_PT_02.png',
    'how-to/step-03-wear.webp': '65b4e2eb360af_PT_03.png',
    'how-to/step-04-relax.webp': '65b4e2f7c15c7_PT_04.png',
    'how-to/step-05-remove.webp': '65b4e302bb5a1_PT_05.png',
    'how-to/step-06-finish.webp': '65b4e30e0c2a7_PT_06.png',
};

// CDN base URL
const CDN_BASE = 'https://d1yei2z3i6k35z.cloudfront.net/5572744/';

// Download image from URL
function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filepath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => { });
                reject(err);
            });
        }).on('error', reject);
    });
}

// Convert image to WebP
async function convertToWebP(inputPath, outputPath) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Optimize based on image type
        let quality = 85;
        if (metadata.width > 1200 || metadata.height > 1200) {
            quality = 80; // Lower quality for large images
        }

        await image
            .webp({ quality, effort: 6 })
            .toFile(outputPath);

        console.log(`✓ Converted: ${path.basename(outputPath)}`);
        return true;
    } catch (error) {
        console.error(`✗ Failed to convert ${inputPath}:`, error.message);
        return false;
    }
}

// Create JPG fallback
async function createJPGFallback(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .jpeg({ quality: 85, progressive: true })
            .toFile(outputPath);

        console.log(`✓ Created JPG fallback: ${path.basename(outputPath)}`);
        return true;
    } catch (error) {
        console.error(`✗ Failed to create JPG fallback:`, error.message);
        return false;
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting asset download and organization...\n');

    // Create directory structure
    const dirs = [
        SOURCE_DIR,
        path.join(ASSETS_DIR, 'products'),
        path.join(ASSETS_DIR, 'logos', 'press'),
        path.join(ASSETS_DIR, 'logos', 'social'),
        path.join(ASSETS_DIR, 'logos', 'partners'),
        path.join(ASSETS_DIR, 'banners'),
        path.join(ASSETS_DIR, 'icons'),
        path.join(ASSETS_DIR, 'features'),
        path.join(ASSETS_DIR, 'how-to'),
        path.join(ASSETS_DIR, 'fallbacks'),
    ];

    for (const dir of dirs) {
        await fs.ensureDir(dir);
    }
    console.log('✓ Created directory structure\n');

    // Download and process images
    let successCount = 0;
    let failCount = 0;
    const total = Object.keys(IMAGE_MAP).length;

    for (const [targetPath, sourceFilename] of Object.entries(IMAGE_MAP)) {
        const sourceUrl = CDN_BASE + sourceFilename;
        const sourcePath = path.join(SOURCE_DIR, sourceFilename);
        const targetFullPath = path.join(ASSETS_DIR, targetPath);
        const fallbackPath = targetFullPath.replace('.webp', '.jpg');

        console.log(`\n📥 Processing: ${targetPath}`);
        console.log(`   Source: ${sourceFilename}`);

        try {
            // Download original
            if (!fs.existsSync(sourcePath)) {
                console.log('   Downloading...');
                await downloadImage(sourceUrl, sourcePath);
                console.log('   ✓ Downloaded');
            } else {
                console.log('   ✓ Already downloaded');
            }

            // Convert to WebP
            await convertToWebP(sourcePath, targetFullPath);

            // Create JPG fallback
            await createJPGFallback(sourcePath, fallbackPath);

            successCount++;
        } catch (error) {
            console.error(`   ✗ Error: ${error.message}`);
            failCount++;
        }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 Summary:');
    console.log(`   Total images: ${total}`);
    console.log(`   ✓ Successful: ${successCount}`);
    console.log(`   ✗ Failed: ${failCount}`);
    console.log('='.repeat(50));

    // Create manifest
    const manifest = {
        version: '1.0.0',
        lastUpdated: new Date().toISOString(),
        totalImages: total,
        successful: successCount,
        failed: failCount,
        images: {}
    };

    for (const [targetPath, sourceFilename] of Object.entries(IMAGE_MAP)) {
        const targetFullPath = path.join(ASSETS_DIR, targetPath);

        if (fs.existsSync(targetFullPath)) {
            const stats = fs.statSync(targetFullPath);
            const metadata = await sharp(targetFullPath).metadata();

            manifest.images[targetPath] = {
                originalUrl: CDN_BASE + sourceFilename,
                originalFilename: sourceFilename,
                width: metadata.width,
                height: metadata.height,
                format: metadata.format,
                fileSize: `${(stats.size / 1024).toFixed(2)} KB`,
                created: stats.birthtime.toISOString()
            };
        }
    }

    // Save manifest
    const manifestPath = path.join(ASSETS_DIR, 'manifest.json');
    await fs.writeJSON(manifestPath, manifest, { spaces: 2 });
    console.log(`\n✓ Created manifest: ${manifestPath}`);

    console.log('\n✅ Asset organization complete!');
    console.log('\nNext steps:');
    console.log('1. Review downloaded images in assets/images/');
    console.log('2. Run update script to replace image paths in code');
    console.log('3. Test the website with local images');
}

// Run
main().catch(console.error);
