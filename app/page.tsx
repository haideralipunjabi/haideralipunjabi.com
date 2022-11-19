import Image from "next/image";
import profile from "../public/profile.webp";
import { Icon } from "../components/icon";

async function getData() {
  const res = await fetch(process.env.API_URL + "socials");
  return res.json();
}

export default async function Page() {
  const socials: Array<Social> = await getData();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 text-foreground-primary w-max mx-auto">
      <Image
        className="rounded-full border border-4 border-accent-primary"
        src={profile}
        alt="Profile Image"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Haider Ali Punjabi
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {" "}
        Software Developer
      </h2>
      <div className="flex justify-around w-full text-2xl">
        {socials.map((social, idx) => (
          <SocialIcon
            key={idx}
            icon={social.icon}
            link={social.link}
            name={social.name}
          />
        ))}
      </div>
    </div>
  );
}

function SocialIcon({
  link,
  icon,
  name,
}: {
  link: string;
  icon: string;
  name: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={name}
    >
      <Icon
        className="text-accent-primary hover:text-accent-secondary text-4xl"
        icon={icon}
      />
    </a>
  );
}
