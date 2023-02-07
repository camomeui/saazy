import { NextSeo } from "next-seo";

import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import SignInTemplate from "@/templates/SignInTemplate";

export default function SignInPage() {
  return (
    <>
      <NextSeo title="Sign in" />
      <SignInTemplate />
    </>
  );
}
