import ContactClient from "./contact-client";

export const metadata = {
  title: " تماس با شرکت ژانومه ایران | ژانومه ایران ",
  description: " اطلاعات تماس با شرکت ژانومه ایران ",
  keywords:
    "تماس با ژانومه ایران, آدرس شرکت ژانومه, شماره تلفن ژانومه ایران, ایمیل پشتیبانی ژانومه, دفتر مرکزی ژانومه, نمایندگی‌های ژانومه, نقشه محل شرکت ژانومه, فرم تماس با ژانومه, پشتیبانی مشتریان ژانومه, ساعات کاری ژانومه ایران",
  alternates: {
    canonical: "https://iranjanome.ir/contact/",
    languages: {
      fa: "https://iranjanome.ir/contact/",
      en: "https://iranjanome.ir/en/contact/",
      "x-default": "https://iranjanome.ir/contact/",
    },
  },
  openGraph: {
    title: " تماس با شرکت ژانومه ایران | ژانومه ایران ",
    description: " اطلاعات تماس با شرکت ژانومه ایران ",
    url: "https://iranjanome.ir/contact/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
