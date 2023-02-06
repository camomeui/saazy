import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function SignUpTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <hgroup className={styles.hgroup}>
          <p>Let&apos;s get started.</p>
          <h1>Create a new account</h1>
        </hgroup>
        <SignUpForm />
        <p className={styles.terms}>
          By continuing, you agree to Saazy&apos;s{" "}
          <Link href="#">Terms of Service</Link> and{" "}
          <Link href="#">Privacy Policy.</Link>
        </p>
      </div>
    </div>
  );
}
