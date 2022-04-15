import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import Cart from './Cart';
const CartComponent = () => {
    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
    const showCart=() => {
    dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }
    const clearCart = () => {
        localStorage.clear();
    }
  return (
      <motion.div 
          initial={{opacity:0,x:200}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:200}}
          className='fixed top-0 right-0 h-screen w-full md:w-350 bg-white drop-shadow-md flex flex-col z-[100]'>
          <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
              <motion.div onClick={showCart}
                  whileTap={{ scale: 0.7 }}>
                  <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
              </motion.div>
              <p className='text-textColor font-semibold  text-lg'>Cart</p>
              <motion.div onClick={()=>clearCart} whileTap={{ scale: 0.7 }}
                  className="flex items-center p-1 gap-2 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base">
                  Clear <RiRefreshFill/> {" "}
              </motion.div>
          </div>
          {cartItems && cartItems.length > 0 ? (
          <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
              <div className='w-full h-340 md:h-42 p-6 py-12 flex flex-col gap-3 overflow-y-scroll scrollbar-none'> 
                  {/* cart item  */}
                  {cartItems && cartItems.map((item) => (
                        <Cart key={item.id} item={item}/>
                  ))}
              </div>
              {/* cart item total  */}
              <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                  <div className='w-full flex items-center justify-between'>
                      <p className='text-gray-400 text-lg'>Sub Total</p>
                      <p className='text-gray-400 text-lg'>Rs- 200</p>
                  </div>
                  <div className='w-full flex items-center justify-between'>
                      <p className='text-gray-400 text-lg'>Delivery</p>
                      <p className='text-gray-400 text-lg'>Rs- 100</p>
                  </div>

                  <div className='w-full border-b border-gray-600 my-2'></div>

                  <div className='w-full flex items-center justify-between'>
                      <p className='text-gray-400 text-lg'>Total</p>
                      <p className='text-gray-400 text-lg'>Rs- 300</p>
                      </div>
                      {user && (
                            <motion.button whileTap={{scale:0.8}}
                                type="button"
                                className='w-full p-2 rounded-full bg-yellow-600 text-gray-50 text-lg my-2 hover:shadow-lg'
                            > Checkout
                            </motion.button>
                      )}
                  
              </div>
              </div>
          ):(
                  <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                      <p className='text-xl text-textColor font-semibold'> Cart is empty</p>
          </div>
          )}
    </motion.div>
  )
}

export default CartComponent