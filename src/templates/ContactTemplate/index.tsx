import ContactForm from "@/components/ContactForm";
import LogoCloud from "@/components/LogoCloud";

import styles from "./styles.module.scss";

export default function ContactTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div>
            <p className={styles.title}>Let&apos;s connect.</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, vel ea etiam laboramus. Ne mei odio
              sonet, erant quodsi blandit no mea, no omnis constituam interesset
              sed.
            </p>
          </div>
          <section className={styles.section}>
            <h2>Talk to Saazy expert to</h2>
            <ul className={styles.list}>
              {listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className={styles.section}>
            <h2>We&apos;re trusted by</h2>
            <LogoCloud className={styles.logoCloud} />
          </section>
        </div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

const listItems = [
  "Get all your questions answered.",
  "Do a live walkthrough of the platform.",
  "Explore which pricing plan is best for you.",
];
