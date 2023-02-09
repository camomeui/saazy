import { Avatar, Markup, Button } from "@camome/core";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import BlogTagList from "@/components/BlogTagList";
import MdxRenderer from "@/components/MdxRenderer";
import { formatDate } from "@/lib/formatDate";
import { type Toc } from "@/types";
import authors from "content/authors";
import siteData from "content/siteData";
import { type Blog } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  post: Blog;
  toc?: Toc;
};

export default function BlogPostTemplate({
  post: { title, date, author, ...post },
  toc,
}: Props) {
  const _author = authors[author ?? siteData.defaultAuthor];

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
          {post.thumbImg && (
            <div className={styles.thumbImgWrap}>
              <Image src={post.thumbImg} alt="" fill />
            </div>
          )}
          {date && (
            <time dateTime={date} className={styles.date}>
              {formatDate(date)}
            </time>
          )}
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.meta}>
            <div className={styles.author}>
              <Avatar src={_author.avatarImg} size="md" />
              <div className={styles.author__name}>{_author.name}</div>
              <div className={styles.author__title}>{_author.title}</div>
            </div>
          </div>
        </header>
        <Markup className={styles.prose}>
          <MdxRenderer code={post.body.code} />
        </Markup>
      </article>
      <aside className={styles.aside}>
        {post.tags && (
          <div className={styles.tagList}>
            <h2>Tags</h2>
            <BlogTagList tags={post.tags} />
          </div>
        )}
      </aside>
    </div>
  );
}
