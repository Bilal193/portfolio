import React, { useState } from 'react';
import vg from "../assets/vg.png";
import toast from 'react-hot-toast';
import {motion} from "framer-motion";
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
   
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [disableBtn,setdisableBtn]=useState(false);



    const submitHandler=async(e)=>{
        e.preventDefault();
        setdisableBtn(true);
        
try {
    await addDoc(collection(db,"contactformdata"),{name,email,message})
    setName("");
    setEmail("");
    setMessage("");
        toast.success("Data Submited");
        setdisableBtn(false);
} catch (error) {
    toast.error("Something Went wrong")
    console.log(error);
    setdisableBtn(false);
}

};


const animations={
    form:{
        initial:{
            x:"-100%",
            opacity:0,
        },
        whileInView:{
            x: 0,
            opacity:1,
        }

    },
    button:{
        initial:{
            y:"-100%",
            opacity:0,
        },
        whileInView:{
            y: 0,
            opacity:1,
        },
        transition:{
            delay:0.5,
        }

    },
    
}



  return (
    <div id='contact' className='page-width'>
<section>
    <motion.form {...animations.form} action="" onSubmit={submitHandler}>
        <h2>Contact Me</h2>

        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Your Name' required/>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Your Ymail' required/>
        <input type="text" value={message} onChange={e=>setMessage(e.target.value)} placeholder='Your Message' required/>
        <motion.button disabled={disableBtn} className={disableBtn ? "disableBtn":""} {...animations.button} type='submit'>Submit</motion.button>
    </motion.form>
</section>
<aside>
    <img src={vg} alt="Graphics" />
</aside>


    </div>
  )
}

export default Contact