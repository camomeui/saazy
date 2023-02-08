import clsx from "clsx";
import FeatureGrid from "@/components/FeatureGrid";
import Heading from "@/components/Heading";
import {
  RocketLaunchIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BoltIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import styles from "./styles.module.scss";
import { Button } from "@camome/core/Button";

type Props = {
  className?: string;
};

export default function FeatureSection({ className }: Props) {
  return (
    <section className={clsx(styles.container, className)}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Heading
            icon={<RocketLaunchIcon />}
            title="You may like these too."
            tagline="More features"
          />
          <p className={styles.description}>
            Dolor exercitation est ipsum quis pariatur proident qui proident
            paria laboris irure esse consequat laborum esse nisi nulla culpa
            dolore dolore citation est ipsum.
          </p>
          <Button
            endDecorator={<ChevronRightIcon />}
            size="sm"
            variant="ghost"
            className={styles.button}
          >
            Learn more
          </Button>
        </div>
        <FeatureGrid
          items={[
            {
              title: "Affordable cost",
              description:
                "Reprehenderit adipisicing veniam nulla cillum. Cillum pariatur Lorem consequat.",
              Icon: CurrencyDollarIcon,
            },
            {
              title: "Lightning fast",
              description:
                "Eu sint exercitation deserunt et nostrud exercitation cillum veniam nostrud.",
              Icon: BoltIcon,
            },
            {
              title: "Code editor",
              description:
                "Aute nostrud minim tempor quis ea non cillum do anim minim nisi in tempor quis.",
              Icon: CodeBracketIcon,
            },
            {
              title: "Dashboard",
              description:
                "Nisi velit sunt ad non do cillum. Occaecat officia eu esse sit excepteur nostrud.",
              Icon: ChartBarIcon,
            },
            {
              title: "Kind support",
              description:
                "Proident eiusmod excepteur eiusmod. Sint anim id enim qui proident id enim qui.",
              Icon: ChatBubbleLeftRightIcon,
            },
            {
              title: "Trusted by people",
              description:
                "Non labore in laborum excepteur officia irure eiusmod et labore id veniam enim.",
              Icon: BuildingOfficeIcon,
            },
          ]}
        />
      </div>
    </section>
  );
}
