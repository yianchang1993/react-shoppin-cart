import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from '../components/StoreItem'
function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row lg={3} md={2} xs={1} className="g-3">
        {storeItems.map((item) => (
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
