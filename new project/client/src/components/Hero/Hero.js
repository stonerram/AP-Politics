import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from "react-countup";
import {motion} from 'framer-motion'

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className='hero-wrapper'>
      <Slider {...settings} className='hero-slider'>
        <div>
          <img src='https://as1.ftcdn.net/v2/jpg/05/45/19/54/1000_F_545195477_KyFXYpHfwpegluw8et1DfDAHWDn0rrbY.jpg' alt='Slide 1' />
        </div>
        <div>
          <img src='https://e1.pxfuel.com/desktop-wallpaper/502/121/desktop-wallpaper-of-tdp-party-workers-with-placards-and-flags-in-a-rally-tdp.jpg ' alt='Slide 2' />
        </div>
        <div>
          <img src='https://www.janasenaparty.org/static/img/election_symbol_1.jpg' alt='Slide 3' />
        </div>
        <div>
          <img src='https://i.pinimg.com/564x/b3/02/9d/b3029dccffe820533dae617e0f32ec6a.jpg' alt='Slide 4' />
        </div>
        <div>
          <img src='https://wallpapers.com/images/high/janasena-party-full-parade-vy842v2mr5x9obz9.webp' alt='Slide 4' />
        </div>
        <div>
          <img src='https://www.pmindia.gov.in/wp-content/uploads/2024/08/H20240817164369.jpg' alt='Slide 4' />
        </div>
        <div>
          <img src='https://mir-s3-cdn-cf.behance.net/projects/404/52aaf6193531347.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.jpg' alt='Slide 4' />
        </div>
      </Slider>
      <div className='paddings innerWidth flexCenter hero-container'>
        {/* left side */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle'/>
            <motion.h1
              initial={{y: "2rem", opacity: 0}}
              animate= {{y: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: "spring"
              }}

            >ANDHRA PRADESH<br/> KUTAMI <br/> POLITICS</motion.h1>
          </div>

          <div className='flexColStart hero-des'>
            <motion.span
             initial={{y: "2rem", opacity: 0}}
             animate= {{y: 0, opacity: 1}}
             transition={{
               duration: 2,
               type: "spring"
             }}

            > Democrats think the glass is half full. Republicans think the glass is theirs</motion.span><br/>
            <motion.span 
             initial={{y: "2rem", opacity: 0}}
             animate= {{y: 0, opacity: 1}}
             transition={{
               duration: 2,
               type: "spring"
             }}

            >Forget all difficulties in finding a place for you</motion.span>
          </div>
          
          <motion.div 
           initial={{y: "2rem", opacity: 0}}
           animate= {{y: 0, opacity: 1}}
           transition={{
             duration: 2,
             type: "spring"
           }}

          className='flexCenter search-bar'>
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type='text' placeholder='Search location' />
            <button className='Sbutton'>Search</button>
          </motion.div>
          
          <motion.div
          initial={{y: "2rem", opacity: 0}}
          animate= {{y: 0, opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
          className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span style={{color:"orange"}}>+</span><br/>
                <span className='secondaryText1'>Premium Politics</span>
              </span>
            </div>

            <div className='flexColCenter stat'>
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span style={{color:"orange"}}>+</span><br/>
                <span className='secondaryText1'>The Youth</span>
              </span>
            </div>

            <div className='flexColCenter stat'>
              <span>
                <CountUp end={28} />
                <span style={{color:"orange"}}>+</span><br/>
                <span className='secondaryText1'>Leaders</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* right side */}
        {/* <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src='./images/h2.webp' alt='Hero' />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;