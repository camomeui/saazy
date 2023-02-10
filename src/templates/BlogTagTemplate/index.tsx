import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostListTemplate from "@/templates/BlogPostListTemplate";
import { type Blog } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  posts: Omit<Blog, "body" | "_raw">[];
};

export default function BlogTagTemplate({ posts }: Props) {
  return <BlogPostListTemplate posts={posts} />;
}
