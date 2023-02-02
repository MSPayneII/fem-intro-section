import React from "react";
import Image from "next/image";
import RegisterBtn from "../ui/register-btn";
import Logo from "./logo";
import { useGlobalContext } from "../../context/context";
import MainNavigation from "../navigation/main-navigation";
import LoginBtn from "../ui/login-btn";
import MenuIcon from "../../public/images/icon-menu.svg";
import classes from "./header.module.css";
import Sidebar from "../sidebar/sidebar";

const Header = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <header className={classes.header}>
      <div className={classes.headerMain}>
        <Logo />
        <MainNavigation />
        <button className={classes.navToggle} onClick={openSidebar}>
          <Image src={MenuIcon} alt="menu icon" />
        </button>
      </div>
      <div className={classes.actionBtnContainer}>
        <LoginBtn />
        <RegisterBtn />
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;
