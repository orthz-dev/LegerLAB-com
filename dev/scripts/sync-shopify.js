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
files.forEach(file => {
    const srcPath = path.join(DIST_ASSETS, file);

    // If it's the main CSS, rename to styles.css
    if (file.endsWith('.css') && file.includes('index')) {
        console.log(`Copying main CSS: ${file} -> styles.css`);
        fs.copyFileSync(srcPath, path.join(SHOPIFY_ASSETS, 'styles.css'));
    } else {
        // Copy other assets
        // Optional: Filter if you only want specific things, but usually syncing all is fine
        // console.log(`Copying asset: ${file}`);
        // fs.copyFileSync(srcPath, path.join(SHOPIFY_ASSETS, file)); 

        // We only uncomment this if we want to sync EVERYTHING. 
        // For now, let's sync images too if they are in dist
        if (!file.endsWith('.html') && !file.endsWith('.js')) {
            // Sync images, fonts, etc.
            fs.copyFileSync(srcPath, path.join(SHOPIFY_ASSETS, file));
        }
    }
});

// Also copy main JS build if needed?
// Shopify usually needs one entry point. 
// Vite produces [name]-[hash].js. 
// We might want to rename it to 'custom.js' or similar if we want to include it in theme.liquid.
const jsFile = files.find(f => f.endsWith('.js') && f.includes('index'));
if (jsFile) {
    console.log(`Copying main JS: ${jsFile} -> sections.js (or custom.js)`);
    // NOTE: In theme.liquid we used 'custom.js', let's stick to that or update theme.liquid.
    // The previous theme.liquid had {{ 'custom.js' | asset_url | script_tag }}
    fs.copyFileSync(path.join(DIST_ASSETS, jsFile), path.join(SHOPIFY_ASSETS, 'custom.js'));
}

console.log('Sync complete.');
