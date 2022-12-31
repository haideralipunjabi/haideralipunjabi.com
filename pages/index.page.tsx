import Image from "next/image";
import profile from "../public/profile.webp";
import { SocialIcon } from "../components/icon";
import { GetStaticPropsContext } from "next";

export default function Home({ socials }: { socials: Array<Social> }) {
  return (
    <main className="min-h-screen bg-background-secondary">
      <div className="flex flex-col justify-center items-center min-h-screen gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 text-foreground-primary w-max mx-auto">
        <Image
          className="rounded-full border border-4 border-accent-primary w-1/2 sm:w-2/3 md:w-3/4 lg:w-full"
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
    </main>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const res = await fetch(process.env.API_URL + "socials");
  const data = await res.json();

  return {
    props: {
      socials: data,
    },
  };
}
