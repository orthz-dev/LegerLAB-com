import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DIST_ASSETS = path.join(__dirname, '../dist/assets');
const SHOPIFY_ASSETS = path.join(__dirname, '../../assets');

// Ensure source exists
if (!fs.existsSync(DIST_ASSETS)) {
    console.error('Error: dev/dist/assets not found. Run "npm run build" first.');
    process.exit(1);
}

// Ensure target exists
if (!fs.existsSync(SHOPIFY_ASSETS)) {
    fs.mkdirSync(SHOPIFY_ASSETS, { recursive: true });
}

// Copy files
const files = fs.readdirSync(DIST_ASSETS);

// Track synced files
let syncedCount = 0;

files.forEach(file => {
    const srcPath = path.join(DIST_ASSETS, file);

    // Copy main.js (new vanilla JS entry point)
    if (file === 'main.js') {
        fs.copyFileSync(srcPath, path.join(SHOPIFY_ASSETS, 'main.js'));
        console.log('✓ Synced main.js');
        syncedCount++;
    }
    // Copy main CSS
    else if (file.endsWith('.css') && (file.includes('main') || file.includes('index'))) {
        fs.copyFileSync(srcPath, path.join(SHOPIFY_ASSETS, 'styles.css'));
        console.log(`✓ Synced styles.css (from ${file})`);
        syncedCount++;
    }
    // Copy other assets (images, fonts, etc.) but skip HTML and chunk files
    else if (!file.endsWith('.html') && !file.includes('chunk')) {
        fs.copyFileSync(srcPath, path.join(SHOPIFY_ASSETS, file));
        console.log(`  Copied: ${file}`);
        syncedCount++;
    }
});

console.log(`\n✅ Sync complete! ${syncedCount} files synced to Shopify assets.`);
