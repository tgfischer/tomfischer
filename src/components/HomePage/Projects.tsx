import { FC } from "react";
import { Row, Col } from "react-bootstrap";

import { Header } from "../Header";

import { Project } from "./Project";

export const Projects: FC = () => (
  <div>
    <div className="text-center">
      <Header>Projects</Header>
      <p>Custom websites that I developed for companies and brands.</p>
    </div>
    <Row>
      <Col md={4} sm={6} xs={12}>
        <Project
          name="The Fischers' Wedding"
          year={2021}
          src="/thefischerswedding.PNG"
          link="https://thefischers.wedding"
        >
          <p>
            A website for a RSVPing to our wedding. Developed with{" "}
            <strong>React</strong>, <strong>NextJS</strong>,{" "}
            <strong>Typescript</strong>, <strong>Bootstrap</strong>,{" "}
            <strong>Supabase</strong>, and <strong>OpenStreetMap</strong>.
          </p>
          <p>
            Hosted with <strong>Vercel</strong>.
          </p>
        </Project>
      </Col>
      <Col md={4} sm={6} xs={12}>
        <Project
          name="D's Construction"
          year={2020}
          src="/dsconstruction.PNG"
          link="https://ds.construction"
        >
          <p>
            A website for a local contruction company. Developed with{" "}
            <strong>React</strong>, <strong>Bootstrap</strong>,{" "}
            <strong>NodeJS/Express</strong>, <strong>Python</strong>, and{" "}
            <strong>AWS DynamoDB</strong>.
          </p>
          <p>
            Hosted with <strong>AWS S3</strong>, <strong>AWS Lambda</strong>,
            and <strong>AWS CloudFront</strong>.
          </p>
          <p>
            Microservices managed with <strong>Lerna</strong>.
          </p>
        </Project>
      </Col>
      <Col md={4} sm={6} xs={12}>
        <Project
          name="Megan Shea Dressage"
          year={2016}
          src="/meganshea.PNG"
          link="https://www.megansheadressage.com"
        >
          <p>
            A website for a dressage competitor. Developed with{" "}
            <strong>EJS</strong>, <strong>Semantic UI</strong>,{" "}
            <strong>NodeJS/Express</strong>, and <strong>MongoDB</strong>.
          </p>
          <p>
            Hosted with <strong>Digital Ocean</strong>.
          </p>
        </Project>
      </Col>
    </Row>
  </div>
);
