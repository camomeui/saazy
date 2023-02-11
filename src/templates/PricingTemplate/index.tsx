import { Button } from "@camome/core/Button";
import Link from "next/link";

import Cta from "@/components/Cta";
import PricingTableLarge from "@/components/pricing-tables/PricingTableLarge";
import PricingTableSmall from "@/components/pricing-tables/PricingTableSmall";

import styles from "./styles.module.scss";

export default function PricingTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <PricingTableLarge {...props} className={styles.large} />
        <PricingTableSmall {...props} className={styles.small} />
      </div>
      <Cta />
    </div>
  );
}

const props = {
  plans: [
    {
      name: "Starter",
      price: "$8",
      period: "month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      renderButton: () => (
        <Button component={Link} href="/signup">
          Get started
        </Button>
      ),
    },
    {
      name: "Pro",
      price: "$99",
      period: "month",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      renderButton: () => (
        <Button component={Link} href="/signup">
          Get started
        </Button>
      ),
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      renderButton: () => (
        <Button component={Link} href="/contact">
          Contact sales
        </Button>
      ),
    },
  ],
  rows: [
    { name: "Development", isSection: true },
    {
      name: "Members",
      cells: [3, 5, "$5 per member"],
    },
    {
      name: "Concurrent build",
      cells: [1, 3, 10],
    },
    {
      name: "Custom domain",
      cells: [false, false, true],
    },

    { name: "Features", isSection: true },
    {
      name: "Dolor sit amet",
      cells: [true, true, true],
    },
    {
      name: "Consectetur",
      cells: [false, true, true],
    },
    {
      name: "Adipiscing elit",
      cells: [false, true, true],
    },
    {
      name: "Sed do eiusmod",
      cells: [false, false, true],
    },

    { name: "Support", isSection: true },
    {
      name: "Tempor",
      cells: ["24 hours", "28 days", "3 months"],
    },
    {
      name: "Incididunt ut labore",
      cells: [1, 3, "Contact sales"],
    },
    {
      name: "Dolore magna",
      cells: [false, false, "Contact sales"],
    },
    {
      name: "Ut enim",
      cells: [false, false, "Contact sales"],
    },
  ],
};
