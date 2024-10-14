import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type SkillProps = {
  children: ReactNode;
};

export const Skill = ({ children }: SkillProps) => (
  <h5 className="flex items-center text-2xl">
    <FontAwesomeIcon className="me-2" icon={faCheck} />
    {children}
  </h5>
);
