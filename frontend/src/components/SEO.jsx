import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    const siteTitle = "Sahasya Talent and Technology Pvt. Ltd.";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDesc = "Specialized IT, mechanical, and processing-industry resources, digital solutions, and innovative engineering products.";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta name="keywords" content={keywords || "IT manpower, mechanical staffing, agro innovation, digital marketing"} />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Sahasya Talent and Technology Pvt. Ltd.",
                    "url": "https://sahasyatech.com",
                    "logo": "https://sahasyatech.com/assets/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-XXXXXXXXXX",
                        "contactType": "customer service",
                        "areaServed": "IN",
                        "availableLanguage": "en"
                    },
                    "sameAs": [
                        "https://facebook.com/sahasyatech",
                        "https://linkedin.com/company/sahasyatech"
                    ]
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Sahasya Talent and Technology",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "IN"
                    },
                    "description": defaultDesc
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
