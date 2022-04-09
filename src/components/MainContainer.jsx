import React from 'react'
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowComponent from './RowComponent';
const MainContainer=()=> {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <section className='w-full my-6'>
        <div className='w-full flex justify-between items-center'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'> Our Fresh and Healthy fruits</p>
          <div className='hidden md:flex gap-3 items-center'>
            <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
              <MdChevronLeft className='text-lg text-white'/>
            </motion.div>
            <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'>
              <MdChevronRight className='text-lg text-white'/>
            </motion.div>
          </div>
        </div>
        <RowComponent flag={true}/>
      </section>
    </div>
  )
}

export default MainContainer