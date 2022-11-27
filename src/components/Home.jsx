import React, { useRef } from 'react'

import { animate, motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/logo.png"

const Home = () => {
    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const animationClientsCount = () => {
        animate(0, 15, {
            duration: 1,
            onUpdate: (e) => (clientCount.current.textContent = e.toFixed()),

        });
    };
    const animationProjectsCount = () => {
        animate(0, 20, {
            duration: 1,
            onUpdate: (e) => (projectCount.current.textContent = e.toFixed()),

        });
    }


    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        }
    }
    return (
        <div id='home'>
            <section>
                <div>

                    <motion.h1 {...animations.h1}>
                        Hi, I'm <br /> Muhammad Bilal
                    </motion.h1>

                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creater", "An Engineer"],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        wrapperClassName: "typewriterpara"
                    }}
                    />

                    <div>
                        <a href="mailto:bilalarshad.me38@gmail.com">Hire Me</a>
                        <a href="#work">Projects <BsArrowUpRight /></a>
                    </div>
                    <article>
                        <p>
                            +<motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>
                        </p>
                        <span>Clients Worldwide</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={animationProjectsCount} ref={projectCount}>


                                </motion.span>
                            </p>
                            <span>Jobs Completed</span>
                        </article>
                        <article data-special>
                            <p>
                                <span>Contact</span>
                            </p>
                            <span>bilalarshad.me38@gmail.com</span>
                        </article>
                    </aside>


                </div>
            </section>
            <section>
                <img src={me} alt="Bilal Arshad" />
            </section>
            <BsChevronDown />

        </div>
    )
}

export default Home