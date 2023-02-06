import { Accordion, AccordionItem } from "@camome/core";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

const items: AccordionItem[] = [
  {
    summary: "Laborum tempor labore esse pariatur mollit?",
    details:
      "Id veniam esse occaecat eu esse minim aliqua fugiat cillum mollit proident tempor laborum sit. Ullamco non amet esse officia. Aute aute fugiat reprehenderit deserunt commodo non laboris consectetur. Irure irure veniam ex consequat commodo aute in qui voluptate elit esse est deserunt.",
  },
  {
    summary: "Aliqua ut Lorem ut sint aliquip dolor do sint?",
    details:
      "Amet amet quis eiusmod eu adipisicing aute cillum. In deserunt aliqua qui dolor aliquip sunt ad dolore veniam.",
  },
  {
    summary: "Sunt non consequat dolor voluptate occaecat sit tempor anm?",
    details:
      "Esse in sint qui ad sit voluptate mollit cupidatat commodo velit. Minim duis dolor officia adipisicing enim ullamco amet. Laboris aliqua ut qui ex dolore aliqua ullamco. Culpa sunt et dolore nulla irure do deserunt ea veniam sit non.",
  },
  {
    summary: "Non in nulla exercitation ullamco Lorem do aliquip?",
    details:
      "elit veniam pariatur fugiat. Exercitation mollit in ut labore quis in culpa. Cillum do amet tempor commodo aute Lorem id. Nulla nulla nisi ipsum est cupidatat consequat. Veniam dolore Lorem ea dolore amet dolore aliquip irure.",
  },
  {
    summary: "Velit sunt dolore proident incididunt est laborum?",
    details:
      "Ad occaecat non sit occaecat. Cillum deserunt amet laborum labore consectetur quis et ad aliqua ad. Amet exercitation exercitation sunt excepteur consectetur ut.",
  },
];

export default function FaqSection() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.heading__main}>Frequently asked questions</h2>
          <p className={styles.heading__sub}>
            If you have any questions not listed here, feel free to{" "}
            <Link href="/contact">contact us!</Link>
          </p>
        </div>
        <div>
          <Accordion
            items={items}
            classNames={{ summary: styles.summary, contents: styles.contents }}
          />
        </div>
      </div>
    </section>
  );
}
