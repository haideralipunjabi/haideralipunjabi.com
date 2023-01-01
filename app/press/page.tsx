import Image from "next/image";
import { download } from "../../lib/download";
async function getData() {
  const res = await fetch(process.env.API_URL + "press");
  const data: Array<Press> = await res.json();
  for (const i in data) {
    const press = data[i];
    const filename =
      Buffer.from(press.title).toString("base64").slice(0, 5) +
      press.image.replace("/media/", "");
    const outfile = "/press_images/" + filename;
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
    <div className="flex flex-col items-center justify-center py-24 text-foreground-primary">
      <h1 className="my-8 text-4xl md:text-5xl lg:my-24 lg:text-6xl">Press</h1>
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
      <div className="my-8 flex flex-col xl:flex-row">
        <div className="relative h-48 w-full rounded-3xl xl:w-1/6">
          <Image
            className="rounded-3xl"
            src={press.image}
            alt={press.title}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full p-4 lg:w-5/6">
          <h2 className="text-2xl">{press.title}</h2>
          <p className="text-justify">{press.description}</p>
        </div>
      </div>
    </a>
  );
}
