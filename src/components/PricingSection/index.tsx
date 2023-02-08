import clsx from "clsx";
import React from "react";
import { TicketIcon } from "@heroicons/react/24/outline";

import Heading from "@/components/Heading";
import CheckSvg from "@/public/icons/check.svg";

import styles from "./styles.module.scss";

type Props = {
  items: ItemProps[];
};

export default function PricingSection({ items }: Props) {
  return (
    <section className={styles.Block}>
      <Heading
        icon={<TicketIcon />}
        title="Affordable for everyone."
        tagline="Pricing plans"
        className={styles.heading}
      />
      <div className={styles.list}>
        {items.map((item) => (
          <Item key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}

type ItemProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  renderButton?: () => React.ReactElement;
  isMostPopular?: boolean;
};

function Item({
  name,
  price,
  period,
  description,
  features,
  renderButton,
  isMostPopular,
}: ItemProps) {
  return (
    <div className={clsx(styles.item, isMostPopular && styles.mostPopular)}>
      <div className={styles.item__upper}>
        <h3 className={styles.item__name}>{name}</h3>
        <div>
          <span className={styles.item__price}>{price}</span>
          {period && <span className={styles.item__priceUnit}>/ {period}</span>}
        </div>
        <p className={styles.item__description}>{description}</p>
      </div>
      <hr />
      <ul className={styles.item__featureList}>
        {features.map((feat) => (
          <li key={feat} className={styles.item__feature}>
            <span className={styles.item__check}>
              <CheckSvg />
            </span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      <div className={styles.item__button}>{renderButton?.()}</div>
    </div>
  );
}
