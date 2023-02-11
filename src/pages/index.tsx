import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import HomeTemplate from "@/templates/HomeTemplate";

export default function HomePage() {
  return <HomeTemplate />;
}

HomePage.getLayout = createGetLayout({ stickyHeader: true });
