import {
  ChartBarIcon as ChartBarIconOutline,
  CloudIcon as CloudIconOutline,
  CurrencyDollarIcon as CurrencyDollarIconOutline,
  BoltIcon as BoltIconOutline,
} from "@heroicons/react/24/outline";
import {
  ChartBarIcon as ChartBarIconSolid,
  CurrencyDollarIcon as CurrencyDollarIconSolid,
  BoltIcon as BoltIconSolid,
  BuildingOfficeIcon as BuildingOfficeIconSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  CodeBracketIcon as CodeBracketIconSolid,
} from "@heroicons/react/24/solid";
import { Button } from "@camome/core/Button";

import Cta from "@/components/Cta";
import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import PricingSection from "@/components/PricingSection";
import Steps from "@/components/Steps";
import TestimonialsSection from "@/components/TestimonialSection";
import Heading from "@/components/Heading";

import styles from "./styles.module.scss";
import Link from "next/link";

export default function HomeTemplate() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <HeroSection />
          <LogoCloud className={styles.logoCloud} />
        </div>
      </div>
      <section className={styles.steps}>
        <Heading
          main="Only few steps to get things done"
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Steps
          items={[
            {
              title: "This is the first step.",
              description:
                "Lorem ipsum dolor sincit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
              features: ["Supported feature", "Another one"],
              imgSrc: "/images/step-image-1.webp",
              imgAlt: "step 1",
            },
            {
              title: "Second step must be done.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
              features: ["Supported feature", "Another one"],
              imgSrc: "/images/step-image-2.webp",
              imgAlt: "step 2",
            },
            {
              title: "And finally the last one.",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
              features: ["Supported feature", "Another one"],
              imgSrc: "/images/step-image-3.webp",
              imgAlt: "step 3",
            },
          ]}
        />
      </section>
      <FeatureSection
        tabItems={[
          {
            id: 1,
            label: {
              title: "Easy-to-use dashboard",
              Icon: ChartBarIconOutline,
            },
            panel: {
              heading: "Easy-to-use dashboard",
              subheading: "Lorem ipsum",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
              imgSrc: "/images/feature-img-saazy.webp",
              imgAlt: "alt-text",
            },
          },
          {
            id: 2,
            label: {
              title: "Auto sync on cloud",
              Icon: CloudIconOutline,
            },
            panel: {
              heading: "Auto sync on cloud",
              subheading: "Commodo consequat",
              description:
                "Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              imgSrc: "/images/feature-img-saazy.webp",
              imgAlt: "alt-text",
            },
          },
          {
            id: 3,
            label: {
              title: "Affordable cost",
              Icon: CurrencyDollarIconOutline,
            },
            panel: {
              heading: "Affordable cost",
              subheading: "Odio aenean",
              description:
                "Odio aenean sed adipiscing diam donec. Placerat in egestas erat imperdiet sed euismod. Vitae aliquet nec ullamcorper sit amet.",
              imgSrc: "/images/feature-img-saazy.webp",
              imgAlt: "alt-text",
            },
          },
          {
            id: 4,
            label: {
              title: "Lightning fast speed",
              Icon: BoltIconOutline,
            },
            panel: {
              heading: "Lightning fast speed",
              subheading: "Elementum integer",
              description:
                "Elementum integer enim neque volutpat ac tincidunt vitae. Purus sit amet luctus venenatis.",
              imgSrc: "/images/feature-img-saazy.webp",
              imgAlt: "alt-text",
            },
          },
        ]}
        gridItems={[
          {
            title: "Affordable cost",
            description:
              "Reprehenderit adipisicing veniam nulla cillum voluptate excepteur ad. Quis deserunt elit velit cillum.",
            Icon: CurrencyDollarIconSolid,
          },
          {
            title: "Lightning fast speed",
            description:
              "Eu sint exercitation deserunt et nostrud exercitation veniam.",
            Icon: BoltIconSolid,
          },
          {
            title: "Code editor",
            description:
              "Aute nostrud minim tempor quis ea non cillum do anim minim nisi in. Excepteur ut occaecat officia irure sit.",
            Icon: CodeBracketIconSolid,
          },
          {
            title: "Dashboard",
            description:
              "Nisi velit sunt ad non do cillum. Occaecat officia eu irure sunt enim fugiat esse sit nostrud.",
            Icon: ChartBarIconSolid,
          },
          {
            title: "Kind support",
            description:
              "Proident eiusmod adipisicing excepteur. Sint anim id enim excepteur et dolore qui proident.",
            Icon: ChatBubbleLeftRightIconSolid,
          },
          {
            title: "Trusted by companies",
            description:
              "Non labore in irure laborum excepteur officia irure et labore id veniam enim do.",
            Icon: BuildingOfficeIconSolid,
          },
        ]}
        className={styles.features}
      />
      <TestimonialsSection
        items={[
          {
            avatarSrc: "/images/avatar-1.webp",
            name: "Anna Smith",
            belonging: "CEO at Somewhere",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          },
          {
            avatarSrc: "/images/avatar-2.webp",
            name: "Huguta Masuo",
            belonging: "CEO at Nowhere",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          },
        ]}
      />
      <PricingSection
        items={[
          {
            name: "Starter",
            price: "$8",
            period: "month",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            features: ["Lorem ipsum", "dolor sit amet"],
            renderButton: () => (
              <Button component={Link} href="/signup">
                Start free trial
              </Button>
            ),
          },
          {
            name: "Pro",
            price: "$99",
            period: "month",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            features: [
              "Lorem ipsum",
              "dolor sit amet",
              "consectetur",
              "adipiscing elit, sed do eiusmod",
            ],
            renderButton: () => (
              <Button component={Link} href="/signup">
                Start free trial
              </Button>
            ),
            isMostPopular: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            features: [
              "Lorem ipsum",
              "dolor sit amet",
              "consectetur",
              "adipiscing elit, sed do eiusmod",
              "Ut enim ad minim",
              "incididunt ut labore",
            ],
            renderButton: () => (
              <Button component={Link} href="/contact" variant="soft">
                Contact sales
              </Button>
            ),
            isMostPopular: false,
          },
        ]}
      />
      <FaqSection />
      <Cta className={styles.cta} />
    </>
  );
}
