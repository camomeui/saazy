import { Button } from "@camome/core";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NotFoundSvg from "@/public/vector/not-found.svg";

import styles from "./styles.module.scss";

export default function NotFoundTemplate() {
  return (
    <div className={styles.background}>
      <Header />
      <main className={styles.container}>
        <div>
          <div className={styles.title}>404</div>
          <div className={styles.description}>Page not found...</div>
          <Button component={Link} href="/" className={styles.button}>
            Go home
          </Button>
        </div>
        <div>
          <NotFoundSvg className={styles.image} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
