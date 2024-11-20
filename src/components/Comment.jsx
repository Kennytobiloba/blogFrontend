import React from 'react'
import commentIcon  from "../assets/commentor.png"
import { FormatData } from '../utilis/formatDate'
import PostAComment from './PostAComment'
import { useSelector } from 'react-redux'

const Comment = ({comments}) => {
  const user =  useSelector((state) => state.auth)
  return (
    <div className='my-6 bg-white p-8'>
         <div>
            {
                comments?.length > 0 ? 
            <div> All comments
                <div>
                   {
                     comments.map((comments,index) => (
                        <div key={index}>
                            <div>
                                <img src={commentIcon} alt="" className='h-14' />
                                <div>
                                    <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{comments?.user.username}</p>
                                <p className=' text-[12px]'>{FormatData(comments.createdAt)}</p>
                                </div>
                            </div>
                            <div className='text-gray-600 mt-5 border p-8'>
                                <p className='md:w-4/5'>{comments?.comment}</p>
                            </div>
                            <div></div>

                        </div>
                     ))
                   }
                </div>
                    
             </div> : 
              <div className='text-lg font-medium'> no comment found </div>
            }
         </div>

          <div>
            <PostAComment/>

          </div>

    </div>
  )
}

export default Comment