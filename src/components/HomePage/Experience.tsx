import { skills } from "./constants";
import { Skill } from "./Skill";

export const Experience = () => (
  <div className="flex flex-col gap-8">
    <div className="text-center">
      <h2 className="text-3xl">Experience</h2>
      <p className="text-xl">
        Technologies that I have experience working with.
      </p>
    </div>
    <ul className="grid grid-cols-4 gap-4">
      {skills.map(({ name }) => (
        <li key={name}>
          <Skill>{name}</Skill>
        </li>
      ))}
    </ul>
  </div>
);
