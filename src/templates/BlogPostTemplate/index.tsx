import { Avatar, Markup, Button } from "@camome/core";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import BlogTagList from "@/components/BlogTagList";
import { formatDate } from "@/lib/formatDate";

import styles from "./styles.module.scss";

type Props = {
  title: string;
  author?: {
    name: string;
    title: string;
    avatarImg: string;
  };
  date?: string;
  thumb?: {
    src: string;
    alt: string;
  };
  tags?: string[];
  children: React.ReactNode;
};

export default function BlogPostTemplate({
  title,
  author,
  date,
  thumb,
  tags,
  children,
}: Props) {
  return (
    <div className={styles.container}>
      <article>
        <header className={styles.header}>
          <Button
            component={Link}
            href="/blog"
            variant="ghost"
            size="sm"
            colorScheme="neutral"
            startDecorator={<ChevronLeftIcon />}
            className={styles.backButton}
          >
            Back to blog
          </Button>
          {thumb && (
            <div className={styles.thumbImgWrap}>
              <Image src={thumb.src} alt={thumb.alt} fill />
            </div>
          )}
          {date && (
            <time dateTime={date} className={styles.date}>
              {formatDate(date)}
            </time>
          )}
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            {author && (
              <div className={styles.author}>
                <Avatar src={author.avatarImg} size="md" />
                <div className={styles.author__name}>{author.name}</div>
                <div className={styles.author__title}>{author.title}</div>
              </div>
            )}
          </div>
        </header>
        <Markup className={styles.prose}>{children}</Markup>
      </article>
      <aside className={styles.aside}>
        {tags && (
          <div className={styles.tagList}>
            <h2>Tags</h2>
            <BlogTagList tags={tags} />
          </div>
        )}
      </aside>
    </div>
  );
}
