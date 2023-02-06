import SignUpForm from "@/components/SignUpForm";

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
      </div>
    </div>
  );
}
