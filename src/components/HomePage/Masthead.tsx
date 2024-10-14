import { Link } from "@/components/Link";

export const Masthead = () => (
  <div className="text-center flex flex-col gap-6 container mx-auto">
    <h1 className="text-5xl">Tom Fischer</h1>
    <p className="text-xl">
      I am a Senior Software Developer who specializes in developing modern web
      applications.
    </p>
    <menu className="flex flex-row gap-3 justify-center text-xl">
      <li>
        <Link href="mailto:tgfischer6@gmail.com">Email</Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/tom-fischer-38179946/">
          Linked In
        </Link>
      </li>
      <li>
        <Link href="https://github.com/tgfischer">GitHub</Link>
      </li>
      <li>
        <Link href="https://stackoverflow.com/users/2455765/tfischer">
          Stack Overflow
        </Link>
      </li>
    </menu>
  </div>
);
