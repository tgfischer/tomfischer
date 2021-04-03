import clsx from "clsx";
import { FC } from "react";

import { HeaderVariants, HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({
  variant = HeaderVariants.H1,
  className,
  children
}) => <div className={clsx(className, variant)}>{children}</div>;
