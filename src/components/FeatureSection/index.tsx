import Heading, { type HeadingProps } from "@/components/Heading";
import { Button } from "@camome/core/Button";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Link from "next/link";

type Props = {
  heading: HeadingProps;
  description?: React.ReactNode;
  listItems?: string[];
  buttonText?: string;
  visual: React.ReactNode;
  reversed?: boolean;
  className?: string;
};

export default function FeatureSection({
  heading,
  description,
  listItems,
  buttonText,
  visual,
  reversed = false,
  className,
}: Props) {
  return (
    <section className={clsx(className)}>
      <div className={clsx(styles.inner, reversed && styles.reversed)}>
        <div className={styles.left}>
          <Heading {...heading} />
          <p className={styles.description}>{description}</p>
          {listItems?.length && (
            <ul className={styles.list}>
              {listItems.map((item) => (
                <li key={item}>
                  <span className={styles.icon}>
                    <CheckCircleIcon />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          )}
          <Button
            size="sm"
            variant="ghost"
            endDecorator={<ChevronRightIcon />}
            className={styles.button}
          >
            {buttonText || "Learn more"}
          </Button>
        </div>
        <div className={styles.right}>{visual}</div>
      </div>
    </section>
  );
}
