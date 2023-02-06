import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  items: { term: string; data: string }[];
  className?: string;
};

export default function Stats({ items, className }: Props) {
  return (
    <dl className={clsx(styles.list, className)}>
      {items.map(({ term, data }, i) => (
        <React.Fragment key={term}>
          <div className={styles.item}>
            <dt className={styles.term}>{term}</dt>
            <dd className={styles.data}>{data}</dd>
          </div>
          {i < items.length - 1 && <hr className={styles.divider} />}
        </React.Fragment>
      ))}
    </dl>
  );
}
