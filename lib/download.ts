import fs from "fs";
export const download = async function (
  uri: string,
  filename: string
) {
  const response = await fetch(uri);
  const buffer = await response.arrayBuffer();
  fs.appendFileSync(filename, Buffer.from(buffer));
};
