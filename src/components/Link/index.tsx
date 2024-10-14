import clsx from "clsx";
import { PropsWithChildren } from "react";

import { ClassNameComponent } from "@/components/types";

export type LinkProps = PropsWithChildren<
  ClassNameComponent & {
    href: string;
  }
>;

export const Link = ({ href, className, children }: LinkProps): JSX.Element => (
  <a
    href={href}
    className={clsx("text-blue-500 hover:text-blue-300", className)}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
