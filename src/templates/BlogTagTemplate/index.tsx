import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostListTemplate from "@/templates/BlogPostListTemplate";
import { type Blog } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  posts: Omit<Blog, "body" | "_raw">[];
};

export default function BlogTagTemplate({ posts }: Props) {
  return (
    <>
      <Breadcrumbs
        paths={[
          {
            href: "/",
            label: "Home",
          },
          {
            href: "/blog",
            label: "Blog",
          },
          {
            href: "/blog/tags",
            label: "Tags",
          },
        ]}
        className={styles.breadcrumbs}
      />
      <BlogPostListTemplate posts={posts} />
    </>
  );
}
