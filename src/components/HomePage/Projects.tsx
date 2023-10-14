import { Row, Col, Container } from "react-bootstrap";

import { Header } from "../Header";

import { Project } from "./Project";

export const Projects = () => (
  <div>
    <div className="text-center">
      <Header>Personal Projects</Header>
      <p>Custom websites that I developed for companies and brands.</p>
    </div>
    <Container className="d-flex flex-column gap-4">
      <Row className="row-gap-3">
        <Col>
          <Project
            name="D's Construction"
            subheader="Version 2"
            year={2023}
            src="/dsconstruction2.png"
            alt="Screenshot of D's Construction's website"
            link="https://ds.construction"
          >
            <p>A website for a local contruction company.</p>
            <p>
              Developed with <strong>Typescript</strong>, <strong>React</strong>
              , <strong>NextJS</strong>, <strong>Mantine</strong>,{" "}
              <strong>Supabase</strong>, <strong>PostgreSQL</strong>, and{" "}
              <strong>AWS SES</strong>.
            </p>
            <p>
              Hosted with <strong>Vercel</strong>, and <strong>AWS S3</strong>.
            </p>
          </Project>
        </Col>
        <Col>
          <Project
            name="The Fischers' Wedding"
            year={2021}
            src="/thefischerswedding.PNG"
            alt="Screenshot of the Fischers' Wedding website"
            link="https://github.com/tgfischer/The-Fischers-Wedding"
          >
            <p>
              A website for managing wedding reservations, table assignments,
              meal restrictions, gifts, and reception songs.
            </p>
            <p>
              Developed with <strong>Typescript</strong>, <strong>React</strong>
              , <strong>NextJS</strong>, <strong>Bootstrap</strong>,{" "}
              <strong>Supabase</strong>, <strong>PostgreSQL</strong>, and{" "}
              <strong>OpenStreetMap</strong>.
            </p>
            <p>
              Hosted with <strong>Vercel</strong>.
            </p>
          </Project>
        </Col>
      </Row>
      <Row className="row-gap-3">
        <Col>
          <Project
            name="D's Construction"
            subheader="Version 1"
            year={2020}
            src="/dsconstruction.PNG"
            alt="Screenshot of D's Construction's website"
            link="https://github.com/tgfischer/dsconstruction"
          >
            <p>A website for a local contruction company.</p>
            <p>
              Developed with <strong>React</strong>, <strong>Javascript</strong>
              , <strong>Bootstrap</strong>, <strong>NodeJS/Express</strong>,{" "}
              <strong>Python</strong>, <strong>AWS SES</strong>, and{" "}
              <strong>AWS DynamoDB</strong>.
            </p>
            <p>
              Hosted with <strong>AWS S3</strong>, <strong>AWS Lambda</strong>,
              and <strong>AWS CloudFront</strong>.
            </p>
            <p>
              Microservices managed with <strong>Lerna</strong> and{" "}
              <strong>Serverless Framework</strong>.
            </p>
          </Project>
        </Col>
        <Col>
          <Project
            name="Megan Shea Dressage"
            year={2016}
            src="/meganshea.PNG"
            alt="Screenshot of Megan Shea's website"
            link="https://github.com/tgfischer/Megan-Shea"
          >
            <p>A website for a dressage competitor.</p>{" "}
            <p>
              Developed with <strong>Javascript</strong>, <strong>EJS</strong>,{" "}
              <strong>Semantic UI</strong>, <strong>NodeJS/Express</strong>, and{" "}
              <strong>MongoDB</strong>.
            </p>
            <p>
              Hosted with <strong>Digital Ocean</strong>.
            </p>
          </Project>
        </Col>
      </Row>
    </Container>
  </div>
);
