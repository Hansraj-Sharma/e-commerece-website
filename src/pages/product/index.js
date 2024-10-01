import React, { Fragment, useState } from "react";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/button";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HeroSection from "../../components/heroSection";
import hs_img1 from "../../assets/images/hs-img.png";
import hs_img2 from "../../assets/images/hs-img.png";
import pc_img1 from "../../assets/images/cat1.png";
import pc_img2 from "../../assets/images/cat1.png";
import pc_img3 from "../../assets/images/cat1.png";
import pc_img4 from "../../assets/images/cat1.png";
import pc_img5 from "../../assets/images/cat1.png";
import pc_img6 from "../../assets/images/cat1.png";
import pc_img7 from "../../assets/images/cat1.png";
import pc_img8 from "../../assets/images/cat1.png";
import p_img1 from "../../assets/images/product1.png";
import p_img2 from "../../assets/images/product2.png";
import p_img3 from "../../assets/images/product3.png";
import p_img4 from "../../assets/images/product4.png";
import p_img5 from "../../assets/images/product5.png";
import brandImg1 from "../../assets/images/brand-logo2.png";
import brandImg2 from "../../assets/images/brand-logo3.png";
import brandImg3 from "../../assets/images/brand-logo4.png";
import brandImg4 from "../../assets/images/brand-logo5.png";
import brandImg5 from "../../assets/images/brand-logo6.png";
import ProductCategories from "../../components/productCategories";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";
import ProductBox from "../../components/productBox";
import styles from "./style.module.css";

const HsData = [
  {
    subTitle: "Bobolax",
    title1: "Nutri 7-In-1",
    title2: `Base
On Formula 400g`,
    description: (
      <>
        Lorem ipsum dolor sit <br />
        amet photo
      </>
    ),
    imgUrl: hs_img1,
  },
  {
    subTitle: "Bobolax",
    title1: "Nutri 7-In-1",
    title2: `Base
On Formula 400g`,
    description: (
      <>
        Lorem ipsum dolor sit <br />
        amet photo
      </>
    ),
    imgUrl: hs_img2,
  },
];
const ProductCategorieData = [
  {
    text: "new",
    name: `New
Arrivals`,
    bgColor: "red",
  },
  {
    text: "sale",
    name: `Clearance`,
    bgColor: "sky",
  },
  {
    imgUrl: pc_img1,
    name: `Pregnancy &
Postpartum`,
  },
  {
    imgUrl: pc_img2,
    name: `Milks and Foods`,
  },
  {
    imgUrl: pc_img3,
    name: `Diapers and
Wipes`,
  },
  {
    imgUrl: pc_img4,
    name: `Infant`,
  },
  {
    imgUrl: pc_img5,
    name: `Eat & Drink
Supplies`,
  },
  {
    imgUrl: pc_img6,
    name: `Stroller, Crib,
Chair`,
  },
  {
    imgUrl: pc_img7,
    name: `Washes & Bath`,
  },
  {
    imgUrl: pc_img8,
    name: `Baby Fashion`,
  },
];
const CategoriesData = [
  {
    categories: "All",
  },
  { categories: "Iphone" },
  { categories: "Samsung" },
  { categories: "Xiaomi" },
  { categories: "Asus" },
  { categories: "Oppo" },
  { categories: "Gaming Smartphone" },
  { categories: "Ipad" },
  { categories: "Window Tablets" },
  { categories: "eReader" },
  { categories: "Smartphone Chargers" },
  { categories: "5G Support Smartphone" },
  { categories: "Smartphone Accessories" },
  { categories: "Tablets Accessories" },
  { categories: "Cell Phones    $200" },
  { categories: "" },
];
const BrandLogoData = [
  { imgUrl: brandImg1, productCount: "12" },
  { imgUrl: brandImg2, productCount: "12" },
  { imgUrl: brandImg3, productCount: "12" },
  { imgUrl: brandImg4, productCount: "12" },
  { imgUrl: brandImg5, productCount: "12" },
];
const RatingData = [
  { rating_count: "34" },
  { rating_count: "24" },
  { rating_count: "54" },
  { rating_count: "64" },
];
const ColorData = [
  { bgColor: "red" },
  { bgColor: "darkSky" },
  { bgColor: "lightSky" },
  { bgColor: "black" },
  { bgColor: "white" },
  { bgColor: "green" },
  { bgColor: "brown" },
  { bgColor: "sky" },
];
const ProductData = [
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img1,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img2,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img3,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img4,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img5,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img4,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img5,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
];
const ShowItemData = [
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img1,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img2,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img3,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img4,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img5,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img4,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img5,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img1,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img2,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img3,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img4,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img5,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img4,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img5,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img3,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
  {
    name: `Choco Baby Bouncer Balloon
up to a weight of 18 kg`,
    imgUrl: p_img4,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
];

const Product = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleSliderChange = (newRange) => {
    setPriceRange(newRange);
  };
  return (
    <Fragment>
      <Section py={30}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.hs_heading}>top cell phones & tablets</div>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <div className={styles.hero_wrapper}>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={10}
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
                    document
                      .querySelector(`.${styles.prev}`)
                      .addEventListener("click", () => {
                        swiper.slidePrev();
                      });
                    document
                      .querySelector(`.${styles.next}`)
                      .addEventListener("click", () => {
                        swiper.slideNext();
                      });
                  }}
                  slidesPerView={1}
                  className={styles.customSwiper}
                  loop={true}>
                  {HsData.map((value, index) => (
                    <SwiperSlide key={index}>
                      <HeroSection
                        key={index}
                        subTitle={value.subTitle}
                        title1={value.title1}
                        title2={value.title2}
                        description={value.description}
                        imgUrl={value.imgUrl}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className={`${styles.prev} ${styles.hero_prev}`}>
                  prev
                </button>
                <button className={`${styles.next} ${styles.hero_next}`}>
                  next
                </button>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.hs_right}>
                <div className={styles.hsr_content}>
                  <div className={styles.hsr_text}>
                    <div className={styles.hsr_title}>
                      redmi note 12 Pro+ 5g{" "}
                    </div>
                    <div className={styles.hsr_description}>
                      Rise to the challenge
                    </div>
                  </div>
                  <div className={styles.hsr_button}>
                    <Button text={"SHOP NOW"} bg={"black"} size={"medium"} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.hs_heading}>popular categories</div>
              <div className={styles.product_categories}>
                {ProductCategorieData.map((value, index) => (
                  <ProductCategories
                    imgUrl={value.imgUrl}
                    name={value.name}
                    key={index}
                    bgColor={value.bgColor}
                    text={value.text}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section py={50}>
        <Container>
          <Row>
            <Col lg={3}>
              <div className={styles.product_all_categories}>
                <div className={styles.hs_heading}>categories </div>
                <div className={styles.categories_btn}>
                  <Button
                    text={" All Categories"}
                    type={"outline"}
                    size={"small"}
                  />
                </div>
                <div className={styles.categories_title}>
                  Cell Phones & Tablets
                </div>
                <ul className={styles.categories_list}>
                  {CategoriesData.map((value, index) => (
                    <li key={index}>{value.categories}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.categories_details}>
                <div className={styles.reset_all}>
                  <div className={styles.hs_heading}>categories </div>
                  <Link to={"#"}> Reset All</Link>
                </div>
                <div className={styles.product_size}>
                  <span>Min: $45.00 </span>
                  <span>10.9 inch </span>
                  <span>Color: Red </span>
                  <span>128GB </span>
                </div>
                <div className={styles.brand_box}>
                  <strong>By Brands</strong>
                  <input
                    type='text'
                    name='brandName'
                    className={styles.brand_name}
                  />
                </div>
                <div className={styles.brand_logo_box}>
                  {BrandLogoData.map((value, index) => (
                    <div className={styles.brand_logo} key={index}>
                      <input type='checkbox' name='checkbox' />
                      <span>
                        <img src={value.imgUrl} alt='brand img' />
                      </span>
                      <span>({value.productCount})</span>
                    </div>
                  ))}
                </div>
                <div className={styles.price_box}>
                  <div className={styles.price_title}>By Price</div>
                  <ReactSlider
                    className={styles.horizontal_slider}
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    value={priceRange}
                    min={0}
                    max={100}
                    step={1}
                    onChange={handleSliderChange}
                    renderThumb={(props, state) => (
                      <div {...props}>{state.valueNow}</div>
                    )}
                  />
                  <div className={styles.price_range}>
                    <div className={styles.price_range_left}>
                      <div className={styles.pr_price}>
                        <span>$</span>
                        <input type='number' name='number' placeholder='0' />
                      </div>
                      <span className={styles.range_sign}>-</span>
                      <div className={styles.pr_price}>
                        <span>$</span>
                        <input
                          type='number'
                          name='number'
                          placeholder='10000'
                        />
                      </div>
                      <div className={styles.go_button}>
                        <Button
                          text={"Go"}
                          size={"large"}
                          bg={"green"}
                          customCss={styles.range_btn}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rating_box}>
                  <div className={styles.rating_title}>By Rating</div>
                  {RatingData.map((value, index) => (
                    <div className={styles.rating_check_box} key={index}>
                      <input type='checkbox' name='rating' />
                      <span>★★★☆☆</span>
                      <span>({value.rating_count})</span>
                    </div>
                  ))}
                </div>

                <div className={styles.size_box}>
                  <div className={styles.sb_title}>By Screen Size </div>
                  <div className={styles.size_range}>
                    <span>7” & Under</span>
                    <span>7.1” - 8.9”</span>
                    <span>9” - 10.9”</span>
                    <span>11” & Greater</span>
                  </div>
                </div>

                <div className={styles.color_box}>
                  <div className={styles.cb_title}>By Color </div>
                  <div className={styles.color_wrapper}>
                    {ColorData.map((value, index) => (
                      <span
                        className={`${styles[value.bgColor]}`}
                        key={index}></span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.product_right_img}>
                <div className={styles.pr_content}>
                  <div className={styles.pr_title}>
                    <span>OKODo</span> hero 11+ 5K wireless
                  </div>
                  <div className={styles.pr_rs}>
                    <div className={styles.pr_from}>from</div>
                    $169
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={9}>
              <div className={styles.category_slider}>
                <div className={styles.hs_heading}>
                  Best seller in this category
                </div>
                <div className={styles.product_wrapper}>
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
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
                      document
                        .querySelector(`.${styles.prev}`)
                        .addEventListener("click", () => {
                          swiper.slidePrev();
                        });
                      document
                        .querySelector(`.${styles.next}`)
                        .addEventListener("click", () => {
                          swiper.slideNext();
                        });
                    }}
                    slidesPerView={4}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                    className={styles.customSwiper}
                    loop={true}>
                    {ProductData.map((value, index) => (
                      <SwiperSlide key={index}>
                        <ProductBox
                          name={value.name}
                          imgUrl={value.imgUrl}
                          price={value.price}
                          pastPrice={value.pastPrice}
                          offer={value.offer}
                          purchase={value.purchase}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button className={styles.prev}>prev</button>
                  <button className={styles.next}>next</button>
                </div>
              </div>

              <div className={styles.paginationBar}>
                <div className={styles.results}>
                  <span>1 - 40 </span>
                  of 120 results
                </div>

                <div className={styles.showItems}>
                  <span>Show item</span>
                  <div className={styles.itemBtnWrapper}>
                    <button className={`${styles.itemBtn}  `}>16</button>
                    <button className={`${styles.itemBtn}  `}>32</button>
                    <button className={`${styles.itemBtn}  `}>48</button>
                  </div>
                </div>

                <div className={styles.showItemDropdown}>
                  <span>Show item</span>
                  <select className={styles.dropdown}>
                    <option value='Default'>Default</option>
                    <option value='Grid'>Grid</option>
                    <option value='List'>List</option>
                  </select>
                </div>

                <div className={styles.viewAs}>
                  <span>View As</span>
                </div>
              </div>

              <Row>
                {ShowItemData.map((value, index) => (
                  <Col lg={3} md={6} className={styles.showItem_box}>
                    <ProductBox
                      key={index}
                      name={value.name}
                      imgUrl={value.imgUrl}
                      price={value.price}
                      pastPrice={value.pastPrice}
                      offer={value.offer}
                      purchase={value.purchase}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Product;
