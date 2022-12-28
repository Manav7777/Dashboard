import React from "react";
import { useAuth } from "../components/hooks/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OurServices from "./Services-UI/OurServices";

const Home = () => {
  const auth = useAuth();

  return (
    <div className="add-center bg-home">
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={7}>
            <div className="inner-home-wrapper">
            <h1>Create Your Concents</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sodales turpis vitae urna consequat consectetur. Suspendisse quis
              efficitur orci. Phasellus facilisis, neque ac mollis vestibulum,
              velit mauris pulvinar metus, ut dignissim odio tellus ac orci.
              Vivamus ac orci sed mi vulputate interdum ac vel ex. Suspendisse
              eros dui, tempor vitae condimentum non, laoreet ac est. In et nunc
              nibh. Praesent vel scelerisque urna. Proin sed posuere mauris, in
              commodo turpis. Nulla et purus luctus, vestibulum ipsum ac,
              faucibus neque. Nunc sed dapibus tellus. Nulla facilisi. Duis
              ornare mauris a dui vulputate dapibus. Nunc eleifend, turpis sed
              imperdiet eleifend, velit massa congue diam, in fermentum nisl
              velit vel sem. Sed eleifend nunc vitae ullamcorper tempor.
            </p>
            </div>
          </Col>
          <Col md={5}>
            <img
              src={`${process.env.REACT_APP_IMG_URL}/assets/img/Music.webp`}
              className="img-fulid m-width"
              alt="music"
            />
          </Col>
        </Row>
      </Container>
      <OurServices className="mt-5 mb-5"/>
    </div>
  );
};

export default Home;
