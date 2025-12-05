/**
 * Build script for Shopify deployment
 * 1. Builds React app with Vite
 * 2. Copies built files to Shopify assets directory
 * 3. Updates theme.liquid to load React bundle
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(rootDir, 'assets');
const layoutDir = path.join(rootDir, 'layout');

console.log('🚀 Building React app for Shopify...\n');

// Step 1: Build React app
console.log('📦 Step 1: Building React app with Vite...');
try {
    execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
    console.log('✅ Build completed\n');
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}

// Step 2: Copy built files to Shopify assets
console.log('📁 Step 2: Copying built files to Shopify assets...');

// Find the built JS and CSS files
const distAssetsDir = path.join(distDir, 'assets');
const files = fs.readdirSync(distAssetsDir);

const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const cssFile = files.find(f => f.startsWith('index-') && f.endsWith('.css'));

if (!jsFile || !cssFile) {
    console.error('❌ Could not find built JS or CSS files');
    process.exit(1);
}

// Copy to assets with fixed names
fs.copyFileSync(
    path.join(distAssetsDir, jsFile),
    path.join(assetsDir, 'app.js')
);

fs.copyFileSync(
    path.join(distAssetsDir, cssFile),
    path.join(assetsDir, 'app.css')
);

console.log(`✅ Copied ${jsFile} → assets/app.js`);
console.log(`✅ Copied ${cssFile} → assets/app.css\n`);

// Step 3: Copy index.html content for reference
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
fs.writeFileSync(path.join(rootDir, 'build-output.html'), indexHtml);
console.log('✅ Saved build output reference to build-output.html\n');

console.log('✨ Build complete! Next steps:');
console.log('1. Review layout/theme.liquid to ensure it loads app.js and app.css');
console.log('2. Commit changes: git add . && git commit -m "Deploy React app to Shopify"');
console.log('3. Push to GitHub: git push origin main');
console.log('4. Wait for Shopify to sync from GitHub\n');
