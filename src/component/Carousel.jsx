import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselView = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-2">
      <Carousel.Item>
        <img
          src="/assets/banner/Slider1.png"
          alt="slider1"
          className="carousel-style"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/assets/banner/Slider2.png"
          alt="slider2"
          className="carousel-style"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/assets/banner/Slider3.png"
          alt="slider3"
          className="carousel-style"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/assets/banner/Slider4.png"
          alt="slider4"
          className="carousel-style"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselView;
