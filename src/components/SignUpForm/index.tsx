import { Button } from "@camome/core/Button";
import { Input } from "@camome/core/Input";
import Link from "next/link";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import SocialSignInButton from "@/components/SocialSignInButton";

import styles from "./styles.module.scss";

export default function SignUpForm() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Create a new account</h2>
      <form>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          fill
        />
        <Input label="Password" type="password" required fill />
        <Button>Sign up</Button>
      </form>

      <div className={styles.or}>
        <hr />
        <span>or continue with</span>
        <hr />
      </div>

      <div className={styles.social}>
        <SocialSignInButton
          Icon={FaGoogle}
          svgSize="1.1rem"
          aria-label="Sign up with Google"
        />
        <SocialSignInButton
          Icon={FaFacebook}
          svgSize="1.2rem"
          aria-label="Sign up with Facebook"
        />
        <SocialSignInButton
          Icon={FaGithub}
          svgSize="1.2rem"
          aria-label="Sign up with GitHub"
        />
      </div>

      <div className={styles.footer}>
        Already have an account? <Link href="/signin">Sign in.</Link>
      </div>
    </section>
  );
}
