import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";
import LogoSvg from "@/public/icons/logo.svg";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import styles from "./styles.module.scss";

export default function SignUpTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.link}>
            <LogoSvg className={styles.logo} />
          </Link>
          <p className={styles.title}>Nice words to attract customers.</p>
          <ul className={styles.features}>
            {features.map((feat) => (
              <li key={feat.title}>
                <CheckCircleIcon />
                <h2>{feat.title}</h2>
                <p>{feat.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          <SignUpForm />
          <p className={styles.terms}>
            By continuing, you agree to Saazy&apos;s{" "}
            <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const features: { title: string; description: string }[] = [
  {
    title: "Easy setup, no code required",
    description:
      "Culpa minim ut velit proident eiusmod minim dolore. Tempor ullamco ut quis nisi.",
  },
  {
    title: "Global edge network",
    description:
      "In aliquip laboris eu nulla Lorem sint excepteur cupidatat mollit tempor excepteur tempor occaecat.",
  },
  {
    title: "14-day free trial",
    description:
      "Ipsum ex nulla incididunt officia id eiusmod commodo. Irure proident reprehenderit elit id sunt nulla qui.",
  },
  {
    title: "Free forever for core features",
    description:
      "Nostrud anim irure eu sit et dolore ad pariatur do.Adipisicing minim officia duis ullamco.",
  },
];
