import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { MdFastfood,MdCloudUpload,MdDelete,MdFoodBank,MdAttachMoney } from 'react-icons/md';
import { categories } from '../utils/data';
import { Loader } from './index';
import { storage } from '../firebase.config';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { saveItem } from '../utils/firebaseFunctions';
import { useStateValue } from '../context/StateProvider';
import { getAllItems } from '../utils/firebaseFunctions';
import { actionType } from '../context/reducer';
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
  const [{ }, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setloading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (error) => { 
      setfields(true);
      setmsg('Error while uploading : Try Again !');
      setalert('danger');
      setTimeout(() => {
        setfields(false)
        setloading(false)
      }, 3000);
    }, () => { 
      getDownloadURL(uploadTask.snapshot.ref).then((downloadurl) => {
        setimage(downloadurl);
        setloading(false)
        setfields(true)
        setmsg('Image Upload Successfull !');
        setalert('success')
        setTimeout(() => {
          setfields(false)
        },3000)
      })
    });
  };
  const deleteImage = () => { 
    setloading(true);
    const deleteRef = ref(storage, image);
    deleteObject(deleteRef).then(() => {
      setimage(null);
      setloading(false);
      setfields(true);
      setimage('image deleted successfully');
      setalert('success');
      setTimeout(() => {
        setfields(false);
      }, 3000);

    })
  }
  const saveDetail = () => {
    setloading(true)
    try {
      if (!title || !category || !image || !calories || !price) {
        
        setfields(true)
        setmsg("Required fields can not be empty !");
        setalert("danger");
        setTimeout(() => {
          setfields(false)
          setloading(false)
        }, 3000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title,
          imageURL: image,
          category,
          calories,
          qty: 1,
          price
        }
        saveItem(data)
        setloading(false);
        setfields(true);
        setimage('Data save successfully');
        setalert('success');
        setTimeout(() => {
          setfields(false);
        }, 3000);
      }
    } catch (error) {
      setfields(true);
      setmsg('Error while uploading : Try Again !');
      setalert('danger');
      setTimeout(() => {
        setfields(false)
        setloading(false)
        clearData();
      }, 3000);
    }
  };

  const getData = async () => {
    await getAllItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  }
  const clearData = () => {
    setTitle("");
    setimage(null);
    setcalories("");
    setprice("");
    setcalories("Select Category");
  };
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
          <input type="text" required value={title} placeholder="Give me a title..." onChange={(e)=>setTitle(e.target.value)}
          className='w-full h-full text-lg bg-transparent  outline-none border-none text-textColor'/>
        </div>
        <div className='w-full'>
          <select className='outline-none w-full text-base border-b-2 border-gray-200 rounded-md p-2 cursor-pointer' onChange={(e)=> setcategory(e.target.value)}>
            <option value="other" className='bg-white'>Select Category</option>
            {categories && categories.map((item) => (
              <>
              <p>{item.urlParamName}</p>
              <option className='text-base border-0 outline-none capitalize text-headingColor bg-white' key={item.id} value={item.urlParamName}>{item.name}</option>
            </>
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
            <input type="text" required placeholder='price' value={price} onChange={(e)=>setprice(e.target.value)} className='w-full h-full text-lg bg-transparent outline-none placeholder:text-gray-400' />
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