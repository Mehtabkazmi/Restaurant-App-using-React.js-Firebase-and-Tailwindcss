import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MdFastfood,MdCloudUpload,MdDelete,MdFoodBank,MdAttachMoney } from 'react-icons/md';
import { categories } from '../utils/data';
import {Loader} from './index';
const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setcalories] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState(null);
  const [image, setimage] = useState(null);
  const [fields, setfields] = useState(false);
  const [alert, setalert] = useState("danger");
  const [msg, setmsg] = useState(null);
  const [loading, setloading] = useState(false);

  const uploadImage = () => { }
  const deleteImage = () => { }
  const saveDetail=()=>{}
  return (
    <div className='w-full min-h-screen flex items-center justify-center gap-4'>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col
      items-center justify-center'>
        {fields && (
          <motion.p className={`w-full p-2 rounded-lg text-center ${
            alert === "danger"
            ? "bg-red-400 text-rose-800"
            : "bg-emerald-400 text-emerald-800"
            }`}> {msg}
          </motion.p>
        )}
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-xl text-gray-700' />
          <input type="text" required value={title} placeholder="Give me a title..."
            onChange={(e)=>setTitle(e.target.value)}
          className='w-full h-full text-lg bg-transparent  outline-none border-none text-textColor'/>
        </div>
        <div className='w-full'>
          <select className='outline-none w-full text-base border-b-2 border-gray-200 rounded-md p-2 cursor-pointer'>
            <option value="other" className='bg-white'>Select Category</option>
            {categories && categories.map((item) => (
              <option className='text-base border-0 outline-none capitalize text-headingColor bg-white' key={item.id} value={item.urlParamName}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className='mt-2 group flex justify-center items-center flex-col border-2 border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg'>
          {loading ? (<Loader />) : (
            <>
              {!image ? (
                <>
                  <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                      <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700 ' />
                      <p className='text-gray-500 hover:text-gray-700'>Click here to Upload</p>
                    </div>
                    <input type="file" name='uploadimage' className='w-0 h-0' accept='image/*' onChange={uploadImage}/>
                  </label>
                </>
              ) : (<>
                  <div className='relative h-full'>
                    <img src={image} alt="upload image" className='w-full h-full object-cover' />
                    <button type='button' className='absolute button-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out' onClick={deleteImage}>
                      <MdDelete className='text-white'/>
                    </button>
                  </div>
              </>)}
            </>
          )}
        </div>
        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input type="text" required placeholder='Calories' value={calories} onChange={(e)=>setcalories(e.target.value)} className='w-full h-full text-lg bg-transparent outline-none placeholder:text-gray-400' />
          </div>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input type="text" required placeholder='Calories' value={price} onChange={(e)=>setprice(e.target.value)} className='w-full h-full text-lg bg-transparent outline-none placeholder:text-gray-400' />
          </div>
        </div>
        <div className='flex items-center w-full'>
          <button type='button' className='ml-0 md:ml auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold mt-2' onClick={saveDetail}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer