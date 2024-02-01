import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import me from "../assets/myimg.png";
  import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Muhammad Bilal</h2>
        <p>Success is the sum of small efforts, repeated day in and day out.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.linkedin.com/in/bilalarshad786/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://wa.me/923448725393?text=Hello%2C%20I%20have%20a%20question%20related%20to%20your%20services." target="blank">
            <IoLogoWhatsapp />
          </a>
          <a href="https://github.com/Bilal193" target="blank">
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;