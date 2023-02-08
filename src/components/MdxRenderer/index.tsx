import { Accordion, Message, Button } from "@camome/core";
import { type MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextLink from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

import Breadcrumbs from "@/components/Breadcrumbs";
import ComponentPreview from "@/components/ComponentPreview";
import Image from "@/components/Image";
import clsx from "clsx";

type Props = {
  code: string;
};

const components: MDXComponents = {
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
