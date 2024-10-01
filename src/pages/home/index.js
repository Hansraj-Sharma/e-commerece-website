import React, { Fragment } from "react";
import styles from "./style.module.css";
import HeroSection from "../../components/heroSection";
import hs_img1 from "../../assets/images/hs-img.png";
import hs_img2 from "../../assets/images/hs-img.png";
import p_img1 from "../../assets/images/product1.png";
import p_img2 from "../../assets/images/product2.png";
import p_img3 from "../../assets/images/product3.png";
import p_img4 from "../../assets/images/product4.png";
import p_img5 from "../../assets/images/product5.png";
import m_img1 from "../../assets/images/m1.png";
import m_img2 from "../../assets/images/m2.png";
import m_img3 from "../../assets/images/m3.png";
import m_img4 from "../../assets/images/m4.png";
import blog_img1 from "../../assets/images/blog-card-img1.png";
import blog_img2 from "../../assets/images/blog-card-img2.png";
import blog_img3 from "../../assets/images/blog-card-img3.png";
import blog_img4 from "../../assets/images/blog-card-img4.png";
import Bedroom_img1 from "../../assets/images/Bedroom1.png";
import Bedroom_img2 from "../../assets/images/Bedroo2.png";
import Bedroom_img3 from "../../assets/images/Bedroom3.png";
import Bedroom_img4 from "../../assets/images/Bedroom4.png";
import Feeding_img1 from "../../assets/images/fe1.png";
import Feeding_img2 from "../../assets/images/fe2.png";
import Feeding_img3 from "../../assets/images/fe3.png";
import Feeding_img4 from "../../assets/images/fe4.png";
import Feeding_Logo from "../../assets/images/fe-logo.png";
import { Col, Container, Row } from "react-bootstrap";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Section from "../../components/section";
import SectionHeading from "../../components/sectionHeading";
import ProductCategories from "../../components/productCategories";
import Banner from "../../components/banner";
import Button from "../../components/button";
import ProductBox from "../../components/productBox";
import MilestoneBox from "../../components/milestoneBox";
import OfferBanner from "../../components/offerBanner";
import ProductCard from "../../components/productCard";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blogCard";
import TelegramIcon from "../../icons/telegram";
import BagIcon from "../../icons/bagIcon";
import productsData from "../../../src/jsonData/products.json";
import categoryData from "../../../src/jsonData/categoryData.json";

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

const ButtonData = [
  { text: "Best Seller" },
  { text: "Top Rated" },
  { text: "Pregnancy & Postpartum" },
  { text: "Milks & Foods" },
  { text: "Diapers & Wipes" },
  { text: "Infant" },
  { text: "Strollers" },
  { text: "Baby Out" },
];

const MilestoneBoxData = [
  {
    imgUrl: m_img1,
    work: "Sleep Training",
    time: "0-6 months",
  },
  {
    imgUrl: m_img2,
    work: "Starting Solids",
    time: "6-12 months",
  },
  {
    imgUrl: m_img3,
    work: "On The Move",
    time: "12-24 months",
  },
  {
    imgUrl: m_img4,
    work: "Potty Training",
    time: "2-4 years",
  },
];

const ArrivalButtonData = [
  { text: "Featured" },
  { text: "Pregnancy & Postpartum" },
  { text: "Milks & Foods" },
  { text: "Diapers & Wipes" },
  { text: "Infant" },
  { text: "Strollers" },
  { text: "Baby Out" },
];

const FirstOfferData = [
  {
    imgUrl: p_img1,
    name: `Choco Baby Bouncer Balloon
      up to a weight of 18 kg`,
    price: "129.00",
    purchase: "23",
  },
  {
    imgUrl: p_img1,
    name: `Choco Baby Bouncer Balloon
      up to a weight of 18 kg`,
    price: "129.00",
    purchase: "23",
  },
];

const ArrivalData = [
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
    imgUrl: p_img1,
    price: "129.00",
    pastPrice: "159.00",
    offer: "15%  ",
    purchase: "1.286",
  },
];

const BedroomData = [
  {
    imgUrl: Bedroom_img1,
    name: "Beach & Water",
  },
  {
    imgUrl: Bedroom_img2,
    name: "Trampolines",
  },
  {
    imgUrl: Bedroom_img3,
    name: "Ride ons",
  },
  {
    imgUrl: Bedroom_img4,
    name: "Outdoor Games",
  },
];

const FeedingData = [
  {
    imgUrl: Feeding_img1,
    name: "Breast Feeding",
  },
  {
    imgUrl: Feeding_img2,
    name: "Bottle Feeding",
  },
  {
    imgUrl: Feeding_img3,
    name: "Pacifiers",
  },
  {
    imgUrl: Feeding_img4,
    name: "Bibs",
  },
];

const BlogCardData = [
  {
    imgUrl: blog_img1,
    title: `Omicron in Kids: Here’s
what parents should know`,
    date: "45 Minutes ago in Experience",
    pb: "21",
    border: "bottom",
  },
  {
    imgUrl: blog_img2,
    title: "Insight into dadliness",
    date: "2 Days ago in Infant",
    pb: "21",
    border: "bottom",
  },
  {
    imgUrl: blog_img3,
    title: `Fun facts about January
Babies`,
    date: "1 Day ago in Life Style",
    pt: "20",
  },
  {
    imgUrl: blog_img4,
    title: `Your handy guide to
revamp the nursery`,
    date: "2 Days ago in Pregnancy & Postpartum",
    pt: "20",
  },
];
const Home = () => {
  return (
    <Fragment>
      <Section py={38} bgColor={"light_orange"}>
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={9}>
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
          </Row>
        </Container>
      </Section>

      <Section pb={60} pt={60}>
        <Container>
          <Row>
            <Col lg={12} className='text-center'>
              <SectionHeading
                title1={"Most popular categories"}
                title2={"for baby products"}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className={styles.product_categories}>
                {categoryData.map((value, index) => (
                  <ProductCategories
                    imgUrl={value.img}
                    name={value.name}
                    key={index}
                    bgColor={value.bgColor}
                    text={value.text}
                  />
                ))}
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Banner />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pb={80}>
        <Container>
          <Row>
            <Col lg={12} className='text-center'>
              <SectionHeading
                title1={"Recommended"}
                title2={"by Swatbabymall"}
              />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className={styles.product_btn}>
                {ButtonData.map((value, index) => (
                  <Button
                    text={value.text}
                    bg={"lightBrown"}
                    size={"small"}
                    key={index}
                  />
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
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
                  slidesPerView={5}
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
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                  className={styles.customSwiper}
                  loop={true}>
                  {productsData.map((value, index) => (
                    <SwiperSlide key={index}>
                      <ProductBox
                        name={value.name}
                        imgUrl={value.imgUrl}
                        price={value.price}
                        pastPrice={value.pastPrice}
                        offer={value.offer}
                        purchase={value.purchase}
                        id={value.id}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className={styles.prev}>prev</button>
                <button className={styles.next}>next</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pb={60}>
        <Container>
          <Row>
            <div className={styles.milestone_section}>
              <Col lg={12}>
                <SectionHeading
                  title1={"Prepare for"}
                  title2={"Recommbaby milestonesended"}
                />
              </Col>
              <Row className={styles.milestone_box}>
                {MilestoneBoxData.map((value, index) => (
                  <Col lg={3} md={6} key={index}>
                    <MilestoneBox
                      imgUrl={value.imgUrl}
                      work={value.work}
                      time={value.time}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Row>
        </Container>
      </Section>

      <Section pb={60}>
        <Container>
          <Row>
            <Col lg={12}>
              <OfferBanner />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pb={60}>
        <Container>
          <Row>
            <Col lg={12} className='text-left'>
              <SectionHeading
                justify='left'
                title1={"Clearance"}
                title2={"Sale | Up to 70% OFF"}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
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
                  slidesPerView={5}
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
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                  className={styles.customSwiper}
                  loop={true}>
                  {productsData.map((value, index) => (
                    <SwiperSlide key={index}>
                      <ProductBox
                        key={index}
                        name={value.name}
                        imgUrl={value.imgUrl}
                        price={value.price}
                        pastPrice={value.pastPrice}
                        offer={value.offer}
                        purchase={value.purchase}
                        id={value.id}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className={styles.prev}>prev</button>
                <button className={styles.next}>next</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pb={60}>
        <Container>
          <Row>
            <Col lg={12} className='text-left'>
              <SectionHeading
                justify='left'
                title1={"New"}
                title2={"Arrival"}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className={styles.arrival_btn}>
                {ArrivalButtonData.map((value, index) => (
                  <Button
                    text={value.text}
                    bg={"lightBrown"}
                    size={"small"}
                    key={index}
                  />
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={5}>
              {FirstOfferData.map((value, index) => (
                <div className={styles.card_box} key={index}>
                  <ProductCard
                    name={value.name}
                    imgUrl={value.imgUrl}
                    price={value.price}
                    purchase={value.purchase}
                  />
                </div>
              ))}
            </Col>
            <Col lg={7}>
              <Row>
                {ArrivalData.map((value, index) => (
                  <Col lg={4} md={6} key={index}>
                    <div className={styles.card_box}>
                      <ProductBox
                        name={value.name}
                        imgUrl={value.imgUrl}
                        price={value.price}
                        pastPrice={value.pastPrice}
                        offer={value.offer}
                        purchase={value.purchase}
                        id={value.id}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pb={60}>
        <Container>
          <Row>
            <Col lg={6} md={12} className='pb-4'>
              <div className={styles.bedroom_essentials}>
                <SectionHeading
                  title1={"Bedroom"}
                  title2={"Essentials"}
                  justify='left'
                />
                <div className={styles.be_imgBox}>
                  {BedroomData.map((value, index) => (
                    <div className={styles.be_img} key={index}>
                      <img src={value.imgUrl} alt='' />
                      <div className={styles.be_imgName}>{value.name}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.be_banner}>
                  <Col lg={6} md={6} className={styles.be_banner_wrapper}>
                    <div className={styles.be_banner_first}>
                      <div className={styles.bf_content}>
                        <div className={styles.bf_title}>
                          <span>OKO</span> Beeze Baby Carrier
                        </div>
                        <div className={styles.bf_price}>
                          price just<span>$169</span>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col lg={6} md={6} className={styles.be_banner_wrapper}>
                    <div className={styles.be_banner_second}>
                      <div className={styles.bs_content}>
                        <div className={styles.bs_title}>
                          Kindergo Uniq Balance Bike
                        </div>
                        <Link className={styles.bs_button}>Shop Now</Link>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </Col>

            <Col lg={6} md={12} className='pb-4'>
              <div className={styles.feeding_essentials}>
                <SectionHeading
                  title1={"Feeding"}
                  title2={"Essentials"}
                  justify='left'
                />
                <div className={styles.be_imgBox}>
                  {FeedingData.map((value, index) => (
                    <div className={styles.be_img} key={index}>
                      <img src={value.imgUrl} alt='' />
                      <div className={styles.be_imgName}>{value.name}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.be_banner}>
                  <Col lg={6} md={6} className={styles.be_banner_wrapper}>
                    <div className={styles.fe_banner_first}>
                      <div className={styles.ff_content}>
                        <div className={styles.ff_logo}>
                          <img src={Feeding_Logo} alt='Feeding logo' />
                        </div>

                        <div className={styles.ff_title}>Baby High Chair</div>
                      </div>
                    </div>
                  </Col>

                  <Col lg={6} md={6} className={styles.be_banner_wrapper}>
                    <div className={styles.be_banner_second}>
                      <div className={styles.bs_content}>
                        <div className={styles.bs_title}>
                          Kindergo Uniq Balance Bike
                        </div>
                        <Link className={styles.bs_button}>Shop Now</Link>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pb={60}>
        <Container>
          <Row>
            <Col lg={12}>
              <SectionHeading
                title1={"What’s New"}
                title2={"Today"}
                justify='left'
              />
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <div className={styles.child_box}>
                <div className={styles.cb_content}>
                  <div className={styles.cb_title}>
                    Babies in Winter: How to protect your newborn in cold
                    weather
                  </div>
                  <div className={styles.cb_expire_date}>
                    45 Minutes ago in Experience
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <Row>
                {BlogCardData.map((value, index) => (
                  <Col lg={6} md={6} sm={12} key={index}>
                    <BlogCard
                      imgUrl={value.imgUrl}
                      title={value.title}
                      date={value.date}
                      pb={value.pb}
                      pt={value.pt}
                      border={value.border}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section bgColor={"green"}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.guid_banner}>
                <div className={styles.gb_icon}>
                  <TelegramIcon />
                  <span>Free Shipping over $99</span>
                </div>
                <div>30 Days money back</div>
                <div>100% Authentic Products</div>
                <div className={styles.gb_icon}>
                  <BagIcon />
                  <span>Flexiable payment options</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
};

export default Home;
