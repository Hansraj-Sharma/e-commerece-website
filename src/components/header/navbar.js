import React, { useState } from "react";
import styles from "./style.module.css";
import Select from "../select";
import { Container, Row } from "react-bootstrap";
import MenuItem from "../menuItem";
import { Link } from "react-router-dom";
import CallIcon from "../../icons/callIcon";
import img1 from "../../assets/images/unitedStates.png";
import HamBurgerIcon from "../../icons/hamBurger";

const OptionData = [
  {
    id: 1,
    name: "pregnantPostpartum",
    title: "Pregnant & Postpartum",
    children: [
      { id: 11, title: "Home1", path: "/home1" },
      { id: 12, title: "Home2", path: "/home2" },
      { id: 13, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 2,
    name: "milksFoods",
    title: "Milks & Foods",
    children: [
      { id: 21, title: "Home1", path: "/home1" },
      { id: 22, title: "Home2", path: "/home2" },
      { id: 23, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 3,
    name: "diapersWipes",
    title: "Diapers & Wipes",
    children: [
      { id: 31, title: "Home1", path: "/home1" },
      { id: 32, title: "Home2", path: "/home2" },
      { id: 33, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 4,
    name: "infant",
    title: "Infant",
  },
  {
    id: 5,
    name: "eatDrinkSupplies",
    title: "Eat & Drink Supplies",
  },
  {
    id: 6,
    name: "babyFashion",
    title: "Baby Fashion",
  },
  {
    id: 7,
    name: "babyOut",
    title: "Baby Out",
  },
  {
    id: 8,
    name: "toysStudy",
    title: "Toys & Study",
  },
  {
    id: 9,
    name: "strollerCribChair",
    title: "Stroller, Crib, Chair",
  },
  {
    id: 10,
    name: "washesBath",
    title: "Washes & Bath",
  },
  {
    id: 11,
    name: "homewares",
    title: "Homewares",
  },
  {
    id: 12,
    name: "clearance",
    title: "Clearance",
  },
];

const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    children: [
      {
        id: 11,
        title: "Home1",
        path: "/home1",
      },
      { id: 12, title: "Home2", path: "/home2" },
      { id: 13, title: "Home3", path: "/home3" },
    ],
  },
  {
    id: 2,
    title: "About ",
    path: "/about ",
    children: [
      {
        id: 21,
        title: "About1",
        path: "/about1",
      },
      { id: 22, title: "About2", path: "/about2" },
      { id: 23, title: "About3", path: "/about3" },
    ],
  },
  {
    id: 3,
    title: "Product ",
    path: "/product ",
  },
];

const CurrencyData = [
  { id: 1, title: "USD", name: "usd" },
  { id: 2, title: "EUR", name: "eur" },
  { id: 3, title: "JPY", name: "jpy" },
  { id: 4, title: "GBP", name: "gbp" },
  { id: 5, title: "INR", name: "inr" },
];

const LanguageData = [
  { id: 1, title: "English", name: "english", imgUrl: img1 },
  { id: 2, title: "Spanish", name: "spanish", imgUrl: img1 },
  { id: 3, title: "Chinese", name: "chinese", imgUrl: img1 },
  { id: 4, title: "Hindi", name: "hindi", imgUrl: img1 },
  { id: 5, title: "French", name: "french", imgUrl: img1 },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <Container>
        <Row>
          <div className={styles.navbar_wrapper}>
            <div className={styles.nw_left}>
              <div className={styles.list_category}>
                <span onClick={handleMenuToggle}>
                  <HamBurgerIcon />
                </span>
                <Select
                  option={OptionData}
                  keyName={"title"}
                  placeholder={"List Category"}
                  ifTrue={true}
                />
              </div>
              <div
                className={`${styles.nav_items} ${
                  menuOpen ? styles.menuOpen : ""
                }`}>
                <div className={styles.clsMenu} onClick={handleMenuToggle}>
                  close
                </div>
                {MenuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    path={item.path}
                    isOpen={openIndex === index}
                    onMenuItemClick={() => handleMenuItemClick(index)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.nw_right}>
              <div className={styles.hotline}>
                <Link to={"#"}>
                  <CallIcon />
                  Hotline 24/7<span>(025) 3886 25 16</span>
                </Link>
              </div>
              <div className={styles.curr_lang}>
                <div className={styles.currency}>
                  <Select
                    option={CurrencyData}
                    keyName={"title"}
                    placeholder={"USD"}
                  />
                </div>
                <div className={styles.language}>
                  <Select
                    option={LanguageData}
                    keyName={"title"}
                    placeholder={"English"}
                    ImgName={"imgUrl"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
