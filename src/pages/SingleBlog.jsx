import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBlogByIdQuery } from '../redux/features/blog/blogApi'
import SingleBlogCard from '../components/SingleBlogCard'
import Comment from '../components/Comment'
import Relatedblog from '../components/Relatedblog'


const SingleBlog = () => {
     const { id } = useParams()
     console.log("id", id)
     const {data: blog, isLoading , error} = useFetchBlogByIdQuery(id)
     console.log("blog", blog)
  return (
    <div>
        {isLoading && <div>Loading.... </div>}
        {error && <div> Something went wrong{error}</div>}

        <div>
            {
                blog?.post && (
                    <div className=' container mx-auto flex flex-col lg:flex-row mt-6 justify-between md:gap-12'>
                       <div>
                       <SingleBlogCard blog={blog.post}/>
                        <div>
                            <Comment comments={blog?.comment}/>
                        </div>
                       </div>
                        <div className='bg-white lg:w-full w-full '>
                        <Relatedblog/>
                        </div>
                    </div>
                )
            }
           
        </div>
    </div>
  )
}

export default SingleBlog