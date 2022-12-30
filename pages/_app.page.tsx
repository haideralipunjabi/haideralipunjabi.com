import "../styles/globals.css";
import type { AppProps } from "next/app";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faLenster } from "../components/custom_icons/lenster";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";
config.autoAddCss = false;

library.add(fas, fab, far, faLenster);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
      </Head>
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
