import React, { useState } from 'react'
import { useGetUserQuery } from '../redux/features/auth/authapi'

const UserUpdate = () => {
     const [selectUser, setSelectUser] = useState(null)
     const {data:user = [], error, isLoading, refetch} = useGetUserQuery()
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
                        BlogName
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Publishing date
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
                    {/* {blogs.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center py-3">No data available</td>
                      </tr>
                    ) : (
                      blogs.map((blog, index) => (
                        <tr key={blog.id}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                            {index + 1}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {blog.title}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {FormatData(blog.createdAt)}
                          </td>
                          <td className="border-t-0 px-6 flex gap-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                         <Link to={`/dashboard/Update/${blog._id}`}>
                          <div className='flex gap-1'>
                          <CiEdit className='size-4' />
                          <h6>  Edit</h6>
                          </div>
                         </Link>
                          
                          </td>
                          <td 
                          onClick={()=>handleDelect(blog._id)}
                          className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <button className='bg-red-600 text-white px-2 py-1'>Delect</button>
                          </td>

                          
                        </tr>
                      ))
                    )} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
        </section>
      </div>
    
    </>
  )
}

export default UserUpdate