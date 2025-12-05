import { seoConfig } from '../config/seo.config';

export interface OrganizationSchemaData {
    "@context": string;
    "@type": string;
    name: string;
    legalName: string;
    url: string;
    logo: string;
    foundingDate: string;
    contactPoint: {
        "@type": string;
        telephone: string;
        contactType: string;
        email: string;
        availableLanguage: string[];
    };
    sameAs: string[];
}

export const generateOrganizationSchema = (): OrganizationSchemaData => {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: seoConfig.organization.name,
        legalName: seoConfig.organization.legalName,
        url: seoConfig.organization.url,
        logo: seoConfig.organization.logo,
        foundingDate: seoConfig.organization.foundingDate,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: seoConfig.organization.contactPoint.telephone,
            contactType: seoConfig.organization.contactPoint.contactType,
            email: seoConfig.organization.contactPoint.email,
            availableLanguage: seoConfig.organization.contactPoint.availableLanguage
        },
        sameAs: seoConfig.organization.sameAs
    };
};

export interface WebSiteSchemaData {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    potentialAction: {
        "@type": string;
        target: {
            "@type": string;
            urlTemplate: string;
        };
        "query-input": string;
    };
}

export const generateWebSiteSchema = (): WebSiteSchemaData => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
};

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export interface BreadcrumbSchemaData {
    "@context": string;
    "@type": string;
    itemListElement: Array<{
        "@type": string;
        position: number;
        name: string;
        item: string;
    }>;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]): BreadcrumbSchemaData => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${seoConfig.siteUrl}${item.url}`
        }))
    };
};

export default {
    generateOrganizationSchema,
    generateWebSiteSchema,
    generateBreadcrumbSchema
};
