import { FC } from "react";
import { Container } from "react-bootstrap";

import { Section } from "../Section";

import { Experience } from "./Experience";
import { Masthead } from "./Masthead";
import { Projects } from "./Projects";

export const HomePage: FC = () => (
  <Container as="main" className="px-3" fluid>
    <Section>
      <Masthead />
    </Section>
    <Section>
      <Experience />
    </Section>
    <Section span={8} offset={2}>
      <Projects />
    </Section>
  </Container>
);
