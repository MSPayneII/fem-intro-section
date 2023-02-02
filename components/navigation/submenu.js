import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UpArrow from "../../public/images/icon-arrow-up.svg";
import DownArrow from "../../public/images/icon-arrow-down.svg";
import classes from "./submenu.module.css";

const Submenu = ({ title, subLinks, mainNav }) => {
  const [areLinksShowing, setAreLinksShowing] = useState(false);

  const assignSubmenuClasses = (title, mainNav) => {
    if (!mainNav) {
      return null;
    } else if (mainNav && title === "Features") {
      return `${classes.popOut} ${classes.featuresPopOut}`;
    } else {
      return `${classes.popOut}`;
    }
  };

  return (
    <article className={classes.navSubmenu}>
      <button
        className={classes.navSubmenuBtn}
        onClick={() => setAreLinksShowing(!areLinksShowing)}
      >
        {title}
        {areLinksShowing ? (
          <Image src={UpArrow} alt="arrow pointing up icon" />
        ) : (
          <Image src={DownArrow} alt="arrow pointing down icon" />
        )}
      </button>

      {areLinksShowing && (
        <ul className={assignSubmenuClasses(title, mainNav)}>
          {subLinks.map((link, index) => {
            const { icon, name, url } = link;
            return (
              <li key={index} className={classes.subMenuItem}>
                <Link href={url} className={classes.navLink}>
                  {icon && (
                    <img src={icon} alt="" className={classes.navLinkIcon} />
                  )}
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
};

export default Submenu;
