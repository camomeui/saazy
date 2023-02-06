import { Button } from "@camome/core/Button";
import { TextInput } from "@camome/core/TextInput";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import ButtonSocialSignIn from "@/components/ButtonSocialSignIn";

import styles from "./styles.module.scss";
import Link from "next/link";

export default function SignUpForm() {
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
        <Button>Sign up</Button>
      </form>

      <div className={styles.or}>
        <hr />
        <span>or continue with</span>
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

      <div className={styles.footer}>
        Already have an account? <Link href="/signin">Sign in.</Link>
      </div>
    </section>
  );
}
