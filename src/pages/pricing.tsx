import { NextSeo } from "next-seo";
import React from "react";

import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import PricingTemplate from "@/templates/PricingTemplate";

export default function PricingPage() {
  return (
    <>
      <NextSeo title="Pricing plans" />
      <PricingTemplate />
    </>
  );
}

PricingPage.getLayout = createGetLayout({
  title: "Pricing plans",
  description: "Flexible plans for individuals and companies.",
});
