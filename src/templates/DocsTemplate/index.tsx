import { Markup } from "@camome/core";

import Breadcrumbs from "@/components/Breadcrumbs";
import DocsPageNav from "@/components/DocsPageNav";
import MdxRenderer from "@/components/MdxRenderer";
import TableOfContents from "@/components/TableOfContents";
import { LabeledLink, Toc } from "@/types";
import { type Docs } from "contentlayer/generated";

import styles from "./styles.module.scss";

type Props = {
  doc: Docs;
  toc?: Toc;
  prev?: LabeledLink;
  next?: LabeledLink;
};

export default function DocsTemplate({
  doc: { title, body },
  toc,
  prev,
  next,
}: Props) {
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
              href: "/docs/introduction",
              label: "Docs",
            },
          ]}
        />
        <article>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
          </header>
          <Markup className={styles.markup}>
            <MdxRenderer code={body.code} />
          </Markup>
        </article>
        <aside className={styles.aside}>
          <DocsPageNav next={next} prev={prev} />
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
