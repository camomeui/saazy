import clsx from "clsx";
import React from "react";

import Image from "@/components/Image";
import ArrowRightSvg from "@/public/icons/arrow-right.svg";

import styles from "./styles.module.scss";

export type FeatureTabsProps = {
  items: {
    id: number;
    label: {
      Icon: React.ComponentType<React.ComponentProps<"svg">>;
      title: React.ReactNode;
    };
    panel: {
      heading: React.ReactNode;
      subheading: React.ReactNode;
      description: React.ReactNode;
      imgSrc: string;
      imgAlt: string;
    };
  }[];
  className?: string;
};

export default function FeatureTabs({ items, className }: FeatureTabsProps) {
  return (
    <div
      data-tabs
      role="tablist"
      aria-label="Sample tabs"
      className={clsx(styles.Block, className)}
    >
      {items.map(({ id }, i) => (
        <input
          key={id}
          id={tabId(id)}
          type="radio"
          name="tab"
          data-tab={tabId(id)}
          role="tab"
          aria-controls={`tab-panel${id}`}
          defaultChecked={i === 0}
        />
      ))}
      <nav className={styles.nav}>
        {items.map(({ id, label: { title, Icon } }) => (
          <label htmlFor={tabId(id)} key={tabId(id)} data-tab-label={tabId(id)}>
            <Icon />
            {title}
          </label>
        ))}
      </nav>
      {items.map(
        ({
          id,
          panel: { heading, subheading, description, imgSrc, imgAlt },
        }) => (
          <section
            id={panelId(id)}
            key={panelId(id)}
            data-tab-panel={tabId(id)}
            role="tabpanel"
            aria-labelledby={tabId(id)}
          >
            <div className={styles.panelImg}>
              <Image src={imgSrc} alt={imgAlt} fill />
            </div>
            <div>
              <p className={styles.subheading}>{subheading}</p>
              <div className={styles.stack}>
                <h3 className={styles.heading}>{heading}</h3>
                <p className={styles.description}>{description}</p>
                <a href="#" className={styles.link}>
                  Get started <ArrowRightSvg />
                </a>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
}

function tabId(id: number) {
  return `tab${id}`;
}

function panelId(id: number) {
  return `tab-panel${id}`;
}
