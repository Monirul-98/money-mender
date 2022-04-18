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
          <h1>Expand What’s Possible With Money Through Financial Planning</h1>
          <p className="fs-5">
            Connect your money with what matters most. Experience a sense of
            enough here and now, not just in the future.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100 image" src={banner2} alt="Second slide" />
        <Carousel.Caption className="banner-title">
          <h1>Grow Your Money</h1>
          <p className="fs-5">
            Get started, whether you're investing, doing taxes, or anything in
            between.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 image" src={banner3} alt="Third slide" />
        <Carousel.Caption className="banner-title">
          <h1>Financial Services</h1>
          <p className="fs-5">
            I am going to be your financial advisor takes care of the messy
            details so you don't have to.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
