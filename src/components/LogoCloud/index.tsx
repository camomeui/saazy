import clsx from "clsx";

import Logo1Svg from "@/public/vector/logo-lorem-1.svg";
import Logo2Svg from "@/public/vector/logo-lorem-2.svg";
import Logo3Svg from "@/public/vector/logo-lorem-3.svg";
import Logo4Svg from "@/public/vector/logo-lorem-4.svg";
import Logo5Svg from "@/public/vector/logo-lorem-5.svg";
import Logo6Svg from "@/public/vector/logo-lorem-6.svg";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export default function LogoCloud({ className }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.item}>
        <Logo1Svg />
      </div>
      <div className={styles.item}>
        <Logo2Svg />
      </div>
      <div className={styles.item}>
        <Logo3Svg />
      </div>
      <div className={styles.item}>
        <Logo4Svg />
      </div>
      <div className={styles.item}>
        <Logo5Svg />
      </div>
      <div className={styles.item}>
        <Logo6Svg />
      </div>
    </div>
  );
}
