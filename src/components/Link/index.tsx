import clsx from "clsx";
import { PropsWithChildren } from "react";

import { ClassNameComponent } from "../types";

export type LinkProps = PropsWithChildren<
  ClassNameComponent & {
    href: string;
  }
>;

export const Link = ({ href, className, children }: LinkProps): JSX.Element => (
  <a
    href={href}
    className={clsx("tf-link", className)}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
