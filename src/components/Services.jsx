import React from 'react';
import { motion } from "framer-motion";
import {AiFillIeCircle} from "react-icons/ai";
import { SiAdobexd, SiBlender } from "react-icons/si";

const Services = () => {
    const animations={
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity:0,
            x:"-100%",
        },
        twoAndThree:{
            opacity:0,
            y:"-100%",
        },
        three:{
            opacity:0,
            x:"100%",
        },
        
    };
    return (
        <div id='services'>
            <h2>Services</h2>
            <section>
                <motion.div className='serviceBox1' whileInView={animations.whileInView} initial={animations.one} >
                    <h3>+04</h3>
                    <p>Months Experience</p>

                </motion.div>
                <motion.div className='serviceBox2' whileInView={animations.whileInView} initial={animations.twoAndThree}>
                    <AiFillIeCircle/>
                    <span>Web Development</span>
                </motion.div>
                <motion.div className='serviceBox3' whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{
                    delay:0.3,
                }
                } >
                    <SiAdobexd/>
                    <span>Web Design</span>
                </motion.div>
                <motion.div className='serviceBox4' whileInView={animations.whileInView} initial={animations.four} >
                <SiBlender/>
                    <span>3d Product Design</span>
                </motion.div>
                
            </section>
        </div>

    )
}

export default Services