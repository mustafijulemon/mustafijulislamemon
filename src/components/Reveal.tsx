import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** A simple wrapper retained for the section components; content stays immediately visible. */
export default function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
