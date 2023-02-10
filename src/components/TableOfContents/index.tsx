import { BookmarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

import useTocHighlight from "@/hooks/useTocHighlight";
import { type Toc } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  toc: Toc;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
  className?: string;
};

export default function TableOfContents({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 3,
  exclude = "",
  className,
}: Props) {
  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  useTocHighlight({
    linkActiveClassName: styles.active,
    linkClassName: styles.item,
    anchorsContainerSelector: ".Markup",
    minHeadingLevel: fromHeading,
    maxHeadingLevel: toHeading,
  });

  return (
    <nav id="toc" className={clsx(styles.container, className, "scrollbar")}>
      <div className={styles.title}>
        <BookmarkIcon />
        Table of contents
      </div>
      <ul className={styles.list}>
        {filteredToc.map((heading) => (
          <li key={heading.value}>
            <a
              href={heading.url}
              data-depth={heading.depth}
              className={clsx(
                styles.item,
                heading.depth >= indentDepth && styles.indent
              )}
            >
              {heading.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
