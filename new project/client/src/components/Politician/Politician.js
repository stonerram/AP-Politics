import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import './Politician.css';
import { sliderSettings } from '../../utils/common';
import { motion } from "framer-motion";



const Politician = () => {
  const customSliderSettings = {
    ...sliderSettings,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30, // Increase space between slides for larger screens
      },
    },
  };

  return (
    <section className="r-wrapper">
      <div className="padding innerWidth r-container">
        <div className="r-head flexColStart">
          <span style={{ marginLeft: '-0.5rem' }} className="orangeText"><b><u>TDP Party</u></b></span>
          <span style={{ marginLeft: '-0.5rem' }} className="primaryText">Popular Leaders</span>
        </div>

        <Swiper {...customSliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <motion.div 
              className="flexColStart r-card"
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.2, ease:"easeInOut"}}
              // whileHover={{scale:1.05}}
              // initial={{y: "2rem", opacity: 0}}
              // animate= {{y: 0, opacity: 1}}
              // transition={{
              //   duration: 2,
              //   type: "spring"
              // }}

              >
                <img src={card.image} alt={card.name} />
                <span className="r-role">{card.role}</span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.details}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Politician;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
