import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Img1 from "../../assets/front-view-beautiful-dog-with-copy-space.jpg";
import Img2 from "../../assets/group-portrait-adorable-puppies.jpg";
import Img3 from "../../assets/group-portrait-five-adorable-puppies.jpg";

export default function Carousel() {
  const [active, setActive] = useState(0);

  const slides = [
    {
      img: Img1,
      text: "Find Your Furry Friend Today!",
      color: "text-white",
    },
    {
      img: Img2,
      text: "Adopt, Don’t Shop — Give a Pet a Home.",
      color: "text-amber-600",
    },
    {
      img: Img3,
      text: "Because Every Pet Deserves Love and Care.",
      color: "text-amber-600",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      onSlideChange={(swiper) => setActive(swiper.activeIndex)}
      className="w-full h-120"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />

          {active === index && (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={`absolute bottom-50 left-1/2 -translate-x-1/2 text-5xl font-bold text-center drop-shadow-lg ${slide.color}`}
            >
              {slide.text}
            </motion.h2>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
