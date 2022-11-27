import React from 'react';
import {AiOutlineMenu} from "react-icons/ai"


const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
    <button onClick={()=>setMenuOpen(!menuOpen)} className='navBtn'><AiOutlineMenu/></button>
    <nav>
    <NavContent setMenuOpen={setMenuOpen} />
    
    </nav>
    </>
  )
};
export const ExpendableNAvBar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`ExpendableNAvBar ${menuOpen?"navPhoneOpen":""}`}>
        <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  )
};


export const NavContent=({setMenuOpen})=>(
<>
<h2>Muhammad Bilal</h2>
    <div>
        <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
        <a onClick={()=>setMenuOpen(false)} href="#work">Work</a>
        <a onClick={()=>setMenuOpen(false)} href="#timeline">Experience</a>
        <a onClick={()=>setMenuOpen(false)} href="#services">services</a>
        <a onClick={()=>setMenuOpen(false)} href="#testimonial">Testimonial</a>
        <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:bilalarshad.me38@gmail.com">
        <button>Email</button>
    </a>
</>
)





export default Header