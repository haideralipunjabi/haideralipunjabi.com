import Navbar from "../components/navbar";
import Head from "./head";
import "./globals.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../components/footer";
import { faLenster } from "../components/custom_icons/lenster";
config.autoAddCss = false;

library.add(fas, fab, far, faLenster);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Navbar />
        <main className="min-h-screen bg-background-secondary">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
