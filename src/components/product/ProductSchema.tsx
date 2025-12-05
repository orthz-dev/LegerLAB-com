import React from 'react';
import { Product } from '../../types';
import { seoConfig } from '../../config/seo.config';
import { StructuredData } from '../seo/StructuredData';

export interface ProductSchemaProps {
    product: Product & {
        brand?: string;
        rating?: number;
        reviewCount?: number;
        images?: string[];
    };
}

export interface ProductSchemaData {
    "@context": string;
    "@type": string;
    name: string;
    image: string | string[];
    description: string;
    sku: string;
    brand: {
        "@type": string;
        name: string;
    };
    offers: {
        "@type": string;
        url: string;
        priceCurrency: string;
        price: string;
        availability: string;
        priceValidUntil: string;
        seller: {
            "@type": string;
            name: string;
        };
    };
    aggregateRating?: {
        "@type": string;
        ratingValue: number;
        reviewCount: number;
    };
}

export const generateProductSchema = (product: ProductSchemaProps['product']): ProductSchemaData => {
    const availabilityMap: { [key: string]: string } = {
        'in stock': 'https://schema.org/InStock',
        'out of stock': 'https://schema.org/OutOfStock',
        'preorder': 'https://schema.org/PreOrder',
        'discontinued': 'https://schema.org/Discontinued'
    };

    const schema: ProductSchemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        image: product.images || [product.image_link],
        description: product.description,
        sku: product.sku,
        brand: {
            "@type": "Brand",
            name: product.brand || seoConfig.siteName
        },
        offers: {
            "@type": "Offer",
            url: `${seoConfig.siteUrl}${product.link}`,
            priceCurrency: seoConfig.currency,
            price: product.price.toFixed(2),
            availability: availabilityMap[product.availability.toLowerCase()] || availabilityMap['in stock'],
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            seller: {
                "@type": "Organization",
                name: seoConfig.siteName
            }
        }
    };

    // Add aggregate rating if available
    if (product.rating && product.reviewCount) {
        schema.aggregateRating = {
            "@type": "AggregateRating",
            ratingValue: product.rating,
            reviewCount: product.reviewCount
        };
    }

    return schema;
};

export const ProductSchema: React.FC<ProductSchemaProps> = ({ product }) => {
    const schema = generateProductSchema(product);
    return <StructuredData data={schema} />;
};

export default ProductSchema;
