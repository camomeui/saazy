import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "./styles.module.scss";

export type PageLayoutProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageLayout({
  title,
  description,
  children,
}: PageLayoutProps) {
  return (
    <>
      <div className={styles.background}>
        <Header />
        <main>
          {title && (
            <div className={styles.titleSection}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
