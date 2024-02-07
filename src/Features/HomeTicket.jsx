
import { useGetSpecificApi } from "../Hooks/GetSpecific/useGetSpecificApi";
import { useGetSpecific } from "../Hooks/GetSpecific/useGetSpecific";
import Spinner from "../ui/Spinner";
import Progress from "../ui/Progress";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../Hooks/helpers";


const HomeTicket = () => {

 const { alphaCode: ticketId } = useParams();


 const { getSpecific } = useGetSpecificApi({ key: 'ticket', ticketId });

 const { data = [], isFetching } = useGetSpecific({ key: ['ticket', ticketId], fn: getSpecific });

 if (isFetching) return <Spinner />;

 if (data?.data === undefined) return <p>Please check your code. 🔍</p>;

 const { name, rAddress, rCountry, rEmail, rName, rPhone, sAddress, sCountry, sEmail, sPhone, weight, description, deliveryDate, receiveDate, amount } = data.data;

 return (
  <>

   <div className=" max-w-3xl flex flex-col justify-center mx-auto ">
    <div className=" max-w-2xl text-neutral-900 gap-8 grid sm:grid-cols-2 p-4">
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
      <p>Weight: {weight}</p>
      <p>Amount: {formatCurrency(amount)}</p>
     </div>

     <div className="grid gap-4 ">
      <h1 className=" text-xl font-semibold">Tracking details</h1>
      <p>Ticket ID: {ticketId}</p>
      <p>Receive date: {receiveDate}</p>
      <p>Estimated delivery date: {deliveryDate}</p>

     </div>


    </div>
    <div className="grid gap-4 text-neutral-900 p-4">
     <Progress receiveDate={receiveDate} deliveryDate={deliveryDate} />

    </div>
   </div>

  </>
 );
};

export default HomeTicket;