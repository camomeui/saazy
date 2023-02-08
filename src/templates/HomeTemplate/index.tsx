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
            avatarSrc: "/images/avatar-1.jpg",
            name: "Anna Smith",
            belonging: "CEO at Somewhere, LLC.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          },
          {
            avatarSrc: "/images/avatar-2.jpg",
            name: "Huguta Masuo",
            belonging: "CEO at Nowhere, Inc.",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          },
          {
            avatarSrc: "/images/avatar-3.jpg",
            name: "John Doe",
            belonging: "CTO at Anywhere, Inc.",
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
              "Amet laborum sint ut magna qui sit esse elit ex sunt velit labore occaecat dolore.",
            features: ["Lorem ipsum", "Dolor sit amet"],
            button: (
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
              "Incididunt proident enim eu culpa qui cillum dolore consectetur esse ea.",
            features: [
              "Lorem ipsum",
              "Dolor sit amet",
              "Consectetur",
              "Adipiscing elit, sed do eiusmod",
            ],
            button: (
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
              "Amet Lorem reprehenderit qui culpa veniam ad culpa mollit do.",
            features: [
              "Lorem ipsum",
              "Dolor sit amet",
              "Consectetur",
              "Adipiscing elit, sed do eiusmod",
              "Ut enim ad minim",
              "Incididunt ut labore",
            ],
            button: (
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
