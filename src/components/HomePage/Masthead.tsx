import { FC } from "react";

import { Header } from "../Header";
import { Link } from "../Link";

export const Masthead: FC = () => (
  <div className="d-flex flex-column text-center py-5">
    <Header>Tom Fischer</Header>
    <p>
      I am a Senior Software Engineer who specializes in developing modern web
      applications.
    </p>

    <menu className="d-flex flex-row align-self-center">
      <li>
        <Link href="mailto:tgfischer6@gmail.com" className="me-3">
          Email
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/tom-fischer-38179946/"
          className="me-3"
        >
          Linked In
        </Link>
      </li>
      <li>
        <Link href="https://github.com/tgfischer" className="me-3">
          GitHub
        </Link>
      </li>
      <li>
        <Link href="https://stackoverflow.com/users/2455765/tfischer">
          Stack Overflow
        </Link>
      </li>
    </menu>
  </div>
);
