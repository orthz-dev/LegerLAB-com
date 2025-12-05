import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { RoutePath } from '../src/types';
import products from '../src/data/products';

interface SitemapLink {
    url: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
    lastmod?: string;
}

const generateSitemap = async () => {
    const hostname = 'https://legerlab.com';

    // Define all static pages
    const staticPages: SitemapLink[] = [
        { url: RoutePath.HOME, changefreq: 'daily', priority: 1.0 },
        { url: RoutePath.COLLANT, changefreq: 'weekly', priority: 0.9 },
        { url: RoutePath.HOW_TO, changefreq: 'monthly', priority: 0.8 },
        { url: RoutePath.RETAILERS, changefreq: 'monthly', priority: 0.7 },
        { url: RoutePath.BLOG_DID_YOU_KNOW, changefreq: 'weekly', priority: 0.7 },
        { url: RoutePath.BLOG_MAGAZINE, changefreq: 'weekly', priority: 0.7 },
        { url: RoutePath.FAQ, changefreq: 'monthly', priority: 0.8 },
        { url: RoutePath.ORDER, changefreq: 'daily', priority: 0.9 },
        { url: RoutePath.ABOUT, changefreq: 'monthly', priority: 0.6 },
        { url: RoutePath.PRIVACY, changefreq: 'yearly', priority: 0.3 },
        { url: RoutePath.SHIPPING, changefreq: 'monthly', priority: 0.5 }
    ];

    // Add product pages
    const productPages: SitemapLink[] = products.map(product => ({
        url: product.link,
        changefreq: 'weekly' as const,
        priority: 0.8,
        lastmod: new Date().toISOString()
    }));

    // Combine all links
    const links = [...staticPages, ...productPages];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname });

    // Generate sitemap
    const data = await streamToPromise(Readable.from(links).pipe(stream));

    // Write to public directory
    const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
    writeFileSync(outputPath, data.toString());

    console.log(`✅ Sitemap generated successfully at: ${outputPath}`);
    console.log(`📄 Total URLs: ${links.length}`);
};

// Run the generator
generateSitemap().catch(error => {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
});
