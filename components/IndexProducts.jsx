import React from "react";
import styles from "../styles/IndexProducts.module.css";

const IndexProducts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titles}>
        <h2>#top products</h2>
        <p>Browse the colection of our best selling and top interesting products.</p>
      </div>
    </section>
  );
};

export default IndexProducts;
