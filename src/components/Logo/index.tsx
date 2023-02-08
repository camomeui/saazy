import React from "react";
import LogoIcon from "@/public/icons/logo-icon.svg";
import styles from "./styles.module.scss";
import clsx from "clsx";

type Props = { className?: string };

export default function Logo({ className }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      <LogoIcon />
      <span>Saazy</span>
    </div>
  );
}
