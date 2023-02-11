import { Button } from "@camome/core/Button";
import { CalculatorIcon, WindowIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import BrowserFrame from "@/components/BrowserFrame";
import Cta from "@/components/Cta";
import FaqSection from "@/components/FaqSection";
import FeatureMoreSection from "@/components/FeatureMoreSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import Screenshot from "@/components/Screenshot";
import TestimonialsSection from "@/components/TestimonialSection";
import ScreenshotDarkImg from "@/public/images/camome-screenshot-dark.webp";
import ScreenshotLightImg from "@/public/images/camome-screenshot-light.webp";
import CounterCodeImg from "@/public/images/counter-code.png";
import WallpaperImg from "@/public/images/wallpaper.jpg";

import styles from "./styles.module.scss";

export default function HomeTemplate() {
  return (
    <>
      <Head>
        {/* Prefetch the hero images because it depends on the
            current theme which is only available on the browser (server doesn't know). */}
        <link href={ScreenshotLightImg.src} rel="prefetch" />
        <link href={ScreenshotDarkImg.src} rel="prefetch" />
      </Head>
      <div className={styles.hero}>
        <div className={styles.hero__container}>
          <HeroSection />
        </div>
      </div>
      <div className={styles.screenshot}>
        <Screenshot
          lightSrc={ScreenshotLightImg}
          darkSrc={ScreenshotDarkImg}
          alt="Screenshot"
          skeltonSize={{
            height: ScreenshotLightImg.height,
            width: "100%",
          }}
          url="camome.net"
        />
      </div>
      <FeatureSection
        heading={{
          icon: <CalculatorIcon />,
          title: "It will never miss your click.",
          tagline: "Counter",
        }}
        listItems={[
          "Do ea laborum sint et deserunt cupidatat eu incididunt eu labore occaecat laboris reprehenderit exercitation.",
          "Nulla commodo Lorem est id culpa consequat aliqua qui voluptate ea adipisicing quis ad.",
          "Ea magna fugiat nostrud eiusmod deserunt labore velit laborum non esse labore sunt.",
        ]}
        buttonText="Learn more about counter"
        visual={<Image src={CounterCodeImg} alt="React code of counter" />}
        className={styles.feature1}
      />
      <FeatureSection
        heading={{
          icon: <WindowIcon />,
          title: "Like the windows.",
          tagline: "Wallpaper",
        }}
        listItems={[
          "Do ea laborum sint et deserunt cupidatat eu incididunt eu labore occaecat laboris reprehenderit exercitation.",
          "Nulla commodo Lorem est id culpa consequat aliqua qui voluptate ea adipisicing quis ad.",
          "Ea magna fugiat nostrud eiusmod deserunt labore velit laborum non esse labore sunt.",
        ]}
        buttonText="Learn more about wallpaper"
        visual={
          <BrowserFrame>
            <Image
              src={WallpaperImg}
              alt="Beautiful abstract wallpaper like the default of Windows 11"
            />
          </BrowserFrame>
        }
        reversed
        className={styles.feature2}
      />
      <FeatureMoreSection className={styles.moreFeatures} />
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
      <Cta />
    </>
  );
}
