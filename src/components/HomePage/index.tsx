import { Experience } from "./Experience";
import { Masthead } from "./Masthead";
import { Projects } from "./Projects";

export const HomePage = () => (
  <main className={`
    mx-auto flex max-w-screen-2xl flex-col gap-20 px-5 py-16
    lg:px-32
    xl:px-64
  `}>
    <section>
      <Masthead />
    </section>
    <section>
      <Experience />
    </section>
    <section>
      <Projects />
    </section>
  </main>
);
