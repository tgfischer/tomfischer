import { PropsWithChildren } from "react";

import { ClassNameComponent } from "@/components/types";

export type LinkProps = PropsWithChildren<
  ClassNameComponent & { href: string }
>;

export const Link = ({ href, children }: LinkProps): JSX.Element => (
  <a
    href={href}
    className="text-blue-500 hover:text-blue-300 hover:underline"
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
