import { Box, chakra, IconButton, Image } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useState } from "react";
import adler from "../images/carousel_pics/adler_duo.jpeg"
import anni from "../images/carousel_pics/anni_pic.jpeg";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = "50%";
  const side = "10%";

  // These are the images used in the slide
  const cards = [
    anni, adler
  ];

  return (
    <Box height={"600px"} width={"full"}>
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

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box px={16} py={8}>
            <Box
              p={4}
              bgColor="pink.50"
              display={"flex"}
              justifyContent={"center"}
              position="relative"
            >
              <chakra.img src={url} h={"xl"}/>
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
                <BiLeftArrowAlt />
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
                <BiRightArrowAlt />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
