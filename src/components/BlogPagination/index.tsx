import { Button } from "@camome/core";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";

import { Pagination } from "@/types";

import styles from "./styles.module.scss";

const buttonVariant = "ghost";

type Props = { className?: string } & Pagination;

export default function BlogPagination({
  className,
  currentPage,
  totalPages,
}: Props) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  const newerButtonContent = (
    <>
      <ArrowSmallLeftIcon className={styles.arrow} />
      <span>Newer</span>
    </>
  );

  const olderButtonContent = (
    <>
      <span>Older</span>
      <ArrowSmallRightIcon className={styles.arrow} />
    </>
  );

  return (
    <nav className={clsx(styles.nav, className)}>
      {prevPage ? (
        <Button
          component={Link}
          href={
            currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
          }
          variant={buttonVariant}
          className={styles.button}
        >
          {newerButtonContent}
        </Button>
      ) : (
        <div />
      )}
      <span className={styles.status}>
        Page {currentPage} of {totalPages}
      </span>
      {nextPage ? (
        <Button
          component={Link}
          href={`/blog/page/${currentPage + 1}`}
          variant={buttonVariant}
          className={styles.button}
        >
          {olderButtonContent}
        </Button>
      ) : (
        <div />
      )}
    </nav>
  );
}
