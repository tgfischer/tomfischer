import { ReactNode } from "react";
import { CheckIcon } from "./CheckIcon";

type SkillProps = {
  children: ReactNode;
};

export const Skill = ({ children }: SkillProps) => (
  <h5 className="flex items-center gap-2 text-2xl">
    <CheckIcon />
    {children}
  </h5>
);
