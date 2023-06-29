import { Box, chakra, IconButton, SlideFade } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { useState } from "react";
import adler from "../images/carousel_pics/adler_duo.jpeg";
import mall from "../images/carousel_pics/anni_mall.jpeg";
import anni from "../images/carousel_pics/anni_pic.jpeg";
import bday from "../images/carousel_pics/bday_tts.jpeg";
import beach from "../images/carousel_pics/beach_insta.jpeg";
import car from "../images/carousel_pics/car_juddystupid.jpeg";
import cold from "../images/carousel_pics/coldddd.jpeg";
import dillo1 from "../images/carousel_pics/dillo_looking.jpeg";
import dillo2 from "../images/carousel_pics/dillo_together.jpeg";
import dress from "../images/carousel_pics/red_dress_feb.jpeg";
import sail from "../images/carousel_pics/sailing.jpeg";
import sunset from "../images/carousel_pics/sunset_boston.jpeg";

import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null);

  const myRef = useRef(null);
  const { inViewport } = useInViewport(
    myRef,
    { rootMargin: "0px 0px -100px 0px" },
    { disconnectOnLeave: false }
  );

  const top = "50%";
  const side = "10%";

  // These are the images used in the slide
  const cards = [
    anni,
    adler,
    mall,
    dress,
    sail,
    sunset,
    dillo1,
    dillo2,
    car,
    beach,
    cold,
    bday,
  ];

  return (
    <SlideFade in={inViewport} offsetY="100px">
      <Box width={"full"} px={16} py={8} ref={myRef}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Box px={4} pb={12} pt={8} bgColor="pink.50" position="relative">
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((url, index) => (
              <chakra.img
                key={index}
                src={url}
                h="2xl"
                objectFit="scale-down"
              />
            ))}
          </Slider>
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            colorScheme="pink"
            borderRadius="full"
            position="absolute"
            top={top}
            left={side}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <FaArrowLeft />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            colorScheme="pink"
            borderRadius="full"
            position="absolute"
            top={top}
            right={side}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <FaArrowRight />
          </IconButton>
        </Box>
      </Box>
    </SlideFade>
  );
}
