import { NextSeo } from "next-seo";

import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import ContactTemplate from "@/templates/ContactTemplate";

export default function ContactPage() {
  return (
    <>
      <NextSeo title="Contact sales" />
      <ContactTemplate />
    </>
  );
}

ContactPage.getLayout = createGetLayout({
  title: "Contact sales",
  description: "Lorem ipsum dolor sit amet.",
});
