export const metadata = {
  title: "Iran Janome | Official Exclusive Dealer | Sales & Service",
  description: "Iran Janome After-Sales Service",
  keywords:
    "janome sewing machine, home sewing machine, sewing macine, buy sewing macihne, janome, japan",
  alternates: {
    canonical: "https://iranjanome.ir/en/",
    languages: {
      fa: "https://iranjanome.ir/",
      en: "https://iranjanome.ir/en/",
      "x-default": "https://iranjanome.ir/",
    },
  },
  openGraph: {
    title: "Iran Janome | Official Exclusive Dealer | Sales & Service",
    description: "Iran Janome After-Sales Service",
    images: [
      { url: "https://iranjanome.ir/images/background/M17_og.jpg", width: 1200, height: 630 },
    ],
  },
};

// The original page rendered nothing but <Head> tags; kept as-is since the
// visible homepage content (hero) lives in the shared layout/chrome.
export default function EnHomePage() {
  return null;
}
