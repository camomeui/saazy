import { Markup } from "@camome/core";
import React from "react";

import PageLayout from "@/layouts/PageLayout";

import styles from "./styles.module.scss";

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export default function MdxPageLayout({ children, ...props }: Props = {}) {
  return (
    <PageLayout {...props}>
      <Markup className={styles.Block}>{children}</Markup>
    </PageLayout>
  );
}
