import React from "react";
import styles from "./style.module.css";
import DealTime from "../dealTime";
import { Container, Row } from "react-bootstrap";

const OfferBar = () => {
  return (
    <div className={styles.offerBar}>
      <Container>
        <Row>
          <div className={styles.offer_bar}>
            <div className={styles.of_discount}>
              FREE delivery & 40% Discount for next 3 orders! Place your 1st
              order in.
            </div>
            <span>
              <DealTime />
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default OfferBar;
