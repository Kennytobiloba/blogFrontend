import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchRelatedBlogsQuery } from '../redux/features/blog/blogApi'
 
const Relatedblog = () => {
     const {id}  = useParams()
      const {data:blogs, error, isLoading} = useFetchRelatedBlogsQuery(id)
      console.log(blogs)
  return (
    <div>
        <h3 className='text-2xl font-medium  px-8 pb-5  '>Related blog</h3>
        <hr />
         {
          blogs?.length > 0 ? (
            <div className=' space-y-4 mt-5'>
                {
                    blogs.map((blog) => (
                        <Link
                      
                        to={`/blog/${blog._id}`} className='flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4'>
                        <div className=' size-14'>
                            <img src={blog.coverImg} alt="" className='h-full w-full rounded-full ring-2 ring-blue' />

                        </div>
                        <div>
                            <h4 className='font-medium text-[#1E73BE]'>{blog.title.substring(0,50)}</h4>
                            <h4>{blog.description.substring(0,50)}</h4>
                        </div>
                        </Link>
                    ))
                }

            </div>

          ) : (
            <div className='p-8 '>No Related Blog found</div>
          )
         }

    </div>
  )
}

export default Relatedblog