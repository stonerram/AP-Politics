import React from 'react';
import './SocialMedia.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { sliderSettings } from '../../utils/common';
import { motion } from "framer-motion";


const SocialMedia = () => {
  return (
    <motion.section className="r-wrapper"
    initial={{opacity: 0, y: 80}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1.1, ease:"easeInOut"}}
    >
      <div className='padding innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span style={{marginLeft:"-0.5rem"}} className='orangeText'><b><u>Social Stream</u></b></span>
          <span style={{marginLeft:"-0.5rem"}} className='primaryText'>Latest Updates</span>
        </div>

        <Swiper
         {...sliderSettings}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={true}
          pagination={{ clickable: true }}
          className='swiper-container'
        >
           <SliderButton />
           
          <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>PM Shri Narendra Modi's remark...</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/hhcxprbSLws" title="PM Modi Remark" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>PM Shri Narendra Modi's remark...</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/dBpsi6csi68" title="PM Modi Address to the Nation" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>New Video: Latest Updates</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>New Video: Latest Updates</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>New Video: Latest Updates</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>New Video: Latest Updates</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>New Video: Latest Updates</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>

           <SwiperSlide>
            <div className='flexColStart r-card1'>
              <div className='r-role'>New Video: Latest Updates</div>
              <div className='primaryText'>
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  )
}

export default SocialMedia;


const SliderButton = () => {
    const swiper = useSwiper();
    return (
      <div className='flexCenter r-buttons'>
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
  };
