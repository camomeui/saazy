import { Button, Checkbox, TextInput } from "@camome/core";
import Link from "next/link";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import SocialSignInButton from "@/components/SocialSignInButton";

import styles from "./styles.module.scss";

export default function SignInForm() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Sign in to your account</h2>
      <form>
        <TextInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          fill
        />
        <TextInput label="Password" type="password" required fill />
        <div className={styles.sub}>
          <Checkbox label="Remember me" name="remember" value="true" />
          <Link href="#">Forgot password?</Link>
        </div>
        <Button>Sign in</Button>
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
        No account yet? <Link href="/signup">Sign up.</Link>
      </div>
    </section>
  );
}
