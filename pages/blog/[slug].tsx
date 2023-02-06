import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";

import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import BlogPostTemplate from "@/templates/BlogPostTemplate";
import { allBlogs, type Blog } from "contentlayer/generated";

type Props = {
  post: Blog;
};

export default function BlogPostPage({ post }: Props) {
  return (
    <>
      <NextSeo title={post.title} description={post.description} />
      <BlogPostTemplate post={post} toc={post.toc} />
    </>
  );
}

BlogPostPage.getLayout = createGetLayout();

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = allBlogs.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};
