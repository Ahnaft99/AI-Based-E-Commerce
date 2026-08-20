import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import Container from "./Container";

const Slider = SliderImport.default ?? SliderImport;

const Banner = () => {
  let sliderRef;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className ="py-2" >
      <Container>
        <div className="relative">

          <button
            onClick={() => sliderRef.slickPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div>
              <img
                src={b1}
                alt="Banner 1"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <img
                src={b2}
                alt="Banner 2"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <img
                src={b3}
                alt="Banner 3"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </Slider>

          <button
            onClick={() => sliderRef.slickNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition"
          >
            <FaChevronRight />
          </button>

        </div>
      </Container>
    </section>
  );
};

export default Banner;