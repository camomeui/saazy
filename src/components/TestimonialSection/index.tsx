import React from "react";

import Image from "@/components/Image";
import BackgroundDots from "@/components/common/BackgroundDots";
import Heading from "@/components/common/Heading";
import QuoteDoubleSvg from "@/public/icons/quote-double.svg";

import styles from "./styles.module.scss";

type Props = {
  items: TestimonialProps[];
};

export default function TestimonialsSection({ items }: Props) {
  return (
    <section className={styles.container}>
      <Heading
        main="Loved by the smartest people at the tech giant"
        sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className={styles.list}>
        {items.map((item) => (
          <Testimonial key={item.name} {...item} />
        ))}
      </div>
      <BackgroundDots className={styles.dotsUpperLeft} />
      <BackgroundDots className={styles.dotsBottomRight} />
    </section>
  );
}

type TestimonialProps = {
  avatarSrc: string;
  name: string;
  belonging: string;
  content: string;
};

function Testimonial({
  avatarSrc,
  name,
  belonging,
  content,
}: TestimonialProps) {
  return (
    <figure className={styles.item}>
      <div className={styles.item__avatar}>
        <Image src={avatarSrc} fill alt={`Image of ${name}`} />
      </div>
      <div>
        <QuoteDoubleSvg className={styles.item__quoteIcon} />
        <blockquote className={styles.item__content}>{content}</blockquote>
        <figcaption>
          <cite className={styles.item__name}>{name}</cite>
          <cite className={styles.item__belonging}>{belonging}</cite>
        </figcaption>
      </div>
    </figure>
  );
}
