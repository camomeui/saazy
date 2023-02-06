import { GetStaticPropsContext } from "next";

import PageLayout from "@/layouts/PageLayout";
import { getAllTags } from "@/lib/blog";
import kebabCase from "@/lib/kebabCase";
import BlogTagTemplate from "@/templates/BlogTagTemplate";
import { allBlogs, Blog } from "contentlayer/generated";

type Props = {
  posts: Omit<Blog, "body" | "_raw">[];
  tag: string;
};

export default function TagPage({ posts, tag }: Props) {
  return (
    <>
      <PageLayout title={tag}>
        <BlogTagTemplate posts={posts} />
      </PageLayout>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const tag = ctx.params!.tag as string;
  const posts = allBlogs.filter((post) =>
    post.tags?.map((t) => kebabCase(t)).includes(tag)
  );
  const tagLabel = posts[0].tags!.find((t) => kebabCase(t) === tag)!;

  return { props: { posts: posts, tag: tagLabel } };
}

export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        tag: tag.slug,
      },
    })),
    fallback: false,
  };
}
