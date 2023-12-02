import React from 'react'
import reader from "../ASSESETS/1 1.png";
import run from "../ASSESETS/running.png";
import read from "../ASSESETS/reader.png";
import seed from "../ASSESETS/seed.png";
import circle from "../ASSESETS/circle.png";
import { FaCartPlus, FaMailBulk, FaTicketAlt, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import board from '../ASSESETS/board.png';
import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';


 
function Main() {
    const dave = [
        {
            name: "Audit",
          text: " We want you to enjoy your travels.This is why we don't change any fees on purchase while you'reabroad. We'even show you...",
            button: "Experienced Team",
        },
        {
            name: "Teamwork",
          text: " We want you to enjoy your travels.This is why we don't change any fees on purchase while you'reabroad. We'even show you...",
            button: "Experienced Team",
        },
        {
            name: "Create",
          text: " We want you to enjoy your travels.This is why we don't change any fees on purchase while you'reabroad. We'even show you...",
            button: "Experienced Team",
        },
        {
            name: "Audit",
          text: " We want you to enjoy your travels.This is why we don't change any fees on purchase while you'reabroad. We'even show you...",
            button: "Experienced Team",
        },
        {
            name: "Audit",
          text: " We want you to enjoy your travels.This is why we don't change any fees on purchase while you'reabroad. We'even show you...",
            button: "Experienced Team",
        },
        {
            name: "Audit",
          text: " We want you to enjoy your travels.This is why we don't change any fees on purchase while you'reabroad. We'even show you...",
            button: "Experienced Team",
        },
       
    ]
  return ( 
    <main>
        <section>
            <img src={seed} alt="" className='w-11 m-0 p-0'/>
        </section>

        <section className='grid grid-cols-2 justify-between items-center p-12 gap-11 ipsum'> 
            <div className='flex flex-col gap-7'>
                <p className='mt-10 bg-blue-800 p-4 ml-4 rounded-t rounded-b nft text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus<br/>recusandaerepellat nam. Facilis pariatur assumenda iusto. Vel hic molestia</p>
                <p className='mt-10 bg-white ml-4 rounded-t rounded-b p-4 nft shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus<br/>recusandae repellat nam. Facilis pariatur assumenda iusto. Vel hic molestia</p>
                <p className='mt-10 bg-white ml-4 rounded-t rounded-b p-4 nft shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus<br/> recusandae repellat nam. Facilis pariatur assumenda iusto. Vel hic molestia</p>
            </div>

            <img src={reader} alt=""/>
        </section>

        <section>
            <div className='flex justify-around items-center backg font-semibold mt-12 p-3 text-2xl gap-10 pl-8 simp'>
                <p>Simplify your online<br/> shipping for free<br/> this month!</p>
                <p>Grow your business<br/> with better shipping<br/> organization</p>
            </div>
        </section>

        <section>
        <div className='flex justify-between items-center gap-4 ml-4 mt-12 p-12 anim font-semibold'>
               <div>
               <FaCartPlus className="text-yellow-900"/>
                <p>Lorem ipsum dolor sit amet consect <br/>etur adipisicing elit. Animi hte.</p>
                </div>
                <div>
                <FaMailBulk className="text-red-900"/>
                <p>Lorem ipsum dolor sit amet consect<br/>etur adipis icing elit. Animi h3d.</p>
                </div>
            </div>
        </section>

        <section>
            <div className='flex justify-around items-center gap-12 p-12 stack font-semibold'>
                <div>
                <FaFacebook className="text-blue-800"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sunt laboriosam ab quibusdam facilis.</p>
                </div>

                <div>
                <FaTwitter className="text-blue-400"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sunt laboriosam ab quibusdam facilis.</p>
                </div>

                <div>
                <FaInstagram className="text-pink-800"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sunt laboriosam ab quibusdam facilis.</p>
                </div>

                <div>
                <FaTicketAlt className="text-orange-700"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sunt laboriosam ab quibusdam facilis.</p>
                </div> 
            </div>
        </section>

        <section className='grid grid-cols-2 justify-between items-center mt-5 Pt-5 YEA gap-10'>
            <img src={run} alt="" />  
              <div>
              <section className='flex justify-end -mt-36'>
            <img src={board} alt="" />
            </section>
             <p className='p-2 font-semibold'>We scratch, play and build together</p>
            <h1 className='text-3xl font-bold pt-2 wed'>We scratch, play and build together</h1>
            <div className="pt-7 suu">
            <p className=' lorem  font-semibold text-lg scraa'>We want you to enjoy your travels.
                This is why we don't change any
                fees on purchase while you're
                abroad. We'll even show you...</p>
            </div>
            </div>
        </section>

        <section className='relative jum pl-9'>
            <img src={read} alt=""/>
            <div className='absolute bottom-64 ju'>
                      <span><input type="text" placeholder='write your mail address'className='rounded p-1 span'/></span>
                      <span><a href="mailto:onyekweremichael55@gmail.com"><button className='ml-4 p-1 rounded text-white sub'>Subscribe</button></a></span>
            </div>
        </section>

        <section className='mt-12 font-semibold text-3xl noo ml-8'>
            <p>The best design for your studio design</p>
        </section>
        <section className='flex justify-between items-center flex-wrap yes'>
        <motion.div whileHover={{scale: 1.1}}
        
        transition={{duration:0.5, delay: 0.25}} className='m-10 w-60 rounded bg-gray-200 yes'>
          <p className='text-3xl font-bold m-3'>Audit</p>
            <p className='text-sm pb-14 m-3'>We want you to enjoy your travels.
                This is why we don't change any
                fees on purchase while you're
                abroad. We'll even show you...
            </p>
            <button className='w-60 rounded-b p-2 butt1'>Experienced Team</button>
        </motion.div>

        <motion.div whileHover={{scale: 1.1}}  className='m-10 w-60 rounded bg-gray-200 yes'>
          <p className='font-bold text-3xl m-3 '>Teamwork</p>
            <p className='text-sm pb-14 m-3'>We want you to enjoy your travels.
                This is why we don't change any
                fees on purchase while you're
                abroad. We'll even show you...
            </p>
            <button className='w-60 rounded-b p-2 butt2'>Experienced Team</button>
        </motion.div>

        <motion.div whileHover={{scale: 1.1}} className='m-10 w-60 rounded bg-gray-200 yes'>
          <p className='font-bold text-3xl m-3 '>Create</p>
            <p className='text-sm pb-14 m-3'>We want you to enjoy your travels.
                This is why we don't change any
                fees on purchase while you're
                abroad. We'll even show you...
            </p>
            <button className='w-60 p-2 rounded-b butt3'>Experienced Team</button>
        </motion.div>
        </section>

    </main>
  )
}

export default Main
