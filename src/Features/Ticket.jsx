
import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";
import Spinner from "../ui/Spinner";
import Progress from "../ui/Progress";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDeleteApi } from "../Hooks/Delete/useDeleteApi";
import { useDelete } from "../Hooks/Delete/useDelete";
import { formatCurrency } from "../Hooks/helpers";


const Ticket = () => {

 const navigate = useNavigate();

 const { deleteFn } = useDeleteApi({ key: 'ticket' });

 const { deleteItem, isDeleting } = useDelete({ fn: deleteFn, key: ['ticket'] });


 const { ticketId } = useParams();

 const { getSpecific } = useGetSpecificApi({ key: 'ticket', ticketId });

 const { data = [], isFetching } = useGetSpecific({ key: ['ticket', ticketId], fn: getSpecific });

 if (isFetching || isDeleting || data.data === undefined) return <Spinner />;


 const { name, rAddress, rCountry, rEmail, rName, rPhone, sAddress, sCountry, sEmail, sPhone, weight, description, deliveryDate, receiveDate, id, amount } = data.data;


 return (
  <>
   <div className=" gap-8 grid sm:grid-cols-2 p-4 text-neutral-900">
    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Sender&apos;s information</h1>
     <p>Name: {name}</p>
     <p>Address: {sAddress}</p>
     <p>Country: {sCountry}</p>
     <p>Email: {sEmail}</p>
     <p>Phone: {sPhone}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Recipient information</h1>
     <p>Name: {rName}</p>
     <p>Address: {rAddress}</p>
     <p>Country: {rCountry}</p>
     <p>Email: {rEmail}</p>
     <p>Phone: {rPhone}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Parcel details</h1>
     <p>Description: {description}</p>
     <p>Weight: {weight}kg</p>
     <p>Amount: {formatCurrency(amount)}</p>
    </div>

    <div className="grid gap-4 ">
     <h1 className=" text-xl font-semibold">Recipient information</h1>
     <p>Ticket ID: {ticketId}</p>
     <p>Receive date: {receiveDate}</p>
     <p>Estimated delivery date: {deliveryDate}</p>

    </div>


   </div>

   <div className="grid gap-4 text-neutral-900 p-4">
    <Progress receiveDate={receiveDate} deliveryDate={deliveryDate} />

   </div>

   <div className=" py-10 flex justify-center items-center gap-3 sm:gap-8">

    <button onClick={() => navigate(`/form/${id}`)} disabled={isDeleting} className=' bg-orange-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-orange-500 font-bold flex items-center gap-2 disabled:cursor-not-allowed disabled:bg-neutral-600'>
     <FaEdit className=' text-2xl' />Edit
    </button>

    <button disabled={isDeleting} onClick={() => {
     deleteItem(id, { onSuccess: () => navigate('/dashBoard') });
    }} className=' bg-red-500 py-2 text-neutral-100 rounded-full px-4 hover:bg-red-400 font-bold flex items-center gap-2'> <MdDelete className=' text-2xl' /> Delete</button>

    <Link type='button' to={-1} className=' bg-neutral-600 py-2 text-neutral-100 rounded-full px-4 hover:bg-neutral-500 font-bold flex items-center gap-2 '> <FaArrowLeftLong className=' text-2xl' />Back</Link>

   </div>
  </>
 );
};

export default Ticket;