import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/DropdownMenu.module.css";

const DropdownMenu = ({ dropdown, isDropdown }) => {
  console.log(dropdown);

  return (
    <div className={`${styles.dropdownMenu} ${dropdown}`}>
      <section>
        <h2>Women</h2>
        <div>
          <Link href="/">Women Dresses</Link>
        </div>
        <div>
          <Link href="/">Women Shoes</Link>
        </div>
        <div>
          <Link href="/">Women Watches</Link>
        </div>
        <div>
          <Link href="/">Women Bags</Link>
        </div>
        <div>
          <Link href="/">Women Jewllery</Link>
        </div>
        <h2>Men</h2>
        <div>
          <Link href="/">Men Shirts</Link>
        </div>
        <div>
          <Link href="/">Men Shoes</Link>
        </div>
        <div>
          <Link href="/">Men Watches</Link>
        </div>
        <div>
          <Link href="/">Sunglasses</Link>
        </div>
      </section>
    </div>
  );
};

export default DropdownMenu;
