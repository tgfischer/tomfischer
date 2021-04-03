import { FC } from "react";
import { Row, Col } from "react-bootstrap";

import { Header } from "../Header";

export const HomePage: FC = () => (
  <Row className="px-3 d-flex align-items-center vh-100" noGutters>
    <Col style={{ marginTop: "-10em" }} lg={{ span: 4, offset: 4 }}>
      <Header>Tom Fischer</Header>
      <p>
        {
          "I'm a Senior Software Engineer who specializes in developing modern web applications"
        }
      </p>
      <div>
        <a
          href="mailto:tgfischer@gmail.com"
          className="mr-3"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/tom-fischer-38179946/"
          className="mr-3"
          target="_blank"
          rel="noreferrer"
        >
          Linked In
        </a>
        <a
          href="https://github.com/tgfischer"
          className="mr-3"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://stackoverflow.com/users/2455765/tfischer"
          className="mr-3"
          target="_blank"
          rel="noreferrer"
        >
          Stack Overflow
        </a>
      </div>
    </Col>
  </Row>
);
