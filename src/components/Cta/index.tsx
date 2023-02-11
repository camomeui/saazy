import { Button } from "@camome/core/Button";
import clsx from "clsx";
import Link from "next/link";

import LogoSvg from "@/public/icons/logo-icon.svg";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export default function Cta({ className }: Props) {
  return (
    <section className={clsx(styles.container, className)}>
      <LogoSvg className={styles.logo} />
      <div className={styles.text}>
        <p className={styles.title}>Ready to get started?</p>
        <p className={styles.description}>
          Labore do amet commodo id ex reprehenderit sint duis officia et. Qui
          occaecat ipsum exercitation officia cupidatat ex ad ipsum laboris
          veniam amet dolor anim.
        </p>
      </div>
      <div className={styles.buttons}>
        <Button component={Link} href="/signup" size="lg">
          Get started for free
        </Button>
        <Button component={Link} href="/contact" size="lg" variant="soft">
          Request demo
        </Button>
      </div>
    </section>
  );
}
