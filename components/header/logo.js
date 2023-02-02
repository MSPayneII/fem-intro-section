import React from "react";
import Image from "next/image";
import Link from "next/link";
import Snap from "../../public/images/logo.svg";
import classes from "./header.module.css";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={Snap} alt="Snap logo" className={classes.logo} />
    </Link>
  );
};

export default Logo;
