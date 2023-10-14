import { PropsWithChildren } from "react";
import { Card } from "react-bootstrap";

type ProjectProps = PropsWithChildren<{
  name: string;
  subheader?: string;
  year: number;
  src: string;
  alt: string;
  link: string;
}>;

export const Project = ({
  name,
  subheader,
  year,
  src,
  alt,
  link,
  children
}: ProjectProps): JSX.Element => (
  <Card as="a" href={link} rel="noopener noreferrer" target="_blank" bg="dark">
    <Card.Img variant="top" src={src} alt={alt} />
    <Card.Body className="d-flex flex-column gap-3">
      <Card.Title>
        <div className="d-flex justify-content-between">
          {name}
          <small className="text-muted">
            <time dateTime="YYYY">{year}</time>
          </small>
        </div>
        {subheader && (
          <small className="text-muted fst-italic">{subheader}</small>
        )}
      </Card.Title>
      {children}
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{link}</small>
    </Card.Footer>
  </Card>
);
