import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Section = () => {
  return (
    <section className="bg-light position-relative">
      <div className="background-image"></div>
      <Container>
        <Row>
          <Col lg={6} className="d-flex align-items-center">
            <div>
              <h1 className="fs-1 fw-bold">Rapid</h1>
              <h1 className='fs-1 fw-bold'>Tech Hiring</h1>
              <p className='fs-2'>We are an IT, Tech, and digital-focused global recruitment company.</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-center">
              <img
                src="https://indihire.com/wp-content/uploads/2022/06/home-banner-2.png"
                alt="Section Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
