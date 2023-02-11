import Link from "next/link";

import SignInForm from "@/components/SignInForm";
import LogoSvg from "@/public/vector/logo-icon.svg";

import styles from "./styles.module.scss";

export default function SignInTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Link href="/">
          <LogoSvg className={styles.logo} />
        </Link>
        <p className={styles.title}>Welcome back.</p>
        <SignInForm />
      </div>
    </div>
  );
}
