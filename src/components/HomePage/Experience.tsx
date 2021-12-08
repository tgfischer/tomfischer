import { FC } from "react";
import { Row, Col } from "react-bootstrap";

import { Header } from "../Header";

import { skills } from "./constants";
import { Skill } from "./Skill";

export const Experience: FC = () => (
  <div>
    <div className="text-center">
      <Header>Experience</Header>
      <p>Technologies that I have experience working with.</p>
    </div>
    <Row className="g-0">
      {skills.map(({ name }) => (
        <Col key={name} className="py-1" md={3} xs={6}>
          <Skill>{name}</Skill>
        </Col>
      ))}
    </Row>
  </div>
);
