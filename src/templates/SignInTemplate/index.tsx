import SignInForm from "@/components/SignInForm";

import styles from "./styles.module.scss";

export default function SignInTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <hgroup className={styles.hgroup}>
          <p className={styles.title}>Welcome back.</p>
          <h1>Sign in to your account</h1>
        </hgroup>
        <SignInForm />
      </div>
    </div>
  );
}
