import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import bilallogo from '../assets/logo bilal.png';


const Header = ({menuOpen,setMenuOpen}) => {
if(menuOpen){
  document.body.style.overflow="hidden";
}
else{
  document.body.style.overflow="auto";
}

  return (
    <>
    <button onClick={()=>setMenuOpen(!menuOpen)} className={`navBtn ${menuOpen?"navBtnOpen":""}`}><AiOutlineMenu/></button>
    <nav className='page-width'>
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
<a className='show-mob' onClick={()=>setMenuOpen(false)} href="#home"><img src={bilallogo} alt="" /></a>

    <div>
        <a onClick={()=>setMenuOpen(false)} href="#home">Home</a>
        <a onClick={()=>setMenuOpen(false)} href="#work">Portfolio</a>
        <a onClick={()=>setMenuOpen(false)} href="#timeline">Experience</a>
        <a onClick={()=>setMenuOpen(false)} href="#services">Services</a>
        <a onClick={()=>setMenuOpen(false)} href="#testimonial">Testimonials</a>
        <a onClick={()=>setMenuOpen(false)} href="https://www.bilalbytes.com/blogs" target='blank'>Blogs</a>
    </div>
    <a onClick={()=>setMenuOpen(false)} href="#contact">
        <button>Contact</button>
    </a>
</>
)





export default Header