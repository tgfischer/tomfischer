import { Experience } from "./Experience";
import { Masthead } from "./Masthead";
import { Projects } from "./Projects";

export const HomePage = () => (
  <main className="py-16 flex flex-col gap-20 xl:px-64 lg:px-32 px-5">
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
