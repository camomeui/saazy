import { NextSeo } from "next-seo";

import NotFoundTemplate from "@/templates/NotFoundTemplate";

export default function NotFoundPage() {
  return (
    <>
      <NextSeo title="Page not found" />
      <NotFoundTemplate />
    </>
  );
}
