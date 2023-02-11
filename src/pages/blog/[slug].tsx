import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";

import BlogTagList from "@/components/BlogTagList";
import MdxRenderer from "@/components/MdxRenderer";
import siteData from "@/content/siteData";
import createGetLayout from "@/layouts/PageLayout/createGetLayout";
import PostLayout from "@/layouts/PostLayout";
import authors from "content/authors";
import { allBlogs, type Blog } from "contentlayer/generated";

type Props = {
  post: Blog;
};

export default function BlogPostPage({ post }: Props) {
  const author = authors[post.author ?? siteData.defaultAuthor];
  return (
    <>
      <NextSeo title={post.title} description={post.description} />
      <PostLayout
        title={post.title}
        thumb={
          post.thumbImg && post.thumbAlt
            ? { src: post.thumbImg, alt: post.thumbAlt }
            : undefined
        }
        author={author}
        date={post.date}
        backButton={{ href: "/blog", content: "Back to Blog" }}
        aside={<BlogTagList tags={post.tags} />}
      >
        <MdxRenderer code={post.body.code} />
      </PostLayout>
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
