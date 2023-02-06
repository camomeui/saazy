import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Pre({ children, ...props }: Props) {
  if (React.isValidElement(children) && children.type === "code") {
    const { className: language, children: code } = children.props;
    return (
      <CodeBlock code={code} language={language.replace("language-", "")} />
    );
  }
  return <pre {...props}>{children}</pre>;
}
