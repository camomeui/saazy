import { Button } from "@camome/core/Button";
import { Checkbox } from "@camome/core/Checkbox";
import { TextInput } from "@camome/core/TextInput";
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
        <TextInput label="First name" name="firstName" required />
        <TextInput label="Last name" name="lastName" required />
      </div>
      <TextInput label="Company name" name="company" required />
      <TextInput label="Work email" type="email" name="email" required />
      <Textarea label="Message" rows={5} name="message" required />
      <Checkbox
        label="Subscribe to our newsletter"
        name="accept-terms"
        value="true"
        required
      />
      <Button>Submit</Button>
      <p className={styles.terms}>
        By submitting, you agree to Saazy&apos;s{" "}
        <Link href="#">Privacy Policy</Link>.
      </p>
    </form>
  );
}
