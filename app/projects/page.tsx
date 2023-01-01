import { Icon } from "../../components/icon";
import Image from "next/image";
import { download } from "../../lib/download";
import error from "../../public/error.png";
async function getData() {
  const res = await fetch(process.env.API_URL + "projects");
  const data: Array<Project> = await res.json();
  for (const i in data) {
    const project = data[i];
    if (project.image == null) {
      continue;
    }
    const filename =
      Buffer.from(project.name).toString("base64").slice(0, 5) +
      project.image.replace("/media/", "");
    const outfile = "/project_images/" + filename;
    await download(
      process.env.API_URL + project.image.slice(1),
      process.cwd() + "/public" + outfile
    );
    data[i].image = outfile;
  }
  return data;
}

export default async function Page() {
  const projects: Array<Project> = await getData();
  return (
    <div className="flex flex-col items-center justify-center py-24 text-foreground-primary">
      <h1 className="my-8 text-4xl md:text-5xl lg:my-24 lg:text-6xl">
        Projects
      </h1>
      <div className="w-8/12">
        {projects.map((project, idx) => (
          <ProjectEntry key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <div className="my-8 flex flex-col xl:flex-row">
      <div className="relative h-48 w-full rounded-3xl xl:w-1/6">
        {project.image ? (
          <Image
            className="rounded-3xl"
            src={project.image}
            alt={project.name}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            className="rounded-3xl"
            src={error}
            alt={"Error Image"}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div className="w-full p-4 lg:w-5/6">
        <h2 className="text-2xl">
          {project.name} | {project.date}
        </h2>
        <p className="text-justify">{project.description}</p>
        <div className="my-6 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <Tag key={idx} tag={tag.tag} />
          ))}
        </div>
        <div className="my-6 flex flex-wrap gap-2">
          {project.buttons.map((button, idx) => (
            <Button key={idx} button={button} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tag({ tag }: { tag: Tag }) {
  return (
    <span className="text-foreground flex h-9 items-center rounded-full bg-accent-primary px-6 py-2">
      <span className="mr-2">
        <Icon icon={tag.icon} />
      </span>
      <span>{tag.name}</span>
    </span>
  );
}

function Button({ button }: { button: ProjectButton }) {
  return (
    <a
      href={button.link}
      className="text-foreground rounded-xl bg-accent-primary px-6 py-2 text-center hover:bg-accent-secondary"
    >
      <span className="mr-2">
        <Icon icon={button.button.icon} />
      </span>
      <span>{button.button.name}</span>
    </a>
  );
}
