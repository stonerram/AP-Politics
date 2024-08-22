import React from 'react'
import './GetStarted.css'
import {motion} from 'framer-motion'

const GetStarted = () => {
  return (
    <motion.section className='g-wrapper'
    initial={{opacity: 0, y: 80}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1.1, ease:"easeInOut"}}
    >
    <div className='paddings innerWidth g-container'>
      <div className='flexColCenter inner-container'>
        <span  className='primaryText'><b>Get Started With Politics</b></span>
        <span className='secondaryText'>
            Subscribe and find super attractive leaders from Politics<br/>
            Find Your Future <b ><u>LEADER..!</u></b>
        </span>
        <button className='button'>
            <a href='mailto:stonerram488@gmail.com'>Get Started</a>
        </button>
       

      </div>
    </div>
    </motion.section>
  )
}

export default GetStarted
