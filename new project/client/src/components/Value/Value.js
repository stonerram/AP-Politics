import React, { useState } from 'react'
import'./Value.css'
import {
    Accordion,AccordionItem,AccordionItemHeading,
    AccordionItemButton,AccordionItemPanel,AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
import { motion } from "framer-motion";


const Value = () => {
    const [className, setClassName] = useState(null)

  return (
<motion.section className='v-wrapper '
 initial={{opacity: 0, y: 80}}
 whileInView={{opacity: 1, y: 0}}
 transition={{duration: 1.1, ease:"easeInOut"}}
>
    <div className='paddings innerWidth flexCenter v-container'>
       
       {/* left side */}

    <div className='v-left'>
    <div className='image-container'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuciWZ_WJH9_yCHLnLj2MLEd8y2aj-s7Wf6fNAygmmugSJJFo1AMZOplJ8vAC9WwFElVk&usqp=CAU'></img>

    </div>

</div>

        {/* right side */}

        <div className='flexColStart v-right'>
        <span className='orangeText'><b><u>Our Positions</u></b></span>
        <span className='primaryText'>Value We Give to You</span>
        <span style={{marginLeft:"0.5rem"}} className='secondaryText'>A political party cannot be all things to all people. It must represent certain fundamental beliefs which must not be compromised to political expediency, or simply to swell its numbers
         
        </span>


        <Accordion style={{border:"none"}} className='accordion'
        allowMultipleExpanded={false}
        preExpanded={[0]}

        >
            {
                data.map((item, i )=> {

                   return (
                               <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter  accordionButton'>
                                        
                                        <AccordionItemState>
                                            {({expanded})=>
                                             expanded 
                                            ? setClassName("expanded") 
                                            :setClassName("collapsed")
                                            
                                           }
                                        </AccordionItemState>
                                        
                                        <div className='flexCenter icon'>{item.icon}</div>
                                        <span className='primaryText'>
                                            {item.heading}
                                        </span>
                                        <div className='flexCenter icon'>
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className='secondaryText' style={{boxShadow:"var(--shadow)", borderRadius:"6px"}}>{item.detail}</p>
                                </AccordionItemPanel>
                                
                               </AccordionItem>
     
                ) 
                })
            }

        </Accordion>

        </div>

    </div>

</motion.section>    
  )
}

export default Value





