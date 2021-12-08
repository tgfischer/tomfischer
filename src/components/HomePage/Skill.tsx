import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export const Skill: FC = ({ children }) => (
  <p className="h5 d-flex align-items-center">
    <FontAwesomeIcon className="me-2" icon={faCheck} />
    {children}
  </p>
);
