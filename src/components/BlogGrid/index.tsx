import clsx from "clsx";

import BlogCard, { BlogCardProps } from "@/components/BlogCard";

import styles from "./styles.module.scss";

type Props = {
  posts: BlogCardProps[];
  className?: string;
};

export default function BlogGrid({ posts, className }: Props) {
  return (
    <div className={clsx(styles.grid, className)}>
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
