import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IHiMessage } from "../utils/type";
import TypeWriter from "../typewriter/typewriter";


const Hithere: IHiMessage[] = [
  {
    part1: "console",
    part2: "log",
    part3: "(",
    part4: ")",
  },
  {
    part1: "print",
    part2: "",
    part3: "(",
    part4: ")",
  },
  {
    part1: "Console",
    part2: "WriteLine",
    part3: "(",
    part4: ")",
  },
  {
    part1: "print",
    part2: "",
    part3: "(",
    part4: ")",
  },
  {
    part1: "echo",
    part2: "",
    part3: "",
    part4: "",
  },
  {
    part1: "disp",
    part2: "",
    part3: "(",
    part4: ")",
  },
  {
    part1: "Write-Host",
    part2: "",
    part3: "",
    part4: "",
  },
 
];



function Slider1() {
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    // className: " !-z-10 text-black bg-white ",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,

  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {Hithere.map((hi, h) => {
            return <TypeWriter typeMess={hi} key={h} />;
          })}
      </Slider>
    </div>
  );
}

export default Slider1;
