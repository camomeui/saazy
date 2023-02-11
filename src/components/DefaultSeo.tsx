import { DefaultSeo as DefaultNextSeo, type DefaultSeoProps } from "next-seo";
import React from "react";

import siteData from "content/siteData";

const DefaultSeoConfig: DefaultSeoProps = {
  defaultTitle: `${siteData.title} | ${siteData.subtitle}`,
  titleTemplate: `%s | ${siteData.title}`,
  description: siteData.description,
  twitter: {
    cardType: "summary_large_image",
  },
  openGraph: {
    images: [
      {
        url: siteData.ogImage,
      },
    ],
  },
};

export default function DefaultSeo() {
  return <DefaultNextSeo {...DefaultSeoConfig} />;
}
