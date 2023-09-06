import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const commonStyles = "font-bold py-4";
const headingStyles: { [key: number]: string } = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

const Heading: React.FC<HeadingProps> = ({ children, level }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const styles = `${commonStyles} ${headingStyles[level]}`;

  return <Tag className={styles}>{children}</Tag>;
};

const Headings = {
  H1: (props: Omit<HeadingProps, "level">) => <Heading level={1} {...props} />,
  H2: (props: Omit<HeadingProps, "level">) => <Heading level={2} {...props} />,
  H3: (props: Omit<HeadingProps, "level">) => <Heading level={3} {...props} />,
  H4: (props: Omit<HeadingProps, "level">) => <Heading level={4} {...props} />,
  H5: (props: Omit<HeadingProps, "level">) => <Heading level={5} {...props} />,
  H6: (props: Omit<HeadingProps, "level">) => <Heading level={6} {...props} />,
};

export default Headings;
