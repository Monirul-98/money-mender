import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <Carousel className="banner">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 image" src={banner1} alt="First slide" />
        <Carousel.Caption className="banner-title">
          <h1>Financial Services</h1>
          <p className="fs-5">
            Develop innovative solutions for your financial problems.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100 image" src={banner2} alt="Second slide" />
        <Carousel.Caption className="banner-title">
          <h1>Financial Services</h1>
          <p className="fs-5">
            Develop innovative solutions for your financial problems.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 image" src={banner3} alt="Third slide" />
        <Carousel.Caption className="banner-title">
          <h1>Financial Services</h1>
          <p className="fs-5">
            Develop innovative solutions for your financial problems.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
