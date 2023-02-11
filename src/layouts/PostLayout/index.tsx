import { Avatar, Markup, Button } from "@camome/core";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/formatDate";

import styles from "./styles.module.scss";

export type PostLayoutProps = {
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
  backButton?: {
    href: string;
    content: React.ReactNode;
  };
  aside?: React.ReactNode;
  children: React.ReactNode;
};

export default function PostLayout({
  title,
  author,
  date,
  thumb,
  backButton,
  aside,
  children,
}: PostLayoutProps) {
  return (
    <div className={styles.container}>
      {backButton && (
        <Button
          component={Link}
          href={backButton.href}
          variant="ghost"
          size="sm"
          colorScheme="neutral"
          startDecorator={<ChevronLeftIcon />}
          className={styles.backButton}
        >
          {backButton.content}
        </Button>
      )}
      <article>
        <header className={styles.header}>
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
          {author && (
            <div className={styles.author}>
              <Avatar src={author.avatarImg} size="md" />
              <div className={styles.author__name}>{author.name}</div>
              <div className={styles.author__title}>{author.title}</div>
            </div>
          )}
        </header>
        <Markup className={styles.prose}>{children}</Markup>
      </article>
      {aside && <aside className={styles.aside}>{aside}</aside>}
    </div>
  );
}
