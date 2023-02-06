import { NextSeo } from "next-seo";

import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import { getBlogPostsForPage } from "@/lib/blog";
import {
  extractContentMeta,
  type ExtractContentMeta,
} from "@/lib/contentlayer";
import BlogPostListTemplate from "@/templates/BlogPostListTemplate";
import { type Pagination } from "@/types";
import { type Blog } from "contentlayer/generated";

type Props = {
  posts: ExtractContentMeta<Blog>[];
  pagination: Pagination;
};

export default function BlogPostListPage({ posts, pagination }: Props) {
  return (
    <>
      <NextSeo title="Blog" />
      <BlogPostListTemplate posts={posts} pagination={pagination} />
    </>
  );
}

BlogPostListPage.getLayout = createGetLayout({
  title: "Blog",
  description: "Our latest news, updates, and stories.",
});

export function getStaticProps() {
  const { posts, pagination } = getBlogPostsForPage(1);

  return { props: { posts: posts.map(extractContentMeta), pagination } };
}
