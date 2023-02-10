import React from "react";

import HomeTemplate from "@/templates/HomeTemplate";
import createGetLayout from "@/layouts/PageLayout/createGetLayout";

export default function HomePage() {
  return <HomeTemplate />;
}

HomePage.getLayout = createGetLayout({ stickyHeader: true });
