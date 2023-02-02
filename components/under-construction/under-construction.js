import React from "react";
import Link from "next/link";
import Image from "next/image";
import ConstructionImg from "../../public/images/undraw_under_construction_-46-pa.svg";
import classes from "./under-construction.module.css";

const UnderConstruction = () => {
  return (
    <>
      <div className={classes.content}>
        <Image
          src={ConstructionImg}
          alt="Page content not available"
          className={classes.img}
        />
        <h1 className={classes.header}>This page does not exist</h1>

        <Link href="/" className={classes.redirectBtn}>
          Go to the Homepage
        </Link>
      </div>
    </>
  );
};

export default UnderConstruction;
