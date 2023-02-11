import clsx from "clsx";
import React from "react";

import CheckIcon from "@/public/icons/check.svg";

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
    cells?: React.ReactNode[];
    isSection?: boolean;
  }[];
  className?: string;
};

export default function PricingTableSmall({ plans, rows, className }: Props) {
  return (
    <table className={clsx(styles.container, className)}>
      <tbody>
        {plans.map((plan, i) => (
          <React.Fragment key={plan.name}>
            <tr>
              <PlanCell key={plan.name} plan={plan} />
            </tr>

            {rows.map(({ name, cells, isSection }) => (
              <tr key={name}>
                {isSection ? (
                  <SectionCell numOfCols={plans.length + 1}>{name}</SectionCell>
                ) : (
                  <FeatureCell key={name} featureTitle={name}>
                    {cells?.[i]}
                  </FeatureCell>
                )}
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

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
  featureTitle: string;
  children: React.ReactNode;
};

function FeatureCell({ featureTitle, children }: FeatureCellProps) {
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
      <div className={styles.featureCell}>
        <div className={styles.featureCell__title}>{featureTitle}</div>
        <div className={styles.featureCell__contents}>{contents}</div>
      </div>
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
