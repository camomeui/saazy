import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";

import styles from "./styles.module.scss";

type Props = {
  tags: { slug: string; label: string; count: number }[];
};

export default function BlogTagListTemplate({ tags }: Props) {
  const sortedTags = tags.sort((a, b) => b.count - a.count);
  return (
    <div className={styles.container}>
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
      {Object.keys(tags).length === 0 && "No tags found."}
      <ul className={styles.list}>
        {sortedTags.map((t) => {
          return (
            <li key={t.slug}>
              <Link href={`/blog/tags/${t.slug}`} className={styles.tag}>
                <span>{t.label}</span>
                <span className={styles.count}>({t.count})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
