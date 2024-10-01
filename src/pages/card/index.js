import React from "react";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../../components/cartItem";
import img1 from "../../assets/images/phone-img.png";
import img2 from "../../assets/images/phone-img.png";
import img3 from "../../assets/images/phone-img.png";
import styles from "./style.module.css";
import OrderSummary from "../../components/orderSummary";

const ItemData = [
  {
    img: img1,
    profit: "199.00",
    count: "243",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "579.00",
  },
  {
    img: img2,
    profit: "199.00",
    count: "243",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "579.00",
  },
  {
    img: img3,
    profit: "199.00",
    count: "243",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: "579.00",
  },
];

const Card = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col lg={8}>
            {ItemData.map((value, index) => (
              <CartItem
                key={index}
                imgUrl={value.img}
                profit={value.profit}
                count={value.count}
                name={value.name}
                price={value.price}
              />
            ))}
          </Col>
          <Col lg={4}>
            <div className={styles.orderSummary}>
              <OrderSummary />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Card;
