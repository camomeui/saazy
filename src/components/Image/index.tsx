import NextImage, { type ImageProps as NextImageProps } from "next/image";

export type ImageProps = NextImageProps;

export default function Image(props: ImageProps) {
  return <NextImage {...props} />;
}
