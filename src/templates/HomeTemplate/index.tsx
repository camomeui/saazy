import { Button } from "@camome/core/Button";

import Cta from "@/components/Cta";
import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialSection";

import styles from "./styles.module.scss";
import Link from "next/link";

export default function HomeTemplate() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <HeroSection />
        </div>
      </div>
      <FeatureSection className={styles.features} />
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
