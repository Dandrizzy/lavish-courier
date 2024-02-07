import { FaTimes } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useGetApi } from "../Hooks/Get/useGetApi";
import { useGet } from "../Hooks/Get/useGet";
import Spinner from "../ui/Spinner";

const Admin = () => {
 const navigate = useNavigate();

 const { fetch } = useGetApi({ key: 'ticket' });
 const { isFetching, fetch: fetchData = [] } = useGet({ key: ['ticket'], fn: fetch });

 const filteredData = fetchData.filter(item => item.author === 'lavish');



 if (isFetching) return <Spinner />;


 return (
  <div className=" sm:p-4 text-neutral-900">
   <div className=" bg-slate-500 text-neutral-100 p-2 grid grid-cols-2 md:grid-cols-5
    gap-2">
    <div className="md:block hidden">Sender&apos;s name</div>
    <div className="md:block hidden">Country</div>
    {/* <div className="">Address</div>
    <div className="">Phone</div>
    <div className="">Email</div> */}
    <div className="">Recipient name</div>
    <div className="md:block hidden">Country</div>
    {/* <div className="">Address</div>
    <div className="">Phone</div>
    <div className="">Email</div> */}
    <div className="">Send mail</div>
    {/* <div className="">Weight(KG)</div> */}
   </div>

   {filteredData.map(item => {
    return (
     <div key={item.id} className=" p-2 gap-2  grid grid-cols-2 md:grid-cols-5 [&>*]:overflow-x-clip even:bg-neutral-200"  >
      <div className="hidden md:block"> {item.name}</div>
      <div className="hidden md:block">{item.sCountry}</div>
      {/* <div className="">{item.sAddress}</div>
      <div className=" ">{item.sPhone}</div>
      <div className="">{item.sEmail}</div> */}
      <div className="">{item.rName}</div>
      <div className="md:block hidden ">{item.rCountry}</div>
      {/* <div className="">{item.rAddress}</div>
      <div className="">{item.rPhone}</div>
      <div className="">{item.rEmail}</div> */}
      <div className=" flex gap-2">
       <button onClick={() => navigate(`/mail/${item.ticketId}`)} className=" bg-orange-500 text-neutral-100 px-2 rounded-md hover:borangeue-400" >Mail</button>
       <button onClick={() => navigate(`/ticket/${item.ticketId}`)} className=" border-2 border-orange-600 text-orange-900 px-2 rounded-md hover:bg-orange-200" >Show</button>
      </div>
      {/* <div className="">{item.weight}</div> */}
     </div>
    );
   })}

   <Link to='/form' className=" hover:animate-spin text-5xl text-orange-600 fixed bottom-8 right-8">
    <FaTimes className=" lg:text-6xl rotate-45 cursor-pointer" />
   </Link>

  </div>
 );
};

export default Admin;