import styles from "./navbar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles)
export default function Navbar({active}) {
  const [menuOpened, setMenuOpened] = useState(false);
  const LINKS = {
    "Home": "home",
    "Skills":"skills",
    "Projects": "projects",
    "Blog Posts": "blogs",
    "Press": "press" 
  }
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a role="button" className={classNames("navbar-burger",{"is-active":menuOpened})} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={()=>setMenuOpened(!menuOpened)}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" className={classNames("navbar-menu",{"is-active":menuOpened})}>
      <div className="navbar-start">
        {
          Object.entries(LINKS).map(link=>
            <a key={link[1]} alt={link[0]} href={`/#${link[1]}`} className={cx("navbar-item",{highlight:(active===link[1])})}>
              {link[0]}
            </a>
          )
        }
      </div>
      <div className="navbar-end">
        <a href="/links" alt="Links" className="navbar-item">
          Links
        </a>
        <a href="mailto:me@haideralipunjabi.com" alt="Contact" target="_blank" rel="noopener noreferrer" className="navbar-item">
          Contact
        </a>
      </div>
    </div>
  </nav>
  );
}

