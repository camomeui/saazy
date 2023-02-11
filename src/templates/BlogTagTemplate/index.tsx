import BlogPostListTemplate from "@/templates/BlogPostListTemplate";
import { type Blog } from "contentlayer/generated";

type Props = {
  posts: Omit<Blog, "body" | "_raw">[];
};

export default function BlogTagTemplate({ posts }: Props) {
  return <BlogPostListTemplate posts={posts} />;
}
