import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import BootstrapClient from "@/components/BootstrapClient";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import EnChrome from "./en-chrome";

export const metadata = {
  metadataBase: new URL("https://iranjanome.ir"),
  title: {
    default: "Iran Janome | After-Sales Service",
    // template: "%s | Iran Janome",
  },
  description: "Iran Janome After-Sales Service",
  icons: {
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Iran Janome",
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

export default function EnRootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth">
      <body>
        {/* <GoogleAnalytics /> */}
        <BootstrapClient />
        <EnChrome>{children}</EnChrome>
      </body>
    </html>
  );
}
