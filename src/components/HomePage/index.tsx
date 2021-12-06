import clsx from "clsx";
import { FC } from "react";
import { Row, Col } from "react-bootstrap";

import { useTheme } from "../../hooks/useTheme";
import { Header } from "../Header";
import { Link } from "../Link";

export const HomePage: FC = () => {
  const { theme } = useTheme();
  return (
    <Row className={clsx("px-3 d-flex align-items-center vh-100 g-0", theme)}>
      <Col style={{ marginTop: "-10em" }} lg={{ span: 4, offset: 4 }}>
        <Header>Tom Fischer</Header>
        <p>
          {
            "I'm a Senior Software Engineer who specializes in developing modern web applications."
          }
        </p>
        <div>
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
      </Col>
    </Row>
  );
};
