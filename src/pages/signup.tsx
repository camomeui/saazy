import { NextSeo } from "next-seo";

import SignUpTemplate from "@/templates/SignUpTemplate";

export default function SignupPage() {
  return (
    <>
      <NextSeo title="Sign up" />
      <SignUpTemplate />
    </>
  );
}
