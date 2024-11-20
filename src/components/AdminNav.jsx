import React from 'react'
import admin from "../assets/admin.png"
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLogOutUserMutation } from "../redux/features/auth/authapi"
import { logOut } from "../redux/features/auth/authSlice"

const AdminNav = () => {
  const [logOutUser] = useLogOutUserMutation()
  const dispatch = useDispatch() // Call useDispatch to get the dispatch function

  const handleLogOut = async () => {
    try {
      let res = await logOutUser().unwrap()
      dispatch(logOut())
      console.log("res", res)
    } catch (error) {
      console.error("An error occurred", error)
    }
  }

  return (
    <div className='flex flex-col justify-between h-[calc(100vh-98px)] bg-white p-8'>
      <div className='space-y-5'>
        <div className='mb-5'>
          <img src={admin} alt="" className='size-14' />
          <p className='font-semibold'>Admin</p>
        </div>
        <hr />
        <ul className='space-y-5 pt-5'>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/post"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Add New Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manage"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              Manage Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/user"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-black"
              }
            >
              User
            </NavLink>
          </li>
        </ul>
      </div>

      {/* LogOut button positioned at the bottom */}
      <div className='mt-auto'>
        <hr className='mb-3' />
        <button
          onClick={handleLogOut}
          className='w-full text-white bg-red-500 font-medium px-5 py-2 mt-3 rounded-md'
        >
          LogOut
        </button>
      </div>
    </div>
  );
}

export default AdminNav;
