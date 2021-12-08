import { FC } from "react";
import { Card } from "react-bootstrap";

type ProjectProps = {
  name: string;
  year: number;
  src: string;
  link: string;
};

export const Project: FC<ProjectProps> = ({
  name,
  year,
  src,
  link,
  children
}) => (
  <Card
    className="mb-3"
    as="a"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
    bg="dark"
  >
    <Card.Img variant="top" src={src} />
    <Card.Body>
      <Card.Title className="d-flex justify-content-between pb-3">
        {name} <small className="text-muted">{year}</small>
      </Card.Title>
      <Card.Text>{children}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{link}</small>
    </Card.Footer>
  </Card>
);
