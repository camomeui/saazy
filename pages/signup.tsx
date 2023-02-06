import { NextSeo } from "next-seo";
import React from "react";

import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import SignUpTemplate from "@/templates/SignUpTemplate";

export default function SignupPage() {
  return (
    <>
      <NextSeo title="Sign up" />
      <SignUpTemplate />
    </>
  );
}

SignupPage.getLayout = createGetLayout({});
