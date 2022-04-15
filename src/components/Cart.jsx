import React, { useEffect, useState } from 'react'
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const Cart = ({ item }) => {
    const [{cartItems }, dispatch] = useStateValue();
    const [qty, setQty] = useState(1);
    const [items, setItems] = useState([]);

    const cartDispatch = () => {
        localStorage.setItem('cartItems', JSON.stringify(items));
        dispatch({
            type: actionType.SET_CART_INFO,
            cartItems: items,
        });
    }
    const updateQty = (action,id) => {
        if (action === 'add') {
            setQty(qty + 1);
            cartItems.map((i) => {
                if (i.id === id) {
                    i.qty += 1;
                }
            });
            cartDispatch();
        } else {
            if (qty == 1) {
                setItems(cartItems.filter((i) => i.id !== id));
                cartDispatch();
            } else {
                setQty(qty - 1);
            cartItems.map((i) => {
                if (i.id === id) {
                    i.qty -= 1;
                }
            });
                cartDispatch();
            }
        }
    }
    useEffect(() => {
        setItems(cartItems);
    }, [qty]);
  return (
           
              <div className='p-1 w-full px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                      <img src={item.imageURL}
                          className='w-20 h-20 max-w-[60px] rounded-full object-contain' alt="" />
                      {/* name section  */}
                      <div className='flex flex-col gap-2 '>
                          <p className='text-base text-gray-50'>{item.title}</p>
                          <p className='text-sm block text-gray-300 font-semibold'>Rs- {parseFloat(item.price * qty)}</p>
                      </div>
                      <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                          <motion.div
                          onClick={()=>updateQty('remove',item?.id)}
                              whileTap={{ scope: 0.7 }}>
                              <BiMinus className='text-gray-50'/>
                          </motion.div>
                              <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>{qty}</p>
                          <motion.div
                          onClick={()=>updateQty('add',item?.id)}
                              whileTap={{ scope: 0.7 }}>
                              <BiPlus className='text-gray-50'/>
                          </motion.div>
                      </div>
                      </div>
                   
  )
}

export default Cart