import { PropsWithChildren } from "react";
import { Row, Col } from "react-bootstrap";

type SectionProps = PropsWithChildren<{
  span?: number;
  offset?: number;
}>;

export const Section = ({
  span = 6,
  offset = 3,
  children
}: SectionProps): JSX.Element => (
  <Row as="section" className="py-5 g-0">
    <Col xl={{ span, offset }}>{children}</Col>
  </Row>
);
