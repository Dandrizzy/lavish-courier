import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
 const navigate = useNavigate();
 const className = ' px-4 text-sm text-orange-500 hover:text-orange-600 hover:underline';

 if (to === '-1')
  return (
   <button className={className} onClick={() => navigate(-1)}>{children}</button>
  );

 return (
  <Link to={to} className={className}>{children}</Link>
 );
};

export default LinkButton;