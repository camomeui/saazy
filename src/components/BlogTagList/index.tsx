import { Tag } from "@camome/core";
import Link from "next/link";

import kebabCase from "@/lib/kebabCase";
import { Blog } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  tags: Blog["tags"];
};

export default function BlogTagList({ tags }: Props) {
  return (
    <ul className={styles.Block}>
      {tags?.map((t) => (
        <li key={t}>
          <Link href={`/blog/tags/${kebabCase(t)}`}>
            <Tag>{t}</Tag>
          </Link>
        </li>
      ))}
    </ul>
  );
}
