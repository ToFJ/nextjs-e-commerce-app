import Image from "next/image";
import Link from "next/link";
import malefashion from "../public/malefashion.png";
import femalefashion from "../public/femalefashion.png";
import accbanner from "../public/accbanner.png";

import styles from "../styles/Index.module.css";

import Hero from "../components/Hero";
// import DealCountdown from "../components/DealCountdown";

import { useEffect, useState } from "react";
import img from "../public/dealgirl.png";

import dealStyles from "../styles/DealCountdown.module.css";

export default function Home() {
  const [days, setDays] = useState(new Date().getDate());
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance =
        new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3).getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <Image src={malefashion} width="600px" height="600px" alt="man in suite" />
            <Link href="/">Shop for Males</Link>
          </div>
          <div>
            <Image src={femalefashion} width="600px" height="600px" alt="woman in a dress" />
            <Link href="/">Shop for Females</Link>
          </div>
          <div>
            <Image src={accbanner} width="600px" height="600px" alt="sunglasses" />
            <Link href="/">Accessories</Link>
          </div>
        </div>
      </section>
      <section className={dealStyles.section}>
        <div className={dealStyles.container}>
          <div className={dealStyles.image}>
            <Image src={img} width="585px" height="500px" alt="female looking at you" />
          </div>
          <div className={dealStyles.wrapper}>
            <h2 className={dealStyles.heading}>Deal Of The Week</h2>
            <div className={dealStyles.countdown}>
              <div className={dealStyles.daysMedia}>
                <span className={dealStyles.countdown__time}>{days}</span>
                <span className={dealStyles.countdown__label}>Days</span>
              </div>
              <div>
                <span className={dealStyles.countdown__time}>{hours}</span>
                <span className={dealStyles.countdown__label}>Hours</span>
              </div>
              <div>
                <span className={dealStyles.countdown__time}>{minutes}</span>
                <span className={dealStyles.countdown__label}>Minutes</span>
              </div>
              <div>
                <span className={dealStyles.countdown__time}>{seconds}</span>
                <span className={dealStyles.countdown__label}>Seconds</span>
              </div>
            </div>
            <Link className={styles.link} href="/">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
