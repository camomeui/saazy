import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  url?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function BrowserFrame({
  url = "example.com",
  children,
  className,
}: Props) {
  return (
    <section className={clsx(styles.container, className)}>
      <header className={styles.header}>
        <div className={styles.buttons}>
          <div className={styles.button} />
          <div className={styles.button} />
          <div className={styles.button} />
        </div>
        <div className={styles.searchBar}>{url}</div>
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
