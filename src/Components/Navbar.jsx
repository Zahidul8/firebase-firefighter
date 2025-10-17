import { Link, NavLink } from "react-router";
import logo from "../assets/firebase-logo.png"
import MyContainer from "./MyContainer";


const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/about-us'}>AboutUs</NavLink></li>
          <li><NavLink to={'/profile'}>Profile</NavLink></li>
         
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;