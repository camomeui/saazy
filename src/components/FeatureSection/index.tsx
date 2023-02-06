import clsx from "clsx";
import React from "react";

import FeatureGrid, { FeatureGridProps } from "@/components/FeatureGrid";
import FeatureTabs, { type FeatureTabsProps } from "@/components/FeatureTabs";
import Heading from "@/components/Heading";

import styles from "./styles.module.scss";

type Props = {
  tabItems: FeatureTabsProps["items"];
  gridItems: FeatureGridProps["items"];
  className?: string;
};

export default function FeatureSection({
  tabItems,
  gridItems,
  className,
}: Props) {
  return (
    <section className={clsx(styles.Block, className)}>
      <Heading
        main="Features you may love"
        sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FeatureTabs items={tabItems} />
      <FeatureGrid items={gridItems} />
    </section>
  );
}
