import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  href: string;
  size?: "sm" | "md";
  arrow?: "right" | "left";
  children: React.ReactNode;
};

export default function Link({ href, size = "md", arrow, children }: Props) {
  return (
    <a href={href} className={styles[`--${size}`]}>
      {arrow === "left" && <ArrowLeftIcon className={styles.arrow} />}
      {children}
      {arrow === "right" && <ArrowRightIcon className={styles.arrow} />}
    </a>
  );
}
