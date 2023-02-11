import { NextSeo } from "next-seo";
import React from "react";

import PageLayout from "@/layouts/PageLayout";
import PostLayout, { PostLayoutProps } from "@/layouts/PostLayout";

type Props = Omit<PostLayoutProps, "aside"> & {
  description?: string;
};

export default function MdxPageLayout({
  title,
  description,
  author,
  date,
  thumb,
  backButton,
  children,
}: Props) {
  return (
    <>
      {/* Add seo tags here for convenience */}
      <NextSeo title={title} description={description} />
      <PageLayout>
        <PostLayout
          title={title}
          date={date}
          author={author}
          thumb={thumb}
          backButton={backButton}
        >
          {children}
        </PostLayout>
      </PageLayout>
    </>
  );
}
