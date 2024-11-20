import React, { useState } from 'react'
import { useDelectUserMutation, useGetUserQuery } from '../redux/features/auth/authapi'
import { FormatData } from '../utilis/formatDate'
import { CiEdit } from "react-icons/ci";
import UpdateUserValue from './UpdateUserValue';




const User = () => {
     const [selectUser, setSelectUser] = useState(null)
     const {data, error, isLoading, refetch} = useGetUserQuery()
     const [modal, setModal] = useState(false)
      console.log(data)
      const [ delectUser] = useDelectUserMutation()

      const handleDelect =  async(id) => {
        try {
           const res =  await  delectUser(id).unwrap()
            alert(res.message)
            refetch() 
        } catch (error) {
          console.error('Failed to delete blog', error);
      
        }
    
       }
        const handleeditUser = (user) => {
          setSelectUser(user)
          setModal(true)
        }
         const handleCloseModal = () => {
          setModal(false)
          setSelectUser(null)
         }
      
  return (
    <>
    {isLoading && <div>Loading...</div>}
      <div>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">All Blogs</h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"></button>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        No.
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Email
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Role
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Edit or Manage
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Delect
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.user === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center py-3">No data available</td>
                      </tr>
                    ) : (
                      data?.user.map((user, index) => (
                        <tr key={user.id}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                            {index + 1}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {user.email}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {user.role}
                          </td>
                         
                          <td className="border-t-0 px-6 flex gap-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        
                          < button 
                          onClick={ () => handleeditUser(user)}
                          className='flex gap-1'>
                          <CiEdit className='size-4' />
                          <h6>  Edit</h6>
                          </button>
                        
                          </td>
                          <td 
                          onClick={()=>handleDelect(user._id)}
                          className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button className='bg-red-600 text-white px-2 py-1'>Delect</button>
                          </td>
                         
                          
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
        </section>
        {
          modal && (
            <div className="">
              <UpdateUserValue user={selectUser} onRoleUpdate={refetch} onClose={handleCloseModal}/>
            </div>
          )
        }
      </div>
    
    </>
  )
}

export default User