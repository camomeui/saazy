import React from "react";

import CheckIcon from "@/public/icons/check.svg";

import styles from "./styles.module.scss";

type PlanCellProps = {
  name: string;
  period: string;
  price: string;
  renderButton: () => React.ReactElement;
};

export function PlanCell({ name, period, price, renderButton }: PlanCellProps) {
  return (
    <th>
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
  children?: React.ReactNode;
};

export function FeatureCell({ children }: FeatureCellProps) {
  const contents = React.useMemo(() => {
    switch (typeof children) {
      case "boolean":
        return children === true ? <CheckIcon className={styles.check} /> : "-";
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

export function SectionCell({ children, numOfCols }: SectionCellProps) {
  return (
    <th colSpan={numOfCols} className={styles.section}>
      {children}
    </th>
  );
}
