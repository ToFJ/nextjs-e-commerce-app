import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../images/1hero.png";

import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image className={styles.heroImg} src={heroImg} width={"1920px"} height={"850px"} alt="Hero image" />
        </div>
        <div>
          <section className={styles.heroText}>
            <h3 className={styles.hero1}>Enjoy Summer {new Date().getUTCFullYear()}</h3>
            <h3 className={styles.hero2}>#newarrivals</h3>
            <h3 className={styles.hero3}>We make your styles</h3>
            <Link href="/">Explore now</Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
