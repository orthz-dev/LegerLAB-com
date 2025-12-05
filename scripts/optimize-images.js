const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Image Optimization Script for LegerLAB
 * 
 * This script optimizes images for web use:
 * - Converts to WebP format
 * - Generates multiple sizes (hero, thumbnail)
 * - Compresses with 85% quality
 * - Proper naming conventions
 */

const IMAGE_SIZES = {
    hero: { width: 1200, height: 1200, suffix: 'hero' },
    thumbnail: { width: 400, height: 400, suffix: 'thumb' },
    og: { width: 1200, height: 630, suffix: 'og' }
};

const QUALITY = 85;

async function optimizeImage(inputPath, outputDir, baseName) {
    try {
        // Ensure output directory exists
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Generate different sizes
        for (const [sizeName, config] of Object.entries(IMAGE_SIZES)) {
            const outputPath = path.join(
                outputDir,
                `${baseName}-${config.suffix}.webp`
            );

            await sharp(inputPath)
                .resize(config.width, config.height, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            console.log(`✅ Created: ${outputPath}`);
        }

        // Also create a JPG fallback for the hero image
        const jpgPath = path.join(outputDir, `${baseName}-hero.jpg`);
        await sharp(inputPath)
            .resize(IMAGE_SIZES.hero.width, IMAGE_SIZES.hero.height, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({ quality: QUALITY })
            .toFile(jpgPath);

        console.log(`✅ Created JPG fallback: ${jpgPath}`);
    } catch (error) {
        console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    }
}

async function main() {
    const inputDir = path.join(process.cwd(), 'assets', 'images', 'source');
    const outputDir = path.join(process.cwd(), 'assets', 'images', 'products');

    console.log('🖼️  Starting image optimization...\n');

    // Check if source directory exists
    if (!fs.existsSync(inputDir)) {
        console.log(`⚠️  Source directory not found: ${inputDir}`);
        console.log('📁 Creating source directory...');
        fs.mkdirSync(inputDir, { recursive: true });
        console.log('ℹ️  Please add your source images to:', inputDir);
        console.log('ℹ️  Then run this script again.');
        return;
    }

    // Get all image files from source directory
    const files = fs.readdirSync(inputDir).filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    if (files.length === 0) {
        console.log('⚠️  No images found in source directory');
        console.log('ℹ️  Please add images to:', inputDir);
        return;
    }

    console.log(`📸 Found ${files.length} images to optimize\n`);

    // Process each image
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const baseName = path.basename(file, path.extname(file));

        console.log(`Processing: ${file}`);
        await optimizeImage(inputPath, outputDir, baseName);
        console.log('');
    }

    console.log('✨ Image optimization complete!');
    console.log(`📁 Optimized images saved to: ${outputDir}`);
}

main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
