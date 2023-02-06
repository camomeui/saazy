import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";

import siteData from "@/content/siteData";
import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import { getBlogPostsForPage } from "@/lib/blog";
import {
  extractContentMeta,
  type ExtractContentMeta,
} from "@/lib/contentlayer";
import BlogPostListTemplate from "@/templates/BlogPostListTemplate";
import { Pagination } from "@/types";
import { allBlogs, type Blog } from "contentlayer/generated";

type Props = {
  posts: ExtractContentMeta<Blog>[];
  pagination: Pagination;
};

export default function BlogPostPaginationPage({ posts, pagination }: Props) {
  return (
    <>
      <NextSeo title="Blog" />
      <BlogPostListTemplate posts={posts} pagination={pagination} />
    </>
  );
}

BlogPostPaginationPage.getLayout = createGetLayout({
  title: "Blog",
  description: "Our latest news, updates, and stories.",
});

export function getStaticProps({ params }: GetStaticPropsContext) {
  const page = params!.page as string;
  const pageNumber = Number(page);
  const { posts, pagination } = getBlogPostsForPage(pageNumber);

  return { props: { posts: posts.map(extractContentMeta), pagination } };
}

export function getStaticPaths() {
  const totalPages = Math.ceil(allBlogs.length / siteData.blogPostsPerPage);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  })).slice(1); // `/blog` should act as `/blog/page/1`.;

  return { paths, fallback: false };
}
