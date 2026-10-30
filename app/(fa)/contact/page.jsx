import ContactClient from "./contact-client";

export const metadata = {
  title: "تماس با ژانومه ایران | نماینده رسمی چرخ خیاطی ژانومه",
  description: "راه‌های تماس با شرکت ژانومه ایران: آدرس دفتر در تهران، تلفن و ایمیل برای خرید، گارانتی، قطعات یدکی و خدمات پس از فروش.",
  alternates: {
    canonical: "https://iranjanome.ir/contact/",
    languages: {
      fa: "https://iranjanome.ir/contact/",
      en: "https://iranjanome.ir/en/contact/",
      "x-default": "https://iranjanome.ir/contact/",
    },
  },
  openGraph: {
    title: "تماس با ژانومه ایران | نماینده رسمی چرخ خیاطی ژانومه",
    description: "راه‌های تماس با شرکت ژانومه ایران: آدرس دفتر در تهران، تلفن و ایمیل برای خرید، گارانتی، قطعات یدکی و خدمات پس از فروش.",
    url: "https://iranjanome.ir/contact/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
