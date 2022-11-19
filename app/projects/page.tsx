import { Icon } from "../../components/icon";
import Image from "next/image";
import fs from "fs";
import client from "http";
import { download } from "../../lib/download";
import error from "../../public/error.png";
async function getData() {
  const res = await fetch(process.env.API_URL + "projects");
  let data: Array<Project> = await res.json();
  for (let i in data) {
    let project = data[i];
    if (project.image == null) {
      continue;
    }
    let filename =
      Buffer.from(project.name).toString("base64").slice(0, 5) +
      project.image.replace("/media/", "");
    let outfile = "/project_images/" + filename;
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
    <div className="flex flex-col items-center justify-center text-foreground-primary py-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl my-8 lg:my-24">
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
    <div className="flex flex-col xl:flex-row my-8">
      <div className="h-48 w-full xl:w-1/6 relative rounded-3xl">
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
      <div className="p-4 w-full lg:w-5/6">
        <h2 className="text-2xl">
          {project.name} | {project.date}
        </h2>
        <p className="text-justify">{project.description}</p>
        <div className="flex gap-2 flex-wrap my-6">
          {project.tags.map((tag, idx) => (
            <Tag key={idx} tag={tag.tag} />
          ))}
        </div>
        <div className="flex gap-2 flex-wrap my-6">
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
    <span className="rounded-full bg-accent-primary text-foreground px-6 py-2 h-9 flex items-center">
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
      className="px-6 py-2 bg-accent-primary hover:bg-accent-secondary text-foreground text-center rounded-xl"
    >
      <span className="mr-2">
        <Icon icon={button.button.icon} />
      </span>
      <span>{button.button.name}</span>
    </a>
  );
}
