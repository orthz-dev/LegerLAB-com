import React from 'react';
import { Link } from 'react-router-dom';
import { generateBreadcrumbSchema } from '../../utils/schema-generators';
import { StructuredData } from '../seo/StructuredData';

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
    // Always include Home as first item
    const breadcrumbItems: BreadcrumbItem[] = [
        { name: 'Home', url: '/' },
        ...items
    ];

    const schema = generateBreadcrumbSchema(breadcrumbItems);

    return (
        <>
            <StructuredData data={schema} />
            <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
                <ol className="flex items-center space-x-2">
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;

                        return (
                            <li key={item.url} className="flex items-center">
                                {index > 0 && (
                                    <span className="mx-2 text-gray-400">/</span>
                                )}
                                {isLast ? (
                                    <span className="text-brand-text font-medium" aria-current="page">
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        to={item.url}
                                        className="text-brand-text hover:text-brand-strong transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
