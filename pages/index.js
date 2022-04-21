import Image from "next/image";
import Link from "next/link";

import malefashion from "../public/malefashion.png";
import femalefashion from "../public/femalefashion.png";
import accbanner from "../public/accbanner.png";
import styles from "../styles/Index.module.css";

import Hero from "../components/Hero";
import DealCountdown from "../components/DealCountdown";
import IndexProducts from "../components/IndexProducts";

export default function Home() {
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
      <DealCountdown />
      <IndexProducts />
    </>
  );
}
