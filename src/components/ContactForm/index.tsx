import { Button } from "@camome/core/Button";
import { Checkbox } from "@camome/core/Checkbox";
import { Input } from "@camome/core/Input";
import { Textarea } from "@camome/core/Textarea";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export default function ContactForm({ className }: Props) {
  return (
    <form
      action="/api/contact"
      method="POST"
      className={clsx(styles.container, className)}
    >
      <div className={styles.column2}>
        <Input label="First name" name="firstName" required />
        <Input label="Last name" name="lastName" required />
      </div>
      <Input label="Company name" name="company" required />
      <Input label="Work email" type="email" name="email" required />
      <Textarea label="Message" rows={5} name="message" required />
      <Checkbox
        label="Subscribe to our newsletter"
        name="accept-terms"
        value="true"
      />
      <Button>Submit</Button>
      <p className={styles.terms}>
        By submitting, you agree to Saazy&apos;s{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </form>
  );
}
