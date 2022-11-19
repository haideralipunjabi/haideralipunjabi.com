import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-background-primary h-16 -mt-16 relative text-center bottom-0 left-0 right-0 text-white scrollbar">
      Made with{" "}
      <FontAwesomeIcon className="text-red-500" icon={["fas", "heart"]} /> by
      Haider Ali Punjabi | © {new Date().getFullYear()}
    </footer>
  );
}
