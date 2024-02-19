interface Social {
  id: number;
  link: string;
  name: string;
  icon: string;
}
interface Skill {
  id: number;
  name: string;
  icon: string;
}

interface Button {
  id: number;
  name: string;
  icon: string;
}

interface ProjectButton {
  id: number;
  link: string;
  button: Button;
}

interface Tag {
  id: number;
  name: string;
  icon: string;
}

interface ProjectTag {
  id: number;
  tag: Tag;
}

interface Project {
  name: string;
  description: string;
  url?: string;
  github_link?: string;
  buttons: Array<ProjectButton>;
  tags: Array<ProjectTag>;
  image: string;
  date: string;
}

interface Press {
  id: number;
  link: string;
  title: string;
  description: string;
  site: string;
  image: string;
}

interface Member {
  name: string;
  feed: string | null;
  url: string;
}