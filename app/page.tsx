import Image from "next/image";
import profile from "../public/profile.webp";
import { SocialIcon } from "../components/icon";
import ClawWebring from "../components/webring";

async function getData() {
  const res = await fetch(process.env.API_URL + "socials");
  return res.json();
}
async function getMembers() {
  const res = await fetch(
    "https://the-claw-webring.netlify.app/data/members.json"
  );
  return res.json();
}

export default async function Page() {
  const socials: Array<Social> = await getData();
  const clawMembers: Array<Member> = await getMembers();
  return (
    <div className="mx-auto flex min-h-screen w-max flex-col items-center justify-center gap-y-1 text-foreground-primary sm:gap-y-2 md:gap-y-2 lg:gap-y-3">
      <Image
        className="w-1/2 rounded-full border-4 border-accent-primary sm:w-1/2 md:w-2/3 lg:w-3/4"
        src={profile}
        alt="Profile Image"
      />
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Haider Ali Punjabi
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {" "}
          Software Developer
        </h2>
      </div>
      <div className="my-3 grid w-max grid-cols-3 flex-wrap justify-around gap-y-3">
        {socials.map((social, idx) => (
          <SocialIcon
            key={idx}
            icon={social.icon}
            link={social.link}
            name={social.name}
          />
        ))}
      </div>
      <ClawWebring members={clawMembers} />
    </div>
  );
}
