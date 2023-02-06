import Link from "next/link";
import React from "react";

import SignInForm from "@/components/SignInForm";

import styles from "./styles.module.scss";

export default function SignInTemplate() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Sign in to your account</h1>
        <div className={styles.sub}>
          No account yet? <Link href="/signup">Sign up</Link>
        </div>
      </div>
      <SignInForm />
    </div>
  );
}
