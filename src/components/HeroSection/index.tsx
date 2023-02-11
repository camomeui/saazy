import { Button } from "@camome/core/Button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <a href="#" className={styles.tagLink}>
          <span className={styles.tagLink__tag}>New feature</span>
          <span className={styles.tagLink__text}>Read the release note</span>
          <ChevronRightIcon />
        </a>
        <div className={styles.mainCopy}>
          <div>
            Words to{" "}
            <span className={styles.mainCopy__accent}>attract customers</span>.
          </div>
          <div>This is important, take it serious.</div>
        </div>
        <div className={styles.subCopy}>
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Balancer>
        </div>
        <div className={styles.ctas}>
          <Button component={Link} href="/signup">
            Get started for free
          </Button>
          <Button component={Link} href="/contact" variant="soft">
            Request demo
          </Button>
        </div>
      </div>
    </section>
  );
}
