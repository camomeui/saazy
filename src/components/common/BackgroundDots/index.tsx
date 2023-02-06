import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export default function BackgroundDots({ className }: Props) {
  return <div className={clsx(styles.Block, className)} />;
}
