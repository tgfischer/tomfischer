import clsx from "clsx";
import { FC } from "react";

import { LinkProps } from "./types";

export const Link: FC<LinkProps> = ({ href, className, children }) => (
  <a
    href={href}
    className={clsx("tf-link", className)}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
