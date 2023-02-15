import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <Container className="my-5">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="mb-4">Our Services</h2>
            <p>
              We specialize in capturing the special moments of your little
              ones, with a variety of themes and designs to choose from.
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} md={4} className="text-center">
            <h3>Baby Photography</h3>
            <p>
              Capture the milestones and memories of your baby's first years
              with our baby photography services. Choose from a range of themes
              and designs, including Halloween, winter, and more.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h3>Newborn Photography</h3>
            <p>
              Preserve the precious moments of your newborn with our newborn
              photography services. Choose from a range of themes and designs,
              including desert, New Year, and more.
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h3>Themed Photography</h3>
            <p>
              Create unique and memorable photos of your little ones with our
              themed photography services. Choose from a range of themes,
              including holiday, seasonal, and more.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
