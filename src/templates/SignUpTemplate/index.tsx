import Link from "next/link";
import React from "react";

import SignUpForm from "@/components/SignUpForm";

import styles from "./styles.module.scss";

export default function SignUpTemplate() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Create your account</h1>
        <div className={styles.sub}>
          Already have an account? <Link href="/signin">Sign in</Link>
        </div>
      </div>
      <SignUpForm />
    </div>
  );
}
