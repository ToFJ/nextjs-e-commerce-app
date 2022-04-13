import React from "react";

import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "../styles/SearchField.module.css";

const SearchField = ({ searchField, toggleSearchField }) => {
  return (
    <div className={`${styles.container} ${searchField}`}>
      <form className={styles.form}>
        <button type="submit">
          <FiSearch />
        </button>
        <input type="text" placeholder="S E A R C H . . ." />
        <AiOutlineClose className={`${styles.closeButton}`} onClick={toggleSearchField} />
      </form>
    </div>
  );
};

export default SearchField;
