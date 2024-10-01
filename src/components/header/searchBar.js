import React, { useState } from "react";
import styles from "./style.module.css";
import Logo from "../logo";
import { Container, Row } from "react-bootstrap";
import SearchInput from "../searchInput";
import Wishlist from "../wishlist";
import UserIcon from "../../icons/userIcon";
import { Link } from "react-router-dom";
import CartIcon from "../../icons/cartIcon";
import CartSideBar from "../cartSideBar";
import LocationData from "../delivar";

const SearchBar = () => {
  const [cartBar, setCartBar] = useState(false);

  const handleCartBarOpen = () => {
    setCartBar(true);
  };

  const handleCartBarClose = () => {
    setCartBar(false);
  };

  return (
    <div className={styles.searchBar_main}>
      <Container>
        <Row>
          <div className={styles.search_bar}>
            <Logo />
            <LocationData />
            <SearchInput />
            <div className={styles.search_right}>
              <button className={styles.icon_round}>
                <Wishlist />
              </button>
              <button className={styles.icon_round}>
                <UserIcon />
              </button>
              <div className={styles.sb_register}>
                <span>welcome</span>
                <div className={styles.register_loginin}>
                  <Link to={"/login"}>log in</Link>
                  <span>/</span>
                  <Link to={"/signUp"}> Register</Link>
                </div>
              </div>
              <div className={styles.cart_box}>
                <button
                  className={styles.icon_round}
                  onClick={handleCartBarOpen}>
                  <CartIcon />
                </button>
                <div className={styles.cart_info}>
                  <span>cart</span>
                  <div className={styles.price}>$1,689.00</div>
                </div>
                {cartBar ? (
                  <CartSideBar CartBar={cartBar} onClose={handleCartBarClose} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
