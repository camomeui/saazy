import clsx from "clsx";
import React from "react";

import type { SvgComponent } from "@camome/utils";

import styles from "./styles.module.scss";

type Props = {
  Icon: SvgComponent;
  svgSize?: string | number;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function SocialSignInButton({
  Icon,
  svgSize,
  className,
  ...props
}: Props) {
  return (
    <button className={clsx(styles.container, className)} {...props}>
      <Icon style={{ width: svgSize, height: svgSize }} />
    </button>
  );
}
