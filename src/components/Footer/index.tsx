import Link from "next/link";
import React from "react";
import {
  TbBrandGithub,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";

import IconLink from "@/components/IconLink";
import Logo from "@/components/Logo";

import styles from "./styles.module.scss";

type Props = {
  navItems: {
    section: string;
    links: {
      href: string;
      label: string;
    }[];
  }[];
  bottomLinks: {
    href: string;
    label: string;
  }[];
  socialLinks: {
    href: string;
    ariaLabel: string;
    Icon: React.ComponentType<React.ComponentProps<"svg">>;
  }[];
};

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.description}>
          <div className={styles.description__logo}>
            <Logo />
          </div>
        </div>
        <nav className={styles.navGrid}>
          {navItems.map((navItem) => (
            <div key={navItem.section} className={styles.navGrid__section}>
              <h2>{navItem.section}</h2>
              <ul>
                {navItem.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <small className={styles.bottom__copyright}>
          © {new Date().getFullYear()} Saazy, Inc.
        </small>
        <nav className={styles.bottom__nav}>
          <ul>
            {bottomLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.bottom__social}>
          {socialLinks.map((social) => (
            <li key={social.href}>
              <IconLink {...social} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

const navItems: Props["navItems"] = [
  {
    section: "Products",
    links: [
      {
        href: "#cloud",
        label: "Cloud",
      },
      {
        href: "#mobile",
        label: "Mobile Apps",
      },
      {
        href: "#apis",
        label: "Public APIs",
      },
    ],
  },
  {
    section: "Support",
    links: [
      {
        href: "#pricing",
        label: "Pricing",
      },
      {
        href: "#contact",
        label: "Contact us",
      },
      {
        href: "#faq",
        label: "FAQ",
      },
    ],
  },
  {
    section: "Company",
    links: [
      {
        href: "#about",
        label: "About",
      },
      {
        href: "#blog",
        label: "Blog",
      },
      {
        href: "#carriers",
        label: "Carriers",
      },
      {
        href: "#press",
        label: "Press",
      },
    ],
  },
  {
    section: "Developers",
    links: [
      {
        href: "#docs",
        label: "Docs",
      },
      {
        href: "#portal",
        label: "Portal",
      },
      {
        href: "#status",
        label: "Status",
      },
    ],
  },
];

const bottomLinks: Props["bottomLinks"] = [
  {
    href: "/mdx-page#1",
    label: "Terms",
  },
  {
    href: "/mdx-page#2",
    label: "Privacy",
  },
  {
    href: "/mdx-page#3",
    label: "Security",
  },
];
const socialLinks: Props["socialLinks"] = [
  {
    href: "#twitter",
    ariaLabel: "twitter",
    Icon: TbBrandTwitter,
  },
  {
    href: "#instagram",
    ariaLabel: "instagram",
    Icon: TbBrandInstagram,
  },
  {
    href: "#facebook",
    ariaLabel: "facebook",
    Icon: TbBrandFacebook,
  },
  {
    href: "#github",
    ariaLabel: "github",
    Icon: TbBrandGithub,
  },
];
