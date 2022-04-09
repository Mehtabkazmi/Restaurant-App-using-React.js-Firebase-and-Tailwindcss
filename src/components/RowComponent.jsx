import React from 'react'
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';
const RowComponent=({flag})=>{
    return (
        <div className={`w-full my-12 bg-cardOverlay ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            <div className='w-300 md:w-340 h-auto bg-gray-100 rounded-lg p-2 my-12 backdrop-blur-lg hover:shadow-lg'>
                <div className='w-full flex justify-between items-center '>
                    <motion.img whileHover={{scale:1.2}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg"
                        className='w-32 -mt-8 drop-shadow-2xl transition-all ease-in-out' alt="../img/cu1.png" />
                    <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-full bg-red-600 flex justify-center items-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>
                <div className='w-full flex flex-col gap-4 justify-end items-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>
                        Chocolate & Vanilla
                    </p>
                    <p className='-mt-3 text-sm text-gray-500'>45 Calories</p>
                    <p className='-mt-3 text-lg text-headingColor font-semibold'>
                        <span className='text-sm text-red-500'>Rs-</span> 200
                    </p>
                </div>
            </div>
        </div>
  )
}

export default RowComponent