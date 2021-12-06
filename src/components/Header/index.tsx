import clsx from "clsx";
import { FC } from "react";

import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({
  variant = "h1",
  className,
  children
}) => <div className={clsx(className, variant)}>{children}</div>;
