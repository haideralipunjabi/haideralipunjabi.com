import Image from "next/image";
import profile from "../public/profile.webp";
import { SocialIcon } from "../components/icon";

export default function Home({ socials }: { socials: Array<Social> }) {
  return (
    <main className="min-h-screen bg-background-secondary">
      <div className="mx-auto flex min-h-screen w-max flex-col items-center justify-center gap-y-1 text-foreground-primary sm:gap-y-2 md:gap-y-3 lg:gap-y-4">
        <Image
          className="w-1/3 rounded-full border-4 border-accent-primary sm:w-2/3 md:w-3/4 lg:w-full"
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
        <div className="my-3 grid w-max grid-cols-3 flex-wrap justify-around gap-y-6">
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
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + "socials");
  const data = await res.json();

  return {
    props: {
      socials: data,
    },
  };
}
