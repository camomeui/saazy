import { NextSeo } from "next-seo";

import SignInTemplate from "@/templates/SignInTemplate";

export default function SignInPage() {
  return (
    <>
      <NextSeo title="Sign in" />
      <SignInTemplate />
    </>
  );
}
