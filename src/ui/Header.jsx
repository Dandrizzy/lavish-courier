import { useState } from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { MdClose, MdHome, MdMail, MdMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../Hooks/ScrollToSection';

const Header = () => {
 const navigate = useNavigate();
 const [open, setOpen] = useState(false);
 return (
  <div className=' md:hidden block'>
   <div className=" items-center flex justify-between p-4 bg-orange-700 text-slate-100">

    <img onClick={() => navigate('/')} src='/veh.png' alt='Logo' className=' h-12 bg-zinc-100 rounded-full' />


    <div className=" text-lg" onClick={() => setOpen(isOpen => !isOpen)}>{open ? <MdClose /> : <MdMenu />}</div>
   </div>

   {open && <ul className=" px-4 bg-orange-600  text-slate-100 grid divide-y [&>*]:cursor-pointer ">

    <li className='flex items-center gap-1 hover:bg-orange-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => {
     setOpen(isOpen => !isOpen);
     navigate('/');
    }}><MdHome />Home</li>

    <li className=' flex items-center gap-1 hover:bg-orange-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2 ' onClick={() => {
     setOpen(isOpen => !isOpen);
     scrollToSection('contact');
    }}><MdMail />Contact</li>

    <li className=' flex items-center gap-1 hover:bg-orange-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => {
     setOpen(isOpen => !isOpen);
    }}><FaLocationPin />Track</li>
   </ul>}
  </div>
 );
};

export default Header;