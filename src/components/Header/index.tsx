import { PropsWithChildren } from "react";

export type HeaderProps = PropsWithChildren<{
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}>;

export const Header = ({
  variant: Header = "h1",
  className,
  children
}: HeaderProps): JSX.Element => (
  <Header className={className}>{children}</Header>
);
