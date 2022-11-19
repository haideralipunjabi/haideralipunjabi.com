import type { NextSeoProps } from "next-seo";
let config = {
  title: "Haider Ali Punjabi",
  description:
    "Android / Web Apps developer, from Kashmir. Pursuing Integrated MCA from Cluster University Srinagar. Biscoe Pass Out(2017). ",
  url: "https://haideralipunjabi.com",
};
export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: config.title,
  description: config.description,
  canonical: config.url,
  twitter: {
    handle: "@HAliPunjabi",
  },
  themeColor: "#1d4ed8",
  openGraph: {
    url: config.url,
    title: config.title,
    description: config.description,
    type: "website",
    site_name: config.title,
    profile: {
      firstName: "Haider Ali",
      lastName: "Punjabi",
      gender: "male",
    },
    images: [
      {
        url: config.url + "/og.jpg",
        width: 1200,
        height: 630,
        alt: "OG Image",
      },
    ],
  }
};
