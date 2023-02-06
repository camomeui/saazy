import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@camome/core/Button";
import Image from "@/components/Image";
import Stats from "@/components/Stats";

import styles from "./styles.module.scss";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <a href="#" className={styles.tagLink}>
          New feature has come <ChevronRightIcon />
        </a>
        <div className={styles.mainCopy}>
          <div>Grow your business</div>
          <div>with your customers</div>
        </div>
        <div className={styles.subCopy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </div>
        <div className={styles.ctas}>
          <Button component={Link} href="/signup">
            Get started for free
          </Button>
          <Button component={Link} href="/contact" variant="soft">
            Request demo
          </Button>
        </div>
        <Stats
          items={[
            {
              term: "Revenue increase",
              data: "$3k+",
            },
            {
              term: "Happy customers",
              data: "5k+",
            },
            {
              term: "Productivity gain",
              data: "20%",
            },
          ]}
          className={styles.stats}
        />
      </div>

      <div className={styles.heroImage}>
        <Image src="/images/hero.webp" alt="Hero image" fill />
      </div>
    </section>
  );
}
