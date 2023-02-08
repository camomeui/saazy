import Heading from "@/components/Heading";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function FaqSection() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div>
          <Heading
            title="Frequently asked questions."
            tagline="FAQ"
            icon={<ChatBubbleLeftRightIcon />}
          />
          <p className={styles.sub}>
            Can&apos;t find an answer? Feel free to{" "}
            <Link href="/contact">contact us</Link>.
          </p>
        </div>
        <dl className={styles.dl}>
          {items.map(({ question, answer }) => (
            <div key={question}>
              <dt>{question}</dt>
              <dd>{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const items: { question: string; answer: string }[] = [
  {
    question: "Laborum tempor labore esse pariatur mollit?",
    answer:
      "Aliqua fugiat tempor laborum sit. Reprehenderit deserunt commodo non. Irure irure veniam ex consequat commodo aute in qui voluptate elit esse est deserunt.",
  },
  {
    question: "Aliqua ut Lorem ut sint aliquip dolor do sint?",
    answer:
      "Amet amet quis eiusmod eu adipisicing aute cillum. In deserunt aliqua qui dolor aliquip sunt ad dolore veniam.",
  },
  {
    question: "Sunt non consequat dolor voluptate occaecat sit tempor anm?",
    answer:
      "Esse in sint enim ullamco amet. Laboris aliqua ut qui ex dolore aliqua ullamco. Culpa sunt et dolore nulla irure do deserunt ea veniam sit non.",
  },
  {
    question: "Non in nulla exercitation ullamco Lorem do aliquip?",
    answer:
      "Exercitation mollit commodo aute Lorem id. Nulla nulla nisi ipsum est cupidatat consequat. Veniam dolore Lorem ea dolore amet dolore aliquip irure.",
  },
  {
    question: "Velit sunt dolore proident incididunt est laborum?",
    answer:
      "Ad occaecat non sit laborum labore consectetur quis et ad aliqua ad. Amet exercitation exercitation sunt excepteur consectetur ut.",
  },
  {
    question: "Duis voluptate ex fugiat labore proident minim?",
    answer:
      "Proident officia adipisicing et laborum labore quis duis mollit mollit dolor excepteur exercitation sunt proident nulla.",
  },
];
