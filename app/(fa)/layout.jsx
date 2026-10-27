import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import BootstrapClient from "@/components/BootstrapClient";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import FaChrome from "./fa-chrome";

// Site-wide defaults for every Persian page. Individual pages override
// title/description/canonical/openGraph via their own `metadata` or
// `generateMetadata` export - see app/(fa)/products/[model]/page.jsx for
// an example with dynamic values.
export const metadata = {
  metadataBase: new URL("https://iranjanome.ir"),
  title: {
    default: "نماینده انحصاری چرخ خیاطی ژانومه | شرکت ژانومه ایران",
    // template: "%s | ژانومه ایران",
  },
  description: "نماینده انحصاری چرخ خیاطی ژانومه ژاپن",
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "شرکت ژانومه ایران | Iran Janome",
  },
  other: {
    "mobile-web-app-capable": "yes",
    robots: "max-image-preview:large",
    "place:location:latitude": "35.6959543",
    "place:location:longitude": "51.3984215",
    "business:contact_data:street_address":
      "خیابان جمهوری اسلامی - ساختمان سجاد",
    "business:contact_data:locality": "تهران",
    "business:contact_data:phone_number": "+98 21 66499533",
    "business:contact_data:website": "https://iranjanome.ir",
    "business:contact_data:postal_code": "3354718342",
    "business:contact_data:email": "info@iranjanome.ir",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function FaRootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body>
        {/* <GoogleAnalytics /> */}
        <BootstrapClient />
        <FaChrome>{children}</FaChrome>
      </body>
    </html>
  );
}
