import React, { useState } from 'react'
import img from '../ASSESETS/eGENCY.png'
import bike from '../ASSESETS/bike.png'
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from "framer-motion";

function Home() {
    const [Menuopen, setMenuopen] = useState(false);
    const getMenuStyles = (Menuopen) => {
        if(document.documentElement.clientWidth <= 800){
            console.log({right: !Menuopen && "-100%"});
            return{right: !Menuopen && "-100%"}
        }
    }
    
  return (
<header>
    <section className="flex justify-between items-center p-5">
       <img src={img} alt="" />
    <div className='flex gap-4 font-semibold pointer wawu' style={getMenuStyles(Menuopen)} >
        <a href="">About</a>
        <a href="">Product</a>
        <a href="mailto:onyekweremichael55@gmail.com">Contact</a>
        <a href="">Help</a>
    </div>
 

       <div className='flex gap-3 mr-4 jb'>
           <p className='p-0.5 sign font-semibold'>Sign in</p>
           <button className='text-white p-1 rounded-t rounded-b font-semibold'>Sign up</button>
        </div>

        <button className='bars block md:hidden sm:block' onClick={()=>setMenuopen((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
        </button>
    </section>

   


    <motion.section  
    variants={{
        hidden: {opacity: 0, y: -100 },
        visible: {opacity: 1, y:0 },
    }}
    initial ="hidden"
    animate ="visible"
    transition={{duration: 0.5, delay: 0.25}}
  className='grid grid-cols-2 items-center jxx'>
        <img src={bike} alt="" />
        <div>
            <h1 className='text-5xl font-bold we'>We scratch, build and play together</h1>
            <div className="pt-4">
            <p className=' lorem  font-semibold text-lg scra'>We want you to enjoy your travels.
                This is why we don't change any
                fees on purchase while you're
                abroad. We'll even show you...</p>
            </div>
            
        <button className='button border-2 butt mt-10 text-white p-2 font-bold rounded-t rounded-b'>Contact us</button>
        </div>
    </motion.section>
</header> 
 )
}

export default Home;
