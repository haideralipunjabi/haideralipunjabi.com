import Navbar from "../components/navbar";
import { getBlogData, getData, getGithubData } from "../lib/api";
import Main from "../sections/main";
import Projects from "../sections/projects";
import Skills from "../sections/skills";
import Blog from "../sections/blog";
import Press from "../sections/press";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
export default function Home(props) {
  const { socials, skills, projects, githubData, blogData, pressData } = props;
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <Navbar active={activeSection} />
      <Main socials={socials} navbarEvent={setActiveSection} />
      <Skills skills={skills} navbarEvent={setActiveSection} />
      <Projects
        projects={projects}
        githubData={githubData}
        navbarEvent={setActiveSection}
      />
      <Blog blogData={blogData} navbarEvent={setActiveSection} />
      <Press pressData={pressData} navbarEvent={setActiveSection} />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const socials = (await getData("socials")) || [];
  const skills = (await getData("skills")) || [];
  const projects = (await getData("projects")) || [];
  const pressData = (await getData("inpress")) || [];
  const githubData = (await getGithubData()) || {};
  // const githubData = {};
  const blogData = (await getBlogData()) || [];

  return {
    props: {
      socials,
      skills,
      projects,
      githubData,
      blogData,
      pressData,
    },
  };
}
