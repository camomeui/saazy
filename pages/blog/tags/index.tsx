import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import { getAllTags } from "@/lib/blog";
import BlogTagListTemplate from "@/templates/BlogTagList";

type Props = {
  tags: { slug: string; label: string; count: number }[];
};

export default function TagListPage({ tags }: Props) {
  return <BlogTagListTemplate tags={tags} />;
}

TagListPage.getLayout = createGetLayout({
  title: "Tags",
});

export async function getStaticProps() {
  const tags = await getAllTags();

  return { props: { tags } };
}
