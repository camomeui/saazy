import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  direction?: "horizontal" | "vertical";
  children: React.ReactNode;
};

export default function ComponentPreview({
  direction = "vertical",
  children,
}: Props) {
  return (
    <div
      className={clsx(
        styles.container,
        direction === "horizontal" ? styles.horizontal : styles.vertical,
        "no-markup"
      )}
    >
      {children}
    </div>
  );
}
