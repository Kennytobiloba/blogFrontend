import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import avatarImage from "../assets/commentor.png"
import { useLogOutUserMutation } from "../redux/features/auth/authapi";
import { logOut } from "../redux/features/auth/authSlice";

const Navbar = () => {

 
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
   const dispatch = useDispatch()

   const [ logOutUser ] = useLogOutUserMutation()
   


  const handleLogout = async() => {
    try {
       await logOutUser().unwrap()
        dispatch(logOut())    
    } catch (error) {
      
    }
    
  }
  const navList = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Contact Us", link: "/contact" },
  ];
  const { user } = useSelector((state) => state.auth);
  const userRole = user ? user.role : null;
   const  role =  userRole ? user.role : null
    // console.log("user role", role)
  return (
    <div className="bg-white py-4 border ">
      <div className="container mx-auto flex justify-between px-5">
        <a href="" className="h-12">
          Logo
        </a>
        <ul className="sm:flex hidden items-center gap-6">
          {navList.map((item, index) => (
            <li key={index} className="mx-4">
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          { role === "user" ? (
            <li className="flex items-center gap-3">
            <img src={avatarImage} alt="" className="size-8" />
            <button
            onClick={handleLogout}
             className="bg-[#1E73BE] px-4 py-1.5 text-white">LogOut</button>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/login"
                >
                  {" "}
                  Login
                </NavLink>
              </li>
            </>
          )}


          { role === "admin" && (
            <li className="flex items-center gap-3">
            <img src={avatarImage} alt="" className="size-8" />
            <Link to="dashboard"> <button className="bg-[#1E73BE] px-4 py-1.5 text-white">Dashboard</button></Link>
            </li>
          )
        }
        </ul>
        <div className="flex items-center sm:hidden">
          <button
            className={`flex  items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900`}
          >
            {toggle ? (
              <IoMdCloseCircleOutline
                className="size-6"
                onClick={handleToggle}
              />
            ) : (
              <AiOutlineMenuFold className="size-6" onClick={handleToggle} />
            )}
          </button>
        </div>
      </div>
      {toggle ? (
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
          {navList.map((item, index) => (
            <li
              key={index}
              onClick={() => setToggle(false)}
              className="mt-5 px-4"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li onClick={() => setToggle(false)} className="px-4 mt-5">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/login"
            >
              {" "}
              Login
            </NavLink>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
