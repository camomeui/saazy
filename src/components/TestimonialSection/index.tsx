import { Avatar } from "@camome/core/Avatar";
import { MegaphoneIcon } from "@heroicons/react/24/outline";

import BackgroundDots from "@/components/BackgroundDots";
import Heading from "@/components/Heading";

import styles from "./styles.module.scss";


type Props = {
  items: TestimonialProps[];
};

export default function TestimonialsSection({ items }: Props) {
  return (
    <section className={styles.container}>
      <Heading
        icon={<MegaphoneIcon />}
        title="So many people love it."
        tagline="Testimonials"
        className={styles.heading}
      />
      <div className={styles.list}>
        <div className={styles.list__inner}>
          {items.map((item) => (
            <Testimonial key={item.name} {...item} />
          ))}
        </div>
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
      <blockquote className={styles.item__content}>{content}</blockquote>
      <Avatar src={avatarSrc} />
      <figcaption>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__belonging}>{belonging}</div>
      </figcaption>
    </figure>
  );
}
