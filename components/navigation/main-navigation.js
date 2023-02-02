import React from "react";
import Link from "next/link";
import { navItems } from "../../lib/nav-items";
import classes from "./main-navigation.module.css";
import Submenu from "./submenu";

const MainNavigation = () => {
  return (
    <nav className={classes.MainNavigation}>
      <ul className={classes.navList}>
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
              <Submenu title={title} subLinks={subLinks} mainNav={true} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNavigation;
