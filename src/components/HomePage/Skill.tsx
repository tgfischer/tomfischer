import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type SkillProps = {
  children: ReactNode;
};

export const Skill = ({ children }: SkillProps) => (
  <p className="h5 d-flex align-items-center">
    <FontAwesomeIcon className="me-2" icon={faCheck} />
    {children}
  </p>
);
