import { Avatar } from "@camome/core";
import Link from "next/link";

import BlogTagList from "@/components/BlogTagList";
import Image from "@/components/Image";
import { ExtractContentMeta } from "@/lib/contentlayer";
import { formatDate } from "@/lib/formatDate";
import { type Blog } from "contentlayer/generated";

import styles from "./styles.module.scss";

export type BlogCardProps = Omit<ExtractContentMeta<Blog>, "thumbImg"> & {
  authorAvatar: string;
  thumbImg: string;
};

export default function BlogCard({
  author,
  authorAvatar,
  description,
  tags,
  title,
  thumbImg,
  date,
  slug,
}: BlogCardProps) {
  const href = "/blog/" + slug;
  return (
    <article className={styles.Block}>
      <Link href={href} className={styles.image}>
        <Image src={thumbImg} alt="Hero image for the blog post" fill />
      </Link>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h2>
        <p className={styles.description}>{description}</p>
        <aside className={styles.author}>
          <Avatar size="sm" src={authorAvatar} />
          <div className={styles.author__meta}>
            <div className={styles.author__name}>{author}</div>
            <time dateTime={date} className={styles.time}>
              {formatDate(date)}
            </time>
          </div>
        </aside>
        <aside className={styles.tagList}>
          <BlogTagList tags={tags} />
        </aside>
      </div>
    </article>
  );
}
