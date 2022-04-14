import { useState } from "react";

import Link from "next/link";

import { FaShirtsinbulk } from "react-icons/fa";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "../styles/Navbar.module.css";

import dropdownStyles from "../styles/DropdownMenu.module.css";
import DropdownMenu from "./DropdownMenu";

import SearchField from "./SearchField";
import searchFieldStyles from "../styles/SearchField.module.css";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState("");

  const [isDropdown, setIsDropdown] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchField, setSearchField] = useState("");

  const toggleNav = () => {
    isToggle === "" ? setIsToggle(styles.nav__active) : setIsToggle("");
  };

  const toggleDropdown = () => {
    if (isDropdown) {
      setIsDropdown(false);
      setDropdown("");
    } else {
      setIsDropdown(true);
      setDropdown(dropdownStyles.dropdownMenuActive);
    }
  };

  const toggleSearchField = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setSearchField("");
    } else {
      setIsSearchOpen(true);
      setSearchField(searchFieldStyles.searchFieldActive);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <a>
            <FaShirtsinbulk />
          </a>
        </Link>
      </div>
      <ul className={`${styles.nav__menu} ${isToggle}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.dropdown}>
          <button onClick={toggleDropdown}>
            {isDropdown ? (
              <span>
                Shop <AiFillCaretUp className={styles.caretUp} />
              </span>
            ) : (
              <span>
                Shop <AiFillCaretDown className={styles.caretUp} />
              </span>
            )}
          </button>
          <DropdownMenu dropdown={dropdown} isDropdown={isDropdown} />
        </li>
        <li>
          <Link href="/">Accessories</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>

      <div className={styles.nav__icons}>
        <button onClick={toggleSearchField}>
          <FiSearch />
        </button>
        <Link href="/">
          <a>
            <FiShoppingCart />
          </a>
        </Link>
      </div>
      <div onClick={toggleNav} className={styles.nav__toggle}>
        {isToggle === "" ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <SearchField searchField={searchField} toggleSearchField={toggleSearchField} />
    </nav>
  );
};

export default Navbar;
