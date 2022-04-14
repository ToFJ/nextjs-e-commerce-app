import React from "react";
import Image from "next/image";
import heroImg from "../images/1hero.png";

import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.heroImg} src={heroImg} width={"1920px"} height={"850px"} alt="Hero image" />
        <div>
          <h1 className={styles.heroText}>
            <span className={styles.heroTextSpan}> Tests </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
