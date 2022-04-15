import React, { useEffect, useState } from 'react'
import { IoFastFood } from 'react-icons/io5';
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowComponent from './RowComponent';
import { useStateValue } from '../context/StateProvider';
const MenuContainer = () => {
    const [filter, setFilter] = useState('Chicken');
    const [{ foodItems }, dispatch] = useStateValue();
  return (
      <section className='w-full my-6'>
          <div className='w-full flex flex-col items-center justify-center'>
              <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 mr-auto'> Our Famous Dishes</p>
              <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none' >
                  {categories && categories.map((item) => (
                      <motion.div
                      whileTap={{scale:0.75}}    key={item.id} className={`group ${filter === item.urlParamName ? 'bg-cartNumBgColor' : 'bg-card'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex hover:bg-red-600 flex-col gap-3 items-center justify-center duration-125 transition-all ease-in-out`}
                      onClick={()=>setFilter(item.urlParamName)}>
                      <div className={`w-10 h-10 rounded-full ${filter === item.urlParamName? 'bg-card' : 'bg-cartNumBgColor'} group-hover:bg-card flex items-center justify-center`}>
                          <IoFastFood className={`${filter === item.urlParamName? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`} />
                      </div>
                      <p className={`text-sm ${filter === item.urlParamName? 'text-white' : 'text-textColor'} group-hover:text-white`}>
                          {item.name}
                      </p>
                  </motion.div>
                  ))}
              </div>
              <RowComponent flag={false} data={foodItems?.filter((item)=>item.category===filter)}/>
          </div>
    </section>
  )
}

export default MenuContainer