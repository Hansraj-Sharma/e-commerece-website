import React, { Fragment } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";
import { Link } from "react-router-dom";
import TwitterIcon from "../../icons/twitterIcon";
import FacebookIcon from "../../icons/facebookIcon";
import InstagramIcon from "../../icons/instagramIcon";
import YoutubeIcon from "../../icons/youtubeIcon";
import PinterestIcon from "../../icons/pinterestIcon";
import Select from "../select";
import img1 from "../../assets/images/unitedStates.png";
import img2 from "../../assets/images/footer-img1.png";
import img3 from "../../assets/images/footer-img2.png";
import img4 from "../../assets/images/footer-img3.png";
import img5 from "../../assets/images/footer-img4.png";
import img6 from "../../assets/images/footer-img5.png";
import AppleIcon from "../../icons/appleIcon";
import PlayStoreIcon from "../../icons/playStoreIcon";

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

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className={styles.footer}>
            <div className={styles.footer_left}>
              <div className={styles.fl_item}>
                <ul>
                  <li className={styles.title}>Top Categories</li>
                  <li>Pregnant & Postpartum</li>
                  <li>Milks & Foods</li>
                  <li>Diapers & Wipes</li>
                  <li>Infant</li>
                  <li>Eat & Drink Supplies</li>
                  <li>Baby Fashion</li>
                  <li>Baby Out</li>
                  <li>Toys & Study</li>
                  <li>Stroller, Crib, Chair</li>
                  <li>Washes & Bath</li>
                  <li>Homewares</li>
                </ul>
              </div>

              <div className={styles.fl_item}>
                <ul>
                  <li className={styles.title}>Company</li>
                  <li>About Swatbabymall</li>
                  <li>Contact</li>
                  <li>Career</li>
                  <li>Blog</li>
                  <li>Sitemap</li>
                  <li>Store Locations</li>
                </ul>
              </div>

              <div className={styles.fl_item}>
                <ul>
                  <li className={styles.title}>Help Center</li>
                  <li>Customer Service</li>
                  <li>Policy</li>
                  <li>Terms & Conditions </li>
                  <li>Trach Order</li>
                  <li>FAQs</li>
                  <li>My Account</li>
                  <li>Product Support</li>
                </ul>
              </div>

              <div className={styles.fl_item}>
                <ul>
                  <li className={styles.title}>Partner</li>
                  <li>Become Seller</li>
                  <li>Affiliate</li>
                  <li>Advertise </li>
                  <li>Partnership</li>
                  <li>Care Services</li>
                </ul>
              </div>
            </div>
            <div className={styles.footer_right}>
              <ul>
                <li className={styles.title}>
                  Subscribe & Get<span> 10%</span> OFF
                </li>
                <li className={styles.input_btn}>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                  />
                  <Button
                    text={"SUBSCRIBE"}
                    type={"fill"}
                    size={"large"}
                    customCss={styles.subscribe_btn}
                  />
                </li>
                <li className={styles.privacy}>
                  By subscribing, you accept the<Link> Privacy Policy</Link>
                </li>
                <li className={styles.hotline}>
                  Hotline 24/7:<span> (+325) 3686 25 16</span>
                </li>
                <li className={styles.work_time}>
                  <span> Work Hours:</span> Monday-Saturday: 9.00am - 5.00pm
                </li>
                <li className={styles.mail}>
                  <span>Mail:</span> contact@swatbabymall.com
                </li>
                <li className={styles.icons}>
                  <div className={styles.icon}>
                    <TwitterIcon />
                  </div>
                  <div className={styles.icon}>
                    <FacebookIcon />
                  </div>
                  <div className={styles.icon}>
                    <InstagramIcon />
                  </div>
                  <div className={styles.icon}>
                    <YoutubeIcon />
                  </div>
                  <div className={styles.icon}>
                    <PinterestIcon />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footer_bottom}>
            <div className={styles.fb_top}>
              <div className={styles.fb_currency_lang_box}>
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
              <div className={styles.fb_images}>
                <div className={styles.fb_image}>
                  <img src={img2} alt='footer img' />
                </div>
                <div className={styles.fb_image}>
                  <img src={img3} alt='footer img' />
                </div>
                <div className={styles.fb_image}>
                  <img src={img4} alt='footer img' />
                </div>
                <div className={styles.fb_image}>
                  <img src={img5} alt='footer img' />
                </div>
                <div className={styles.fb_image}>
                  <img src={img6} alt='footer img' />
                </div>
              </div>

              <div className={styles.download_btns}>
                <span>Download App </span>
                <Link className={styles.store_btn}>
                  <AppleIcon /> <span> App Store</span>
                </Link>
                <Link className={styles.store_btn}>
                  <PlayStoreIcon />
                  <span> Google Play</span>
                </Link>
              </div>
            </div>
            <div className={styles.fb_bottom}>
              © 2024 <span>Shawonetc3</span> . All Rights Reserved
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
