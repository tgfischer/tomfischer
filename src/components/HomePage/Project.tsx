import { PropsWithChildren, type JSX } from "react";

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
  children,
}: ProjectProps): JSX.Element => (
  <a
    href={link}
    rel="noopener noreferrer"
    target="_blank"
    className={`
      flex flex-col rounded-lg shadow-lg transition
      hover:scale-105
      dark:bg-zinc-800
    `}
  >
    <img src={src} alt={alt} className="rounded-t-lg" />
    <div className="flex h-full flex-col gap-3">
      <h3 className="px-5 pt-5 text-xl">
        <div className="flex justify-between">
          {name}
          <time className="text-zinc-100" dateTime="YYYY">
            {year}
          </time>
        </div>
        {subheader && (
          <small className="text-zinc-400 italic">{subheader}</small>
        )}
      </h3>
      <div className="flex flex-col gap-3 px-5">{children}</div>
      <small className={`
        mt-auto w-full flex-col self-end border-t border-zinc-700 p-5
        text-zinc-400
      `}>
        {link}
      </small>
    </div>
  </a>
);
