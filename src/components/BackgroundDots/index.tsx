import clsx from "clsx";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export default function BackgroundDots({ className }: Props) {
  return <div className={clsx(styles.container, className)} />;
}
