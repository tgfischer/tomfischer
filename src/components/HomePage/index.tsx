import { Container } from "react-bootstrap";

import { Section } from "../Section";

import { Experience } from "./Experience";
import { Masthead } from "./Masthead";
import { Projects } from "./Projects";

export const HomePage = () => (
  <Container as="main" className="px-3" fluid>
    <Section>
      <Masthead />
    </Section>
    <Section span={8} offset={2}>
      <Experience />
    </Section>
    <Section span={8} offset={2}>
      <Projects />
    </Section>
  </Container>
);
