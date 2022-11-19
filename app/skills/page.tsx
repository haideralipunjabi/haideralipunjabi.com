import { Icon } from "../../components/icon";

async function getData() {
  const res = await fetch(process.env.API_URL + "skills");
  return res.json();
}

export default async function Page() {
  const skills: Array<Skill> = await getData();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-foreground-primary">
      <h1 className="text-4xl md:text-5xl lg:text-6xl my-8 lg:my-24">Skills</h1>
      <div className="flex justify-center gap-y-24 items-center text-accent-primary flex-wrap mx-auto mb-24 w-8/12">
        {skills.map((skill, idx) => (
          <SkillIcon key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col text-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 gap-y-4">
      <Icon
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        icon={skill.icon}
      />
      <span className="text-xl text-foreground-primary">{skill.name}</span>
    </div>
  );
}
