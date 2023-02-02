import React from "react";
import { useGlobalContext } from "../../context/context";
import CloseBtn from "../../public/images/icon-close-menu.svg";
import Image from "next/image";
import MobileNavigation from "../navigation/mobile-navigation";
import LoginBtn from "../ui/login-btn";
import RegisterBtn from "../ui/register-btn";
import classes from "./sidebar.module.css";

const sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <>
      <div
        className={
          isSidebarOpen
            ? `${classes.overlay} ${classes.show}`
            : `${classes.overlay}`
        }
      ></div>
      <div
        className={
          isSidebarOpen
            ? `${classes.sidebar} ${classes.showSidebar}`
            : `${classes.sidebar}`
        }
      >
        <div className={classes.sidebarContent}>
          <button className={classes.closeBtn} onClick={closeSidebar}>
            <Image src={CloseBtn} alt="close sidebar icon" />
          </button>
          <MobileNavigation />
          <div className={classes.actionBtnContainer}>
            <LoginBtn />
            <RegisterBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar;
