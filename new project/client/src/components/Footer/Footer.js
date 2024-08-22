import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section className='f-wrapper'
    initial={{opacity: 0, y: 80}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1.1, ease:"easeInOut"}}
    >
      <div className='paddings innerWidth flexCenter f-container'>

        {/* Left Side */}
        <div className='flexColCenter f-column'>
          <img src="./images/logo party.png" alt="Logo" className="f-logo"/>
          <span className='secondaryText'>
            Our vision is to make all people
          </span>
        </div>

        {/* Middle Column 1 */}
        <div className='flexColCenter f-column'>
          <span className='primaryText'>TDP</span>
          <span className='secondaryText'>History Of TDP</span>
          <span className='secondaryText'>Organization Structure</span>
          <span className='secondaryText'>Elected Representatives</span>
        </div>

        {/* Middle Column 2 */}
        <div className='flexColCenter f-column'>
          <span className='primaryText'>Achievements</span>
          <span className='secondaryText'>#_CM_@AP</span>
          <span className='secondaryText'>3 Times</span>
          <span className='secondaryText'>Organization Structure</span>
          <span className='secondaryText'>Elected Representatives</span>
        </div>

        {/* Right Side */}
        <div className='flexColCenter f-column'>
          <span className='primaryText'>Address</span>
          <span className='secondaryText'>HYDERABAD</span>
          <span className='secondaryText'>No 367/369, HYD</span>
          <span className='secondaryText'>TELANGANA - 507768</span>
          <span className='secondaryText'>+91 - 044 - 24348258</span>
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6161738308257!2d80.25124371480078!3d13.03681859081268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2a8b6bda1%3A0x238a06d0f34f6b73!2sAnna%20Arivalayam!5e0!3m2!1sen!2sin!4v1633953438532!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Anna Arivalayam"
              ></iframe>
        </div>

      </div>
    </motion.section>
  );
};

export default Footer;
