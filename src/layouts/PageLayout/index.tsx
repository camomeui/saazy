import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "./styles.module.scss";

export type PageLayoutProps = {
  title?: string;
  description?: string;
  stickyHeader?: boolean;
  children?: React.ReactNode;
};

export default function PageLayout({
  title,
  description,
  stickyHeader = false,
  children,
}: PageLayoutProps) {
  return (
    <>
      <div className={styles.background}>
        <Header isSticky={stickyHeader} />
        <main>
          {title && (
            <div className={styles.titleSection}>
              <div className={styles.titleSectionInner}>
                <h1 className={styles.title}>{title}</h1>
                {description && (
                  <p className={styles.description}>{description}</p>
                )}
              </div>
            </div>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
