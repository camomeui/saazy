import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.scss";

type Props = {
  plans: {
    name: string;
    price: string;
    period: string;
    description: string;
    renderButton: () => React.ReactElement;
  }[];
  rows: {
    name: string;
    cells?: FeatureCellContents[];
    isSection?: boolean;
  }[];
  className?: string;
};

export default function PricingTableLarge({ plans, rows, className }: Props) {
  return (
    <table className={clsx(styles.container, className)}>
      <thead>
        <tr>
          <th className={clsx(styles.featureListTh, styles.topHeader)}>
            Feature list
          </th>
          {plans.map((plan) => (
            <PlanCell key={plan.name} plan={plan} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ name, cells, isSection }) => (
          <tr key={name}>
            {isSection ? (
              <SectionCell numOfCols={plans.length + 1}>{name}</SectionCell>
            ) : (
              <td>{name}</td>
            )}
            {cells?.map((cell) => (
              <FeatureCell key={cell?.toString()}>{cell}</FeatureCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type FeatureCellContents = React.ReactNode;

type PlanCellProps = {
  plan: Props["plans"][0];
};

function PlanCell({
  plan: { name, period, price, renderButton },
}: PlanCellProps) {
  return (
    <th className={styles.topHeader}>
      <div className={styles.planCell}>
        <div className={styles.planCell__name}>{name}</div>
        <div>
          <span className={styles.planCell__priceValue}>{price}</span>
          {period && (
            <span className={styles.planCell__pricePeriod}> /{period}</span>
          )}
        </div>
        {renderButton()}
      </div>
    </th>
  );
}

type FeatureCellProps = {
  children?: FeatureCellContents;
};

function FeatureCell({ children }: FeatureCellProps) {
  const contents = React.useMemo(() => {
    switch (typeof children) {
      case "boolean":
        return children === true ? (
          <CheckIcon className={styles.check} aria-label="Check mark" />
        ) : (
          "-"
        );
      case "string":
        return children;
      default:
        return children;
    }
  }, [children]);
  return (
    <td>
      <div className={styles.featureCell}>{contents}</div>
    </td>
  );
}

type SectionCellProps = { children?: string; numOfCols: number };

function SectionCell({ children, numOfCols }: SectionCellProps) {
  return (
    <th colSpan={numOfCols} className={styles.section}>
      {children}
    </th>
  );
}
