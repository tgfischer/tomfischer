import { FC } from "react";
import { Row, Col } from "react-bootstrap";

type SectionProps = {
  span?: number;
  offset?: number;
};

export const Section: FC<SectionProps> = ({
  span = 6,
  offset = 3,
  children
}) => (
  <Row className="py-5 g-0">
    <Col xl={{ span, offset }}>{children}</Col>
  </Row>
);
