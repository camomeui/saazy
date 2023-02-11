import { Button } from "@camome/core/Button";
import { TextInput } from "@camome/core/TextInput";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  as?: "h2" | "h3" | "h4";
  className?: string;
};

export default function NewsletterForm({ as = "h3", className }: Props) {
  const H = as;
  return (
    <form
      action="/api/newsletter"
      method="POST"
      className={clsx(styles.container, className)}
    >
      <H className={styles.title}>Newsletter</H>
      <p className={styles.subTitle}>Subscribe to our latest news and posts.</p>
      <TextInput
        placeholder="address@example.com"
        type="email"
        name="email"
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
