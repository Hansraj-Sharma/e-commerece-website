import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/single-p-img1.png";
import img2 from "../../assets/images/small-img1.png";
import img3 from "../../assets/images/small-img2.png";
import img4 from "../../assets/images/small-img3.png";
import img5 from "../../assets/images/brand-img.png";
import img6 from "../../assets/images/brand-logo.png";
import img7 from "../../assets/images/productSmall-img.png";
import img8 from "../../assets/images/laptop-big-img1.png";
import img9 from "../../assets/images/laptop-big-img2.png";
import img10 from "../../assets/images/laptop-big-img3.png";
import styles from "./style.module.css";
import WishlistIcon from "../../icons/wishlistIcon";
import Button from "../button";
import FacebookIcon from "../../icons/facebookIcon";
import TwitterIcon from "../../icons/twitterIcon";
import InstagramIcon from "../../icons/instagramIcon";
import YoutubeIcon from "../../icons/youtubeIcon";
import WorldIcon from "../../icons/worldIcon";
import CloseIcon from "../../icons/closeIcon";
import DeliveryIcon from "../../icons/deliveryIcon";
import { Link, useParams } from "react-router-dom";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductData from "../../../src/jsonData/products.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SingleProduct = () => {
  const { id } = useParams();

  const product = ProductData.find((product) => product.id === parseInt(id));

  return (
    <Container>
      <Row>
        <Col lg={5}>
          <div className={styles.product_img_box}>
            <div className={styles.big_img}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                onInit={(swiper) => {
                  swiper.el.addEventListener("mouseenter", () => {
                    swiper.autoplay.stop();
                  });
                  swiper.el.addEventListener("mouseleave", () => {
                    swiper.autoplay.start();
                  });
                }}
                slidesPerView={1}
                className={styles.customSwiper}
                loop={true}>
                <SwiperSlide>
                  <img src={product.imgUrl} alt='product img' />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.pib_others}>
              <div className={styles.new}>New</div>
              <div className={styles.wishlist}>
                <WishlistIcon />
              </div>
            </div>
            <div className={styles.small_images}>
              <div className={styles.small_img}>
                <img src={product.imgUrl} alt='small img' />
              </div>
              <div className={styles.small_img}>
                <img src={product.imgUrl} alt='small img' />
              </div>
              <div className={styles.small_img}>
                <img src={product.imgUrl} alt='small img' />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.product_info}>
            <div className={styles.product_name}>{product.name}</div>
            <div className={styles.product_price}>{product.price}</div>
            <ul className={styles.product_other_info}>
              <li>
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
              </li>
              <li> DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
              <li> Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>
            <div className={styles.shipping_btn}>
              <Button text={"free shipping"} size={"large"} bg={"lightGreen"} />
            </div>
            <div className={styles.stock}>
              <span></span> In stock
            </div>
            <div className={styles.quantity_box}>
              <span>qty</span>
              <div className={styles.quantity_wrapper}>
                <div className={styles.count}>
                  <button>-</button>
                  <input type='number' name='number' />
                  <button>+</button>
                </div>
                <div className={styles.add_to_cart}>
                  <Button
                    text={"Add To Cart"}
                    size={"large"}
                    bg={"green"}
                    customCss={styles.addTo_cart_btn}
                  />
                </div>
                <div className={styles.wish_list}>
                  <WishlistIcon />
                </div>
              </div>
              <div className={styles.secoure}>Guaranteed Safe Checkout</div>
              <div className={styles.brand_img}>
                <img src={img5} alt='brand img' />
              </div>
            </div>
            <ul className={styles.category}>
              <li>
                <span>SKU: </span>ABC025168
              </li>
              <li>
                <span>Category: </span>Cell Phones & Tablets
              </li>
              <li>
                <span>Tags: </span>Laptop, Macbook, Computer, M1
              </li>
            </ul>
            <div className={styles.social_icons}>
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
                <WorldIcon />
              </div>
            </div>
          </div>
        </Col>

        <Col lg={3}>
          <div className={styles.brand_section}>
            <div className={styles.brand_title}>
              Brand: <span>Sonex</span>
            </div>
            <div className={styles.brand_logo}>
              <img src={img6} alt='brand logo' />
            </div>
          </div>
          <div className={styles.self_cart_box}>
            <div className={styles.scb_title}>Your Cart</div>
            <div className={styles.scb_product}>
              <div className={styles.scb_product_img}>
                <img src={img7} alt='product img' />
              </div>
              <div className={styles.scb_product_name}>
                <div className={styles.name}>
                  Pinnaeple Macbook Pro 2022 M1/ 512GB
                </div>
                <div className={styles.scb_product_price}>3 x $579.00</div>
              </div>
              <div className={styles.close_btn}>
                <CloseIcon />
              </div>
            </div>
            <div className={styles.sub_total}>
              Sub Total: <span>$1,737.00</span>
            </div>
            <div className={styles.scb_btns}>
              <Button
                text={"view cart"}
                size={"medium"}
                bg={"black"}
                transform={"uppercase"}
                customCss={styles.checkout_btn}
              />
              <Button
                text={"checkout"}
                size={"medium"}
                bg={"green"}
                transform={"uppercase"}
                customCss={styles.checkout_btn}
              />
            </div>
          </div>
          <div className={styles.delivery}>
            <DeliveryIcon />
            <span>
              Ships from<span className={styles.states}> United States</span>{" "}
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className={styles.product_all_details}>
            <Link>description</Link>
            <Link>reviews </Link>
            <Link>additional information</Link>
          </div>
          <div className={styles.description_box}>
            <div className={styles.db_first_detail}>
              <div className={styles.product_first_about}>
                Built for ultra-fast performance, the thin and lightweight
                Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and
                documents pop on a crisp, clear Super AMOLED display. Expandable
                memory lets you enjoy more of your favorite content. And
                connecting and sharing between all your Samsung devices is
                easier than ever. Welcome to life with the reimagined Samsung
                Galaxy Tab S2. Watch thev world come to life on your tablet's
                <span> Super AMOLED display * .</span>
                With deep contrast, rich colors and crisp details, you won't
                miss a thing
              </div>
              <div className={styles.description_img1}>
                <img src={img8} alt='product img' />
              </div>
              <cite>
                * The Galaxy Tab S2’s 4 : 3 ratio display provides you with an
                ideal environment for performing office tasks.
              </cite>
            </div>
            <div className={styles.db_second_detail}>
              <div className={styles.db_title}>From the manufacturer</div>
              <div className={styles.product_first_about}>
                Dive into the blockbuster movies you can't wait to see. Switch
                between your favorite apps quickly and easily. The new and
                improved octa-core processor gives you the power and speed you
                need to see more and do more. Expand your tablet's memory from
                32GB to up to an additional 128GB and enjoy more of your
                favorite music, photos, movies and games on the go with a
                microSD card. With Quick Connect, start a show on your Smart TV
                and, with the touch of a button, take it with you by moving it
                to your Galaxy Tab S2. <br />
                <br />
                Or send videos and photos from your tablet screen to your TV
                screen to share with everyone in the room. Work effortlessly
                between your Samsung tablet and Samsung smartphone with
                SideSync. Quickly drag and drop photos between devices. And even
                respond to a call from your smartphone right on your tablet
                screen.
              </div>
              <div className={styles.db_second_detail_imaes}>
                <div className={styles.description_img3}>
                  <img src={img9} alt='product img' />
                </div>
                <div className={styles.description_img4}>
                  <img src={img10} alt='product img' />
                </div>
              </div>
            </div>

            <div className={styles.db_second_detail}>
              <div className={styles.db_title}>
                Semsong Galaxy Tab S2, 8-Inch, White
              </div>
              <div className={styles.product_third_about}>
                Or send videos and photos from your tablet screen to your TV
                screen to share with everyone in the room. Work effortlessly
                between your Samsung tablet and Samsung smartphone with
                SideSync. Quickly drag and drop photos between devices. And even
                respond to a call from your smartphone right on your tablet
                screen.
              </div>
            </div>
            <div className={styles.show_more_btn}>show more</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
