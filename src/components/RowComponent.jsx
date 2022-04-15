import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const RowComponent = ({ flag, data,scroll }) => {
    const rowContainer = useRef();
    const [{ cartItems }, dispatch] = useStateValue();
    const [items, setitems] = useState([]);
    const addtocart = () => {
        dispatch({
            type: actionType.SET_CART_INFO,
            cartItems: items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    }
    useEffect(() => { addtocart() }, [items]);
    useEffect(() => {
        rowContainer.current.scrollLeft += scroll;
    }, [scroll]);
    return (
        <div ref={rowContainer} className={`w-full flex  items-center gap-3 my-12 ${flag ? "overflow-x-scroll scrollbar-none scroll-smooth" : "overflow-x-hidden flex-wrap"}`}>
            {data && data.map((item) => (
                <div key={item.id} className='w-275 h-[175] min-w-[275px] md:w-300 md:min-w-[300px] bg-gray-100 rounded-lg p-2 my-12 backdrop-blur-lg hover:shadow-lg'>
                <div className='w-full flex justify-between items-center '>
                    <motion.img whileHover={{scale:1.2}} src={item.imageURL}
                        className='w-32 -mt-8 drop-shadow-2xl transition-all ease-in-out' alt="../img/cu1.png" />
                        <motion.div 
                            onClick={()=>setitems([...cartItems, item])}
                            whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-full bg-red-600 flex justify-center items-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>
                <div className='w-full flex flex-col gap-4 justify-end items-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>
                        {item.title}
                    </p>
                    <p className='-mt-3 text-sm text-gray-500'>{item.calories}</p>
                    <p className='-mt-3 text-lg text-headingColor font-semibold'>
                        <span className='text-sm text-red-500'>Rs-</span> {item.price}
                    </p>
                </div>
            </div>
            ))}
        </div>
  )
}

export default RowComponent