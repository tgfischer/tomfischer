import { PropsWithChildren } from "react";

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
  <a
    href={link}
    rel="noopener noreferrer"
    target="_blank"
    className="dark:bg-zinc-800 hover:scale-105 transition rounded-lg flex flex-col shadow-lg"
  >
    <img src={src} alt={alt} className="rounded-t-lg" />
    <div className="flex flex-col gap-3 h-full">
      <h3 className="text-xl pt-5 px-5">
        <div className="flex justify-between">
          {name}
          <time className="text-zinc-100" dateTime="YYYY">
            {year}
          </time>
        </div>
        {subheader && (
          <small className="italic text-zinc-400">{subheader}</small>
        )}
      </h3>
      <div className="px-5 flex flex-col gap-3">{children}</div>
      <small className="border-t border-zinc-700 p-5 self-end flex-col w-full mt-auto text-zinc-400">
        {link}
      </small>
    </div>
  </a>
);
