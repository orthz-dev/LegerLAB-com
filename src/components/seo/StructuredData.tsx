import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface StructuredDataProps {
    data: object | object[];
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
    const jsonLd = Array.isArray(data) ? data : [data];

    return (
        <Helmet>
            {jsonLd.map((item, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item, null, 2) }}
                />
            ))}
        </Helmet>
    );
};

export default StructuredData;
