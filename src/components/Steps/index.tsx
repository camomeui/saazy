import { Button } from "@camome/core";
import clsx from "clsx";
import React from "react";

import Image from "@/components/Image";
import ArrowRightSvg from "@/public/icons/arrow-right.svg";
import CheckSvg from "@/public/icons/check.svg";

import styles from "./styles.module.scss";

type Step = {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  features: string[];
};

type Props = {
  items: Step[];
  className?: string;
};

export default function Steps({ items, className }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      {items.map((item, i) => (
        <React.Fragment key={item.title}>
          <StepItemTexts step={item} />
          <div key={i} className={styles.timeline__item} data-index={i}>
            <div className={styles.timeline__circle} />
            <div className={styles.timeline__line} />
          </div>
          <StepItemImage step={item} />
        </React.Fragment>
      ))}

      <div className={styles.timeline__item}>
        <div className={styles.timeline__circle} />
      </div>
    </div>
  );
}

type ItemProps = {
  step: Step;
};

function StepItemTexts({ step }: ItemProps) {
  return (
    <div className={styles.texts}>
      <h2 className={styles.texts__title}>{step.title}</h2>
      <p className={styles.texts__description}>{step.description}</p>
      <ul className={styles.feature__list}>
        {step.features.map((feature) => (
          <li key={feature} className={styles.feature__item}>
            <span className={styles.feature__check}>
              <CheckSvg />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="soft">
        <span>Learn more</span>
        <ArrowRightSvg className={styles.arrowRight} />
      </Button>
    </div>
  );
}

function StepItemImage({ step }: ItemProps) {
  return (
    <div className={styles.image}>
      <div className={styles.image__wrap}>
        <Image src={step.imgSrc} alt={step.imgAlt} fill />
      </div>
    </div>
  );
}
