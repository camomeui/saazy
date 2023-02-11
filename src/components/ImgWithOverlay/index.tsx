import React from "react";

import styles from "./styles.module.scss";

type Props = {
  src: string;
  alt: string;
};

export default function ImgWithOverlay({ src, alt }: Props) {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
}
