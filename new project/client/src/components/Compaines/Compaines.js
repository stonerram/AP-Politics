import React from 'react'
import './Compaines.css'
import { motion } from "framer-motion";


const Compaines = () => {
  return (
   <section className='c-wrapper' >
    <motion.div
     className=' c-container'
     initial={{opacity: 0, y: 80}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 1.1, ease:"easeInOut"}}
     >
    <img className=' c-container1'  src='./images/c1.png' alt='BJP'></img>
    <img className=' c-container1' src='./images/c2.png' alt='TDP'></img>
    <img className=' c-container1' src='./images/c4.png' alt='JSP'></img>
    <img className=' c-container1' src='./images/c5.png' alt='JSP'></img>
    </motion.div>
   </section>
  )
}

export default Compaines
