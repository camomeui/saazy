import { SvgComponent } from "@camome/utils";
import React from "react";

import styles from "./styles.module.scss";

export type FeatureGridProps = {
  items: {
    title: string;
    description: string;
    Icon: SvgComponent;
  }[];
};

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <ul className={styles.Block}>
      {items.map((f) => (
        <li key={f.title} className={styles.item}>
          <div className={styles.iconWrapper}>
            <f.Icon />
          </div>
          <h2 className={styles.item__title}>{f.title}</h2>
          <p className={styles.item__description}>{f.description}</p>
        </li>
      ))}
    </ul>
  );
}
