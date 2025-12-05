import React from 'react';
import { useLocation } from 'react-router-dom';
import MetaTags, { MetaTagsProps } from './seo/MetaTags';
import { StructuredData } from './seo/StructuredData';
import { generateOrganizationSchema, generateWebSiteSchema } from '../utils/schema-generators';
import seoMetadata from '../data/seo-metadata.json';

interface PageWrapperProps {
    children: React.ReactNode;
    metaOverrides?: Partial<MetaTagsProps>;
    structuredData?: object | object[];
    includeOrganizationSchema?: boolean;
    includeWebSiteSchema?: boolean;
}

/**
 * PageWrapper component that handles SEO for each page
 * Automatically loads metadata from seo-metadata.json based on current route
 */
export const PageWrapper: React.FC<PageWrapperProps> = ({
    children,
    metaOverrides = {},
    structuredData,
    includeOrganizationSchema = false,
    includeWebSiteSchema = false
}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Get metadata for current page
    const pageMetadata = seoMetadata.pages[currentPath as keyof typeof seoMetadata.pages];

    // Prepare meta tags
    const metaProps: MetaTagsProps = {
        title: pageMetadata?.title,
        description: pageMetadata?.description,
        keywords: pageMetadata?.keywords,
        image: pageMetadata?.og_image,
        url: currentPath,
        canonical: pageMetadata?.canonical,
        ...metaOverrides
    };

    // Prepare structured data
    const schemas: object[] = [];

    if (includeOrganizationSchema) {
        schemas.push(generateOrganizationSchema());
    }

    if (includeWebSiteSchema) {
        schemas.push(generateWebSiteSchema());
    }

    if (structuredData) {
        if (Array.isArray(structuredData)) {
            schemas.push(...structuredData);
        } else {
            schemas.push(structuredData);
        }
    }

    return (
        <>
            <MetaTags {...metaProps} />
            {schemas.length > 0 && <StructuredData data={schemas} />}
            {children}
        </>
    );
};

export default PageWrapper;
