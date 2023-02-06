import React from "react";

import styles from "./styles.module.scss";

type Props = {
  href: string;
  ariaLabel: string;
  Icon: React.ComponentType<React.ComponentProps<"svg">>;
};

export default function IconLink({ href, ariaLabel, Icon }: Props) {
  return (
    <a href={href} aria-label={ariaLabel} className={styles.Block}>
      <Icon className={styles.icon} />
    </a>
  );
}
