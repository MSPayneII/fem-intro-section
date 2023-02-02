import React from "react";
import Audiophile from "../../public/images/client-audiophile.svg";
import Databiz from "../../public/images/client-databiz.svg";
import Maker from "../../public/images/client-maker.svg";
import Meet from "../../public/images/client-meet.svg";
import Image from "next/image";
import classes from "./hero.module.css";

const ClientList = () => {
  return (
    <ul className={classes.clients}>
      <li>
        <Image src={Databiz} alt="Databiz name" className={classes.dataBiz} />
      </li>
      <li>
        <Image
          src={Audiophile}
          alt="Audiophile name"
          className={classes.audiophile}
        />
      </li>
      <li>
        <Image src={Meet} alt="Meet name" className={classes.meet} />
      </li>
      <li>
        <Image src={Maker} alt="Maker name" className={classes.maker} />
      </li>
    </ul>
  );
};

export default ClientList;
