import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Section from "../components/section";
import TextLoop from "react-text-loop";

const SUBTITLES = [
  "Developer",
  "Geek",
  "Open Source Enthusiast",
  "Undergrad Student",
];

export default function Main({ socials,navbarEvent }) {
  return (
    <Section id="home" navbarEvent={navbarEvent}>
      <div className="container is-flex is-flex-direction-column is-align-content-center is-justify-content-center">
        <figure className="image has-text-centered mb-2">
        <picutre>
                <source srcSet="/profile.webp" type="image/webp"/>
                <source srcSet="/profile.png" type="image/png"/>
                <img style={{width: "256px",height: "256px",marginRight: "auto",marginLeft: "auto"}} src="/profile.png" alt="Picture of Author" className="is-rounded"/>
        </picutre>
        </figure>
        <h1 className="title is-size-1 has-text-centered">
          Haider Ali Punjabi
        </h1>
        <h2 className="subtitle is-size-2 has-text-centered is-primary">
          Developer
        </h2>
        <div className="container is-flex is-flex-wrap-wrap	 is-justify-content-center ">
          {socials.map((social,idx) => (
            <a
              href={social.metadata.link}
              alt={social.title}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
              key={idx}
            >
              <span className="is-size-2">
                <FontAwesomeIcon icon={social.metadata.icons.split(",")} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
