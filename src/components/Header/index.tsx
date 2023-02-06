import { IconButton } from "@camome/core/IconButton";
import { Button } from "@camome/core/Button";
import { SvgComponent } from "@camome/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import {
  ExclamationTriangleIcon,
  ListBulletIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  CheckCircleIcon,
  HashtagIcon,
  ChatBubbleLeftEllipsisIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

import CollapsibleNav from "@/components/CollapsibleNav";
import PopoverLinks from "@/components/PopoverLinks";
import LogoSvg from "@/public/icons/logo.svg";
import { NavItem, NavItemLink } from "@/types";

import styles from "./styles.module.scss";
import ThemeSwitch from "@/components/ThemeSwitch";

const DIALOG_ID = "header-menu";

const navItems: NavItem[] = [
  {
    id: "pricing",
    href: "/pricing",
    label: "Pricing",
  },
  {
    id: "blog",
    label: "Blog",
    open: true,
    items: [
      {
        id: "blog-posts",
        href: "/blog",
        label: "Posts",
      },
      {
        id: "blog-tags",
        href: "/blog/tags",
        label: "Tags",
      },
    ],
  },
  {
    id: "docs",
    label: "Docs",
    open: true,
    items: [
      {
        id: "docs-introduction",
        href: "/docs/introduction",
        label: "Introduction",
      },
      {
        id: "docs-cms-markdown",
        href: "/docs/cms/markdown",
        label: "Markdown",
      },
    ],
  },
  {
    id: "misc",
    label: "Misc",
    open: true,
    items: [
      {
        id: "contact",
        href: "/contact",
        label: "Contact",
      },
      {
        id: "mdx-page",
        href: "/mdx-page",
        label: "MDX page",
      },
      {
        id: "404",
        href: "/404",
        label: "404 page",
      },
      {
        id: "success",
        href: "/success",
        label: "Form submission",
      },
    ],
  },
];

const linkToIconMap: { [id: string]: SvgComponent } = {
  "blog-posts": ListBulletIcon,
  "blog-tags": HashtagIcon,
  "docs-introduction": CommandLineIcon,
  "docs-components": Squares2X2Icon,
  "docs-cms-markdown": PencilSquareIcon,
  contact: ChatBubbleLeftEllipsisIcon,
  "mdx-page": DocumentTextIcon,
  "404": ExclamationTriangleIcon,
  success: CheckCircleIcon,
};

type Props = {
  menuContent?: ({ close }: { close: () => void }) => React.ReactNode;
  classNames?: {
    block?: string;
    inner?: string;
  };
};

export default function Header({ menuContent, classNames }: Props) {
  const dialogRef = React.useRef<HTMLDialogElement>(null!);
  // const { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } =
  //   useScrollLock(dialogRef);

  const openMenu = () => {
    // disableBodyScroll();
    dialogRef.current?.showModal();
  };
  const closeMenu = () => {
    dialogRef.current?.close();
  };

  React.useEffect(() => {
    dialogRef.current.addEventListener("close", () => {
      // enableBodyScroll();
    });
    return () => {
      // clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <header className={clsx(styles.Block, classNames?.block)}>
      <div className={clsx(styles.inner, classNames?.inner)}>
        <div className={styles.leftSection}>
          <IconButton
            className={styles.menuButton}
            aria-label="Toggle menu"
            variant="ghost"
            colorScheme="neutral"
            size="sm"
            onClick={openMenu}
            data-dialog-trigger-for={DIALOG_ID}
          >
            <Bars3Icon />
          </IconButton>
          <Link href="/" className={styles.logoWrap}>
            <LogoSvg />
          </Link>
          <Navigation items={navItems} className={styles.desktopOnly} />
        </div>
        <div className={clsx(styles.rightSection)}>
          <ThemeSwitch />
          <Button
            component={Link}
            href="/signin"
            variant="ghost"
            colorScheme="neutral"
            className={styles.desktopOnly}
          >
            Sign in
          </Button>
          <Button component={Link} href="/signup">
            Get started
          </Button>
        </div>
      </div>
      <dialog ref={dialogRef} className={styles.menu} id={DIALOG_ID}>
        <div className={styles.menu__header}>
          <IconButton
            aria-label="Close menu"
            onClick={closeMenu}
            variant="ghost"
            colorScheme="neutral"
            size="sm"
            data-dialog-trigger-for={DIALOG_ID}
          >
            <XMarkIcon />
          </IconButton>
        </div>
        <div className={styles.menu__content}>
          {menuContent ? (
            menuContent({ close: closeMenu })
          ) : (
            <div className={styles.navMobile}>
              <div className={styles.navMobile__buttonList}>
                <Button
                  component={Link}
                  href="/signup"
                  className={styles.navMobile__button}
                  onClick={closeMenu}
                >
                  Get started
                </Button>
                <Button
                  component={Link}
                  href="/signin"
                  variant="soft"
                  className={styles.navMobile__button}
                  onClick={closeMenu}
                >
                  Sign in
                </Button>
              </div>
              <CollapsibleNav items={navItems} onClickLink={closeMenu} />
            </div>
          )}
        </div>
      </dialog>
    </header>
  );
}

type NavigationProps = {
  items: NavItem[];
  onClickLink?: () => void;
  className?: string;
};

function Navigation({ items, onClickLink, className }: NavigationProps) {
  return (
    <nav className={clsx(styles.nav, className)}>
      <ul className={styles.list}>
        {items.map((item) =>
          "items" in item ? (
            <PopoverLinks
              key={item.id}
              title={item.label}
              links={item.items.filter(isLinkItem).map((link) => ({
                ...link,
                Icon: linkToIconMap[link.id],
              }))}
            />
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClickLink}
                className={styles.link}
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

function isLinkItem(item: NavItem): item is NavItemLink {
  return !("items" in item);
}
