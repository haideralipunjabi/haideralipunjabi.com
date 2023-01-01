import { Icon } from "../../components/icon";

async function getData() {
  const res = await fetch(process.env.API_URL + "skills");
  return res.json();
}

export default async function Page() {
  const skills: Array<Skill> = await getData();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-foreground-primary">
      <h1 className="my-8 text-4xl md:text-5xl lg:my-24 lg:text-6xl">Skills</h1>
      <div className="mx-auto mb-24 flex w-8/12 flex-wrap items-center justify-center gap-y-24 text-accent-primary">
        {skills.map((skill, idx) => (
          <SkillIcon key={idx} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <div className="flex w-1/2 flex-col gap-y-4 text-center sm:w-1/3 md:w-1/4 lg:w-1/5">
      <Icon
        className="text-5xl transition-transform duration-100 hover:scale-110 sm:text-6xl md:text-7xl lg:text-8xl"
        icon={skill.icon}
      />
      <span className="text-xl text-foreground-primary">{skill.name}</span>
    </div>
  );
}
