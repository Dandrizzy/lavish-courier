import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { Form, useNavigate } from 'react-router-dom';

const Intro = () => {
 const navigate = useNavigate();

 const [alphaCode, setAlphaCode] = useState('');

 const { register, handleSubmit, formState: { errors } } = useForm();

 const onSubmit = data => {
  setAlphaCode(data.trackingId);
  navigate(`/${alphaCode}`);
 };


 return (
  <div className=" grid p-4 bg-[url('/8.jpg')] bg-center min-h-screen">
   <Form onSubmit={handleSubmit(onSubmit)} className=" flex justify-center items-center">

    <input {...register('trackingId', {
     minLength: 3, required: true
    })} type="text" placeholder="Input tracking ID / Alpha code" className=" text-neutral-900 p-4 bg-slate-100 w-full sm:max-w-md lg:max-w-2xl outline-none" />
    <button type='submit' disabled={errors.trackingId} className=' disabled:cursor-not-allowed cursor-pointer p-5 bg-neutral-100 text-neutral-900'>
     <FaSearch />
    </button>
   </Form>

   <div className=' text-center'>
    Track shipment / Find and ship a product using Alpha code
   </div>
  </div>
 );
};

export default Intro;