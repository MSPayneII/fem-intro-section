import React from "react";
import { useGlobalContext } from "../../context/context";
import { navItems } from "../../lib/nav-items";
import Link from "next/link";

import classes from "./mobile-navigation.module.css";
import Submenu from "./submenu";

const MobileNavigation = () => {
  return (
    <nav className={classes.MobileNavigation}>
      <ul>
        {navItems.map((navItem) => {
          const { id, title, subLinks, url } = navItem;

          if (!subLinks) {
            return (
              <li key={id} className={classes.listItem}>
                <Link href={url} className={classes.navLink}>
                  {title}
                </Link>
              </li>
            );
          }

          return (
            <li key={id} className={classes.listItem}>
              <Submenu title={title} subLinks={subLinks} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
