import React from "react";
import Image from "next/image";
import styles from "../styles/IndexProducts.module.css";

const IndexProducts = ({ data }) => {
  console.log(data.products.forEach(product => console.log(product.id)));

  return (
    <section className={styles.container}>
      <div className={styles.titles}>
        <h2>#top products</h2>
        <p>Browse the colection of our best selling and top interesting products.</p>
      </div>
      <div className={styles.products}>
        {/* {data.products.map(product => {
          const { title, description, price, rating, images } = product;
          return (
            <div className={styles.product} key={product.id}>
              <Image src={images[0]} alt={title} height="300px" width="300px" />
              <div className={styles.productInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price} €</p>
              </div>
            </div>
          );
        })} */}
      </div>
    </section>
  );
};

export default IndexProducts;
