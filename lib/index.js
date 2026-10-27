import { _allMachines } from '@/data/machines'


export function createJsonLD() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": _allMachines.map(p => ({
            "@type": "Product",
            "@id": p.id,
            "name": `${p.farsi} ${p.model}`,
            "description": `${p.farsi} ${p.machine_type} ${p.model}`,
            "brand": {
                "@type": "Brand",
                "name": p.brand,
                "alternateName": p.farsi
            },
            "model": p.model,
            "image": `/images/machines/Janome/${p.brand_model}`,
            "category": p.machine_type,
            "additionalType": "https://schema.org/Equipment",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "IRR",
                "price": "0",
                "seller": {
                    "@type": "Organization",
                    "name": "ژانومه"
                },
            },
        }))
    };

    const json = {
        "@context": "https://schema.org",
        "@graph": _allMachines.map(p => ({
            "@type": "Product",
            "@id": `https://iranjanome.ir/janome-sewing-machine-model/${p.id}`, // Full URL to the product
            "url": `https://iranjanome.ir/janome-sewing-machine-model/${p.id}`, // Full URL to the product page
            "sku": p.model, // Add a SKU if available
            "name": `${p.farsi} ${p.model}`,
            "description": `${p.farsi} ${p.machine_type} ${p.model}`,
            "brand": {
                "@type": "Brand",
                "name": p.brand,
                "alternateName": p.farsi
            },
            "model": p.model,
            "image": "https://iranjanome.ir/images/machines/Janome/" +
                p["brand_model"].toLowerCase().replace(/ /g, "") +
                "/" +
                p["brand_model"].toLowerCase().replace(/ /g, "") +
                "-" +
                p["image"] +
                ".jpg", // Absolute URL
            "category": p.machine_type,
            "additionalType": "https://schema.org/Equipment",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "IRR",
                // Only include price if it's accurate and not zero (unless it's free)
                "price": "1000000000", // Assuming 'p.price' holds the actual price
                "priceValidUntil": "2030-12-31", // Optional: The date the price is valid until
                "itemCondition": "https://schema.org/NewCondition", // Or UsedCondition, etc.
                "availability": "https://schema.org/PreOrder", // Or OutOfStock, PreOrder, etc.
                "seller": {
                    "@type": "Organization",
                    "name": "ژانومه",
                    "url": "https://iranjanome.ir" // URL of the seller
                }
            }
        }))
    }
    return json;
}
