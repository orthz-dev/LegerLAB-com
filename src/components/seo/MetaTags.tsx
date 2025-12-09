import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../config/seo.config';

export interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'product';
    noindex?: boolean;
    canonical?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    noindex = false,
    canonical
}) => {
    const pageTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
    const pageDescription = description || seoConfig.defaultDescription;
    const pageImage = image ? `${seoConfig.siteUrl}${image}` : `${seoConfig.siteUrl}${seoConfig.defaultImage}`;
    const pageUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;
    const pageKeywords = keywords || seoConfig.defaultKeywords;
    const canonicalUrl = canonical ? `${seoConfig.siteUrl}${canonical}` : pageUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords.join(', ')} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content={seoConfig.siteName} />
            <meta property="og:locale" content={seoConfig.locale} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
            {seoConfig.social.twitter && (
                <meta name="twitter:site" content={seoConfig.social.twitter} />
            )}

            {/* Additional SEO */}
            <meta name="author" content={seoConfig.siteName} />
            <meta name="language" content="Italian" />
            <meta httpEquiv="content-language" content="it-IT" />
        </Helmet>
    );
};

export default MetaTags;
