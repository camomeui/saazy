import clsx from "clsx";

import styles from "./styles.module.scss";

export type HeadingProps = {
  title: string;
  tagline: string;
  icon: React.ReactNode;
  className?: string;
};

export default function Heading({
  title,
  tagline,
  icon,
  className,
}: HeadingProps) {
  return (
    <hgroup className={clsx(styles.heading, className)}>
      <div className={styles.heading__icon} aria-hidden="true">
        {icon}
      </div>
      <h2 className={styles.heading__tagline}>{tagline}</h2>
      <p className={styles.heading__title}>{title}</p>
    </hgroup>
  );
}
