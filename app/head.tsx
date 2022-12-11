import { NEXT_SEO_DEFAULT } from "../next-seo.config";
import { NextSeo } from "next-seo";

export default function Head() {
  return (
    <>
      <NextSeo useAppDir={true} {...NEXT_SEO_DEFAULT} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="viewport" content="width=device-width"></meta>
      <script
        data-goatcounter="https://haideralipunjabi.goatcounter.com/count"
        async
        src="https://gc.zgo.at/count.js"
      ></script>
    </>
  );
}
