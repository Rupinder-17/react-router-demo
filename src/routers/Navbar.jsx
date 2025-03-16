import { NavLink } from "react-router-dom";

export const Navbars = () => {
  // const Navigate = useNavigate();
  return (
    <div>
      <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/contect">Contect</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="services">Services</NavLink>
      </div>
      {/* <ul className='flex justify-end gap-5 text-3xl '>
            <li >Home</li>
            <li>about</li>
            <li>contect</li>
            <li>services</li>
        </ul> */}
    </div>
  );
};
