import React from 'react'
import Delivery from '../img/delivery.png';
import Herobg from '../img/heroBg.png';
import { heroData } from '../utils/data';
const HomeContainer = () => {
    
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
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
          <div className='py-2 flex-1 flex items-center relative'>
              <img src={Herobg} alt="big picture" className='ml-auto h-420 w-full lg:w-auto lg:h-650' />
              <div className='w-full h-full top-0 left-0 absolute flex items-center justify-center py-4 lg:px-10 gap-4 flex-wrap'>
                  {heroData && heroData.map(item => (
                      <div key={item.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                      <img src={item.imageSrc} alt="I1" className='w-20 lg:w-40 -mt-10 lg:-mt-20 ' />
                          <p className='text-base lg:text-xl font-semibold text-textColor mt-4'>{item.name}</p>

                          <p className='text-[12px] lg:text-sm my-1 lg:my-3 font-semibold text-headingColor'>{ item.decp}</p>
                      <p className='text-sm font-semibold text-headingColor'>
                          <span className='text-xs text-red-600'>Rs</span> {item.price}
                      </p>
                  </div>
                  ))}
            </div> 
          </div>
    </section>
  )
}

export default HomeContainer