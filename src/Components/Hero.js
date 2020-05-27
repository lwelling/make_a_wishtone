import React from "react";
import { Row, Col } from "react-bootstrap";

import PictureCarousel from "./PictureCarousel";

export default function Hero() {
  return (
    <div className="white-slot">
      <Row className="fixed-width">
        <Col sm={6}>
          <div className="description-box-blue">
            <h2 className="cursive-font">They are one-of-a-kind</h2>
          </div>
          <div className="description-box-white">
            tell them in your own voice.
          </div>
        </Col>
        <Col sm={6}>
          <PictureCarousel />
        </Col>
      </Row>
    </div>
  );
}
