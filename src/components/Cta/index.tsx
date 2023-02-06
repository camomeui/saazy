import clsx from "clsx";

import { Button } from "@camome/core/Button";
import NewsletterForm from "@/components/NewsletterForm";

import styles from "./styles.module.scss";
import Link from "next/link";

type Props = {
  className?: string;
};

export default function Cta({ className }: Props) {
  return (
    <section className={clsx(styles.container, className)}>
      <div className={styles.card}>
        <div className={styles.card__title}>Ready to try Saazy?</div>
        <div className={styles.card__sub}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
        <div>
          <Button component={Link} href="/signup">
            Get started for free
          </Button>
        </div>
      </div>
      <NewsletterForm className={styles.newsletter} />
    </section>
  );
}
