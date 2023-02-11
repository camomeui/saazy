import { Accordion, Message, Button } from "@camome/core";
import clsx from "clsx";
import { type MDXComponents } from "mdx/types";
import NextLink from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

import ComponentPreview from "@/components/ComponentPreview";
import Image from "@/components/Image";

type Props = {
  code: string;
};

const components: MDXComponents = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a: ({ href, ref, ...props }) =>
    href ? <NextLink href={href} {...props} /> : null,
  pre: ({ className, ...props }) => (
    <pre className={clsx(className, "no-markup")} {...props} />
  ),
  Image,
  ComponentPreview,
  Accordion,
  Message,
  Button,
};

export default function MdxRenderer({ code }: Props) {
  const MDXContent = useMDXComponent(code);
  return <MDXContent components={components} />;
}
