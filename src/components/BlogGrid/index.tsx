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
      {posts.map((post, i) => (
        <div key={post.slug} className={i === 0 ? styles.featured : undefined}>
          <BlogCard {...post} />
        </div>
      ))}
    </div>
  );
}
