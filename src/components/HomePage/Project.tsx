import { PropsWithChildren } from "react";
import { Card } from "react-bootstrap";

type ProjectProps = PropsWithChildren<{
  name: string;
  year: number;
  src: string;
  alt: string;
  link: string;
}>;

export const Project = ({
  name,
  year,
  src,
  alt,
  link,
  children
}: ProjectProps): JSX.Element => (
  <Card
    className="mb-3"
    as="a"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
    bg="dark"
  >
    <Card.Img variant="top" src={src} alt={alt} />
    <Card.Body>
      <Card.Title className="d-flex justify-content-between pb-3">
        {name}
        <small className="text-muted">
          <time dateTime="YYYY">{year}</time>
        </small>
      </Card.Title>
      {children}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{link}</small>
    </Card.Footer>
  </Card>
);
