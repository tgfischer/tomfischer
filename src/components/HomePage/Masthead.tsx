import { FC } from "react";

import { Header } from "../Header";
import { Link } from "../Link";

export const Masthead: FC = () => (
  <div className="text-center py-5">
    <Header>Tom Fischer</Header>
    <p>
      I am a Senior Software Engineer who specializes in developing modern web
      applications.
    </p>

    <Link href="mailto:tgfischer6@gmail.com" className="me-3">
      Email
    </Link>
    <Link
      href="https://www.linkedin.com/in/tom-fischer-38179946/"
      className="me-3"
    >
      Linked In
    </Link>
    <Link href="https://github.com/tgfischer" className="me-3">
      GitHub
    </Link>
    <Link href="https://stackoverflow.com/users/2455765/tfischer">
      Stack Overflow
    </Link>
  </div>
);
