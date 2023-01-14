import { DefaultSeoProps } from "next-seo";

const defaultConfig: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cxk-converter.vercel.app",
    siteName: "",
  },
  twitter: {
    site: "@timthedev07",
    cardType: "summary",
  },
  defaultTitle: "Home | IKUN Unit Converter",
  titleTemplate: "%s | IKUN Unit Converter",
  description: "A globally recognized IKUN unit converter.",
  additionalMetaTags: [
    {
      httpEquiv: "content-type",
      content: "text/html; charset=utf-8",
    },
    {
      name: "revisit-after",
      content: "0 days",
    },
    {
      name: "author",
      content: "Tim <timpersonal07@gmail.com>",
    },
    {
      name: "google-site-verification",
      content: "",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "keywords",
      content: "ikun, 蔡徐坤，小黑子",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },
  ],
};

export default defaultConfig;
