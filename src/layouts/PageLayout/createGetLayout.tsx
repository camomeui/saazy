import PageLayout, { PageLayoutProps } from "@/layouts/PageLayout";

export default function createGetLayout(
  props: Omit<PageLayoutProps, "children"> = {}
) {
  // eslint-disable-next-line react/display-name
  return (page: React.ReactNode) => <PageLayout {...props}>{page}</PageLayout>;
}
