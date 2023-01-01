import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="scrollbar relative inset-x-0 bottom-0 -mt-16 h-16 bg-background-primary text-center text-white">
      Made with{" "}
      <FontAwesomeIcon className="text-red-500" icon={["fas", "heart"]} /> by
      Haider Ali Punjabi | © {new Date().getFullYear()}
    </footer>
  );
}
