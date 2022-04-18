import Image from "next/image";
import Link from "next/link";
import img from "../images/discountimg.png";

import styles from "../styles/DealCountdown.module.css";

const DealCountdown = () => {
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
              <span className={styles.countdown__time}>00</span>
              <span className={styles.countdown__label}>Days</span>
            </div>
            <div>
              <span className={styles.countdown__time}>00</span>
              <span className={styles.countdown__label}>Hours</span>
            </div>
            <div>
              <span className={styles.countdown__time}>00</span>
              <span className={styles.countdown__label}>Minutes</span>
            </div>
            <div>
              <span className={styles.countdown__time}>00</span>
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
