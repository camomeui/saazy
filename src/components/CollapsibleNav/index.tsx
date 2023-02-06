import { ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { NavItem } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  items: NavItem[];
  onClickLink?: () => void;
  className?: string;
};

export default function CollapsibleNavigation({
  items,
  onClickLink,
  className,
}: Props) {
  return (
    <nav className={className}>
      <ul className={styles.list}>
        {items.map((item) => (
          <Item key={item.id} item={item} onClickLink={onClickLink} />
        ))}
      </ul>
    </nav>
  );
}

type ItemProps = {
  item: NavItem;
  onClickLink?: () => void;
};

function Item({ item, onClickLink }: ItemProps) {
  const detailsRef = React.useRef<HTMLDetailsElement>(null);
  const router = useRouter();
  const isActive = React.useCallback(
    (href: string) => href === router.asPath,
    [router.asPath]
  );
  const isCategoryActive =
    "items" in item &&
    item.items.some((i) => !("items" in i) && isActive(i.href));

  React.useEffect(() => {
    // Open if category is active and not open.
    // But don't close even if category is not active.
    if (detailsRef.current && !detailsRef.current.open && isCategoryActive) {
      detailsRef.current.open = true;
    }
  }, [isCategoryActive, router.asPath]);

  if ("items" in item) {
    // Category
    return (
      <li className={styles.category}>
        <details open={item.open || isCategoryActive} ref={detailsRef}>
          <summary className={styles.button}>
            {item.label}
            <ChevronRightIcon />
          </summary>
          <ul className={styles.list}>
            {item.items.map((item) => (
              <Item key={item.id} item={item} onClickLink={onClickLink} />
            ))}
          </ul>
        </details>
      </li>
    );
  } else {
    // Document link
    return (
      <li key={item.href}>
        <Link
          href={item.href}
          className={clsx(
            styles.button,
            isActive(item.href) && styles.isActive
          )}
          onClick={onClickLink}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          {item.label}
        </Link>
      </li>
    );
  }
}
