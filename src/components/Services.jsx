import React from 'react';
import { motion } from "framer-motion";
import { FaShopify } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { BsGraphUp } from "react-icons/bs";

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
                    <h3>+02</h3>
                    <p>Years Experience</p>

                </motion.div>
                <motion.div className='serviceBox2' whileInView={animations.whileInView} initial={animations.twoAndThree}>
                    <FaShopify/>
                    <span>Shopify Development</span>
                </motion.div>
                <motion.div className='serviceBox3' whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{
                    delay:0.3,
                }
                } >
                    <div className='mernstack'><SiMongodb/> <SiExpress/> <SiReact/> <SiNodedotjs/></div>
                    
                    <span>MERN Stack</span>
                </motion.div>
                <motion.div className='serviceBox4' whileInView={animations.whileInView} initial={animations.four} >
                <BsGraphUp/>
                    <span>Conversion & Speed Optimization</span>
                </motion.div>
                
            </section>
        </div>

    )
}

export default Services