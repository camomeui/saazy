import { Button, Checkbox, TextInput } from "@camome/core";
import Link from "next/link";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import ButtonSocialSignIn from "@/components/ButtonSocialSignIn";

import styles from "./styles.module.scss";

export default function SignInForm() {
  return (
    <section className={styles.Block}>
      <form>
        <TextInput
          label="Email"
          type="text"
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
        <span>or</span>
        <hr />
      </div>

      <div className={styles.social}>
        <ButtonSocialSignIn
          Icon={FaGoogle}
          svgSize="1.1rem"
          aria-label="Sign up with Google"
          className={styles.social__button}
        />
        <ButtonSocialSignIn
          Icon={FaFacebook}
          svgSize="1.2rem"
          aria-label="Sign up with Facebook"
          className={styles.social__button}
        />
        <ButtonSocialSignIn
          Icon={FaGithub}
          svgSize="1.2rem"
          aria-label="Sign up with GitHub"
          className={styles.social__button}
        />
      </div>
    </section>
  );
}
