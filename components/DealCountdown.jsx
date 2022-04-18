import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../public/discountimg.png";

import styles from "../styles/DealCountdown.module.css";

const DealCountdown = () => {
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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={img} width="585px" height="500px" alt="female looking at you" />
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>Deal Of The Week</h2>
          <div className={styles.countdown}>
            <div className={styles.daysMedia}>
              <span className={styles.countdown__time}>{days}</span>
              <span className={styles.countdown__label}>Days</span>
            </div>
            <div>
              <span className={styles.countdown__time}>{hours}</span>
              <span className={styles.countdown__label}>Hours</span>
            </div>
            <div>
              <span className={styles.countdown__time}>{minutes}</span>
              <span className={styles.countdown__label}>Minutes</span>
            </div>
            <div>
              <span className={styles.countdown__time}>{seconds}</span>
              <span className={styles.countdown__label}>Seconds</span>
            </div>
          </div>
          <Link className={styles.link} href="/">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DealCountdown;
