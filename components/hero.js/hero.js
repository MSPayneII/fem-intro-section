import React from "react";
import Link from "next/link";
import ClientList from "./client-list";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.image}></div>
      <section className={classes.content}>
        <h1 className={classes.header}>
          Make <br className={classes.break} />
          remote work
        </h1>
        <p className={classes.body}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Link href="/" className={classes.heroBtn}>
          Learn more
        </Link>
      </section>

      <ClientList />
    </div>
  );
};

export default Hero;
