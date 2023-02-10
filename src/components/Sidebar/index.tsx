import clsx from "clsx";

import CollapsibleNavigation from "@/components/CollapsibleNav";
import { NavItem } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  items: NavItem[];
  onClickLink?: () => void;
  className?: string;
};

export default function Sidebar({ items, onClickLink, className }: Props) {
  return (
    <aside className={clsx(styles.container, className, "scrollbar")}>
      <CollapsibleNavigation items={items} onClickLink={onClickLink} />
    </aside>
  );
}
