import React from 'react'
import "./Contact.css"
import { MdCall, MdVideoCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { motion } from "framer-motion";


const Contact = () => {
  return (
  <motion.section className='c-wrapper'
  initial={{opacity: 0, y: 80}}
 whileInView={{opacity: 1, y: 0}}
 transition={{duration: 1.1, ease:"easeInOut"}}
  >
    <div className='paddings innerwidth flexCenter c-container' >

{/* {left side} */}
<div className='flexColStart c-left'>
<span style={{marginLeft:"2rem"}} className='orangeText'><u><b>Party Office</b></u></span>
<span style={{marginLeft:"2rem"}} className='primaryText'>Easy to Contact us</span>
<span style={{marginLeft:"2rem"}} className='secondaryText'>The Telugu Desam Party (TDP; transl. Party of the Telugu Land)[14] is an Indian regional political party with influence in the states of Andhra Pradesh and Telangana.[15] It was founded by Telugu movie star N. T. Rama Rao (NTR) on 29 March 1982[16] and has focused on supporting Telugu people. The party has won a five-time majority in the Andhra Pradesh Legislative Assembly and has emerged as the most successful political outfit in the state's history. It is currently the ruling party in the Andhra Pradesh Legislative Assembly.</span>

<div className='flexColStart contactModes'>
    {/* {first row} */}
    <div className='flexStart row'>
        <div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <MdCall size={25}/>
                </div>
                <div className='flexColStart detail'>
                    <span className='primaryText'> Call</span>
                    <span className='secondaryText'>+91 6281342406</span>
                </div>
            </div>
            <div className='flexCenter button'>Call Now</div>
        </div>


{/* {second mode} */}
<div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25}/>
                </div>
                <div className='flexColStart detail'>
                    <span className='primaryText'> Chat</span>
                    <span className='secondaryText'>+91 6281342406</span>
                </div>
            </div>
            <div className='flexCenter button'>Chat Now</div>
        </div>

    </div>

    {/* {second row} */}

    <div className='flexStart row'>
        <div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <MdVideoCall size={25}/>
                </div>
                <div className='flexColStart detail'>
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>+91 6281342406</span>
                </div>
            </div>
            <div className='flexCenter button'>Video Call Now</div>
        </div>

        
{/* {fourth mode} */}
<div className='flexColCenter mode'>
            <div className='flexStart'>
                <div className='flexCenter icon'>
                    <HiChatBubbleBottomCenter size={25}/>
                </div>
                <div className='flexColStart detail'>
                    <span className='primaryText'> Message</span>
                    <span className='secondaryText'>+91 6281342406</span>
                </div>
            </div>
            <div className='flexCenter button'>Message Now</div>
        </div>

    </div>
</div>
</div>

{/* {right side} */}
<div className='c-right'>
    <div  className='image-container'>
    <img  src='https://media-abn.s3.ap-south-1.amazonaws.com/media/2024/20240428/NDA_Manifesto_bff5d5e1d4.jpg' alt=''/>
    </div>
</div>
    </div>

  </motion.section>
  )
}

export default Contact
