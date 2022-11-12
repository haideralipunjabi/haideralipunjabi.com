import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Section from "../components/section";
import profileImg from "../public/profile.webp";
const SUBTITLES = [
  "Developer",
  "Geek",
  "Open Source Enthusiast",
  "Undergrad Student",
];

export default function Main({ socials, navbarEvent }) {
  return (
    <Section id="home" navbarEvent={navbarEvent}>
      <div className="container is-flex is-flex-direction-column is-align-content-center is-justify-content-center">
        <Image
          className="mx-auto my-2"
          style={{ borderRadius: "999px" }}
          src={profileImg}
          height={256}
          width={256}
        />
        <h1 className="title is-size-1 has-text-centered">
          Haider Ali Punjabi
        </h1>
        <h2 className="subtitle is-size-2 has-text-centered is-primary">
          Developer
        </h2>
        <div className="container is-flex is-flex-wrap-wrap	 is-justify-content-center ">
          {socials.map((social, idx) => (
            <a
              href={social.metadata.link}
              alt={social.title}
              target="_blank"
              rel="noopener noreferrer me"
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
