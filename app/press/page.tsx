import { Icon } from "../../components/icon";
import client from "http";
import fs from "fs";
import Image from "next/image";
import { download } from "../../lib/download";
async function getData() {
  const res = await fetch(process.env.API_URL + "press");
  let data: Array<Press> = await res.json();
  for (let i in data) {
    let press = data[i];
    let filename =
      Buffer.from(press.title).toString("base64").slice(0, 5) +
      press.image.replace("/media/", "");
    let outfile = "/press_images/" + filename;
    await download(
      process.env.API_URL + press.image.slice(1),
      process.cwd() + "/public" + outfile
    );

    data[i].image = outfile;
  }
  return data;
}

export default async function Page() {
  const pressData: Array<Press> = await getData();
  return (
    <div className="flex flex-col items-center justify-center text-foreground-primary py-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl my-8 lg:my-24">Press</h1>
      <div className="w-8/12">
        {pressData.map((press, idx) => (
          <PressEntry key={idx} press={press} />
        ))}
      </div>
    </div>
  );
}

function PressEntry({ press }: { press: Press }) {
  return (
    <a href={press.link} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col xl:flex-row my-8">
        <div className="h-48 w-full xl:w-1/6 relative rounded-3xl">
          <Image
            className="rounded-3xl"
            src={press.image}
            alt={press.title}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-4 w-full lg:w-5/6">
          <h2 className="text-2xl">{press.title}</h2>
          <p className="text-justify">{press.description}</p>
        </div>
      </div>
    </a>
  );
}
