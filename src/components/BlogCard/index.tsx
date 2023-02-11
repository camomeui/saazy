import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import BlogTagList from "@/components/BlogTagList";
import { ExtractContentMeta } from "@/lib/contentlayer";
import { type Blog } from "contentlayer/generated";

import styles from "./styles.module.scss";

export type BlogCardProps = Omit<ExtractContentMeta<Blog>, "thumbImg"> & {
  thumbImg: string;
  className?: string;
};

export default function BlogCard({
  description,
  tags,
  title,
  thumbImg,
  slug,
  className,
}: BlogCardProps) {
  const href = "/blog/" + slug;
  return (
    <article className={clsx(styles.container, className)}>
      <Link href={href} className={styles.image}>
        <Image src={thumbImg} alt="Hero image for the blog post" fill />
      </Link>
      <div className={styles.content}>
        <aside className={styles.tagList}>
          <BlogTagList tags={tags} />
        </aside>
        <h2 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
