import ContactClientEn from "./contact-client";

export const metadata = {
  title: "Contact Iran Janome | Official Janome Dealer in Iran",
  description: "Contact Iran Janome in Tehran: address, phone and email for Janome sewing machine sales, warranty, spare parts and after-sales service.",
  alternates: {
    canonical: "https://iranjanome.ir/en/contact/",
    languages: {
      fa: "https://iranjanome.ir/contact/",
      en: "https://iranjanome.ir/en/contact/",
      "x-default": "https://iranjanome.ir/contact/",
    },
  },
  openGraph: {
    title: "Contact Iran Janome | Official Janome Dealer in Iran",
    description: "Contact Iran Janome in Tehran: address, phone and email for Janome sewing machine sales, warranty, spare parts and after-sales service.",
    url: "https://iranjanome.ir/en/contact/",
    locale: "en_US",
    siteName: "Iran Janome",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ContactPageEn() {
  return <ContactClientEn />;
}
