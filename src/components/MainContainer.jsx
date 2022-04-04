import React from 'react'
import Delivery from '../img/delivery.png';

const MainContainer=()=> {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 gap-6 flex-1 flex flex-col items-start md:items-center justify-center'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} alt="delivery" className='w-full h-full object-contain'/>
          </div>
        </div>
        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in {" "}
          <span className='text-orange-600 text-[3rem]'>Your City</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left'>
          orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nem
        </p>
        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg
        hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
      </div>
      <div className='py-2 bg-blue-400 flex-1'></div>
    </div>
  )
}

export default MainContainer