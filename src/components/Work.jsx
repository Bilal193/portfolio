import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import data from "../assets/data.json";


const Work = () => {
  return (
    <div id='work'>
        <h2>Work</h2>
        <section>
            <article>
                <Carousel
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                showThumbs={false}
                interval={2000}
                infiniteLoop={true}
                autoPlay={false}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                      <div
                        className={`${
                          hasPrev ? 'absolute' : 'hidden'
                        } buttondiv`}
                        onClick={clickHandler}
                      >
                        <FaArrowCircleLeft className="previcon-style" />
                      </div>
                    );
                  }}
                  renderArrowNext={(clickHandler, hasNext) => {
                    return (
                      <div
                        className={`${
                          hasNext ? 'absolute' : 'hidden'
                        } buttondivnext`}
                        onClick={clickHandler}
                      >
                        <FaArrowCircleRight className="nexticon-style" />
                      </div>
                    );
                  }}
                >
                    {
                        data.projects.map(i=>(
                            <div key={i.title} className="workItem">
                                 <h3>{i.title}</h3>
                                 <a href={i.url} target='blank'>
                                <img src={i.imgSrc} alt={i.title} />
                                </a>
                            </div>
                        ))
                    }

                </Carousel>
            </article>
        </section>

    </div>
  )
}

export default Work