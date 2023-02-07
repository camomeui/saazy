import { Avatar, Markup, Button } from "@camome/core";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import BlogTagList from "@/components/BlogTagList";
import Breadcrumbs from "@/components/Breadcrumbs";
import MdxRenderer from "@/components/MdxRenderer";
import NewsletterForm from "@/components/NewsletterForm";
import TableOfContents from "@/components/TableOfContents";
import { formatDate } from "@/lib/formatDate";
import { Toc } from "@/types";
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
      <div className={styles.main}>
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
          ]}
        />
        <article>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <Balancer>{title}</Balancer>
            </h1>
            <div className={styles.date}>
              {date && (
                <time className={styles.date__published} dateTime={date}>
                  {formatDate(date)}
                </time>
              )}
            </div>
            <div className={styles.author}>
              <Avatar src={_author.avatarImg} size="md" />
              <div className={styles.author__name}>{_author.name}</div>
              <div className={styles.author__title}>{_author.title}</div>
            </div>
          </header>
          <Markup>
            <MdxRenderer code={post.body.code} />
          </Markup>
        </article>
        <aside className={styles.aside}>
          {post.tags && (
            <div className={styles.tagList}>
              <span>Tags:</span>
              <BlogTagList tags={post.tags} />
            </div>
          )}
          <Button
            component={Link}
            href="/blog"
            variant="ghost"
            size="sm"
            startDecorator={
              <ChevronLeftIcon className={styles.backButtonIcon} />
            }
          >
            Back to blog
          </Button>
          <NewsletterForm as="h2" className={styles.newsletter} />
        </aside>
      </div>
      {toc && (
        <aside className={styles.tocWrap}>
          <TableOfContents toc={toc} className={styles.toc} />
        </aside>
      )}
    </div>
  );
}
