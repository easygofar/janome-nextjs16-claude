import ContactClientEn from "./contact-client";

export const metadata = {
  title: "Contact Us | Iran Janome",
  description: "Iran Janome Contact",
  keywords: "contact,phone,address,email,iran janome,",
  alternates: {
    canonical: "https://iranjanome.ir/en/contact/",
    languages: {
      fa: "https://iranjanome.ir/contact/",
      en: "https://iranjanome.ir/en/contact/",
      "x-default": "https://iranjanome.ir/contact/",
    },
  },
  openGraph: {
    title: "Contact Us | Iran Janome",
    description: "Iran Janome Contact",
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
