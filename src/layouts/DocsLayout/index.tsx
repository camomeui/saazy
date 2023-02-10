import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import type { NavItem } from "@/types";

import styles from "./styles.module.scss";

type Props = {
  sidebarItems: NavItem[];
  children: React.ReactNode;
};

export default function DocsLayout({ sidebarItems, children }: Props) {
  return (
    <div className={styles.container}>
      <Header
        menuContent={({ close }) => (
          <Sidebar
            items={sidebarItems}
            onClickLink={close}
            className={styles.sidebarMobile}
          />
        )}
        classNames={{
          block: styles.header,
          inner: styles.headerInner,
        }}
      />
      <main className={styles.main}>
        <Sidebar items={sidebarItems} className={styles.sidebarDesktop} />
        {children}
      </main>
    </div>
  );
}
