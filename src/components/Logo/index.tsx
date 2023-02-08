import React from "react";
import LogoIcon from "@/public/icons/logo-icon.svg";
import styles from "./styles.module.scss";
import clsx from "clsx";

type Props = { iconOnly?: boolean; className?: string };

export default function Logo({ iconOnly = false, className }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      <LogoIcon />
      {!iconOnly && <span>Saazy</span>}
    </div>
  );
}
