import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/DropdownMenu.module.css";

const DropdownMenu = ({ dropdown }) => {
  return (
    <div className={`${styles.dropdownMenu} ${dropdown}`}>
      <section>
        <h2>Women</h2>
        <div>
          <Link href="/">Women&apos;s Dresses</Link>
        </div>
        <div>
          <Link href="/">Women&apos;s Shoes</Link>
        </div>
        <div>
          <Link href="/">Women&apos;s Watches</Link>
        </div>
        <div>
          <Link href="/">Women&apos;s Bags</Link>
        </div>
        <div>
          <Link href="/">Women&apos;s Jewllery</Link>
        </div>
        <h2>Men</h2>
        <div>
          <Link href="/">Men&apos;s Shirts</Link>
        </div>
        <div>
          <Link href="/">Men&apos;s Shoes</Link>
        </div>
        <div>
          <Link href="/">Men&apos;s Watches</Link>
        </div>
        <div>
          <Link href="/">Sunglasses</Link>
        </div>
      </section>
    </div>
  );
};

export default DropdownMenu;
