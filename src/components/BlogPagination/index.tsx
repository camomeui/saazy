import { Button } from "@camome/core";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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

  const newerButtonProps = {
    startDecorator: <ChevronLeftIcon className={styles.arrow} />,
    children: <span>Newer</span>,
  };

  const olderButtonProps = {
    endDecorator: <ChevronRightIcon className={styles.arrow} />,
    children: <span>Older</span>,
  };

  return (
    <nav className={clsx(styles.nav, className)}>
      {prevPage ? (
        <Button
          component={Link}
          href={
            currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
          }
          variant={buttonVariant}
          size="sm"
          {...newerButtonProps}
        />
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
          size="sm"
          {...olderButtonProps}
        />
      ) : (
        <div />
      )}
    </nav>
  );
}
