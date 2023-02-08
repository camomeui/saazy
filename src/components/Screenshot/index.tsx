import Image, { type ImageProps } from "next/image";
import BrowserFrame from "@/components/BrowserFrame";

import React from "react";
import { useTheme } from "next-themes";

import styles from "./styles.module.scss";

type Props = {
  lightSrc: ImageProps["src"];
  darkSrc: ImageProps["src"];
  alt: string;
  skeltonSize: {
    width: number | string;
    height: number | string;
  };
  url?: string;
};

export default function Screenshot({
  lightSrc,
  darkSrc,
  alt,
  skeltonSize,
  url,
}: Props) {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show skelton to prevent layout shift.
    return <div className={styles.skelton} style={{ ...skeltonSize }} />;
  }

  return (
    <BrowserFrame className={styles.browser} url={url}>
      <Image src={resolvedTheme === "light" ? lightSrc : darkSrc} alt={alt} />
    </BrowserFrame>
  );
}
