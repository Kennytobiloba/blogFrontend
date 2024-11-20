import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { usePostCommentMutation } from '../redux/features/comment/commentApi'
import { useFetchBlogByIdQuery } from '../redux/features/blog/blogApi'

const PostAComment = () => {

    const {id} = useParams()
    const [comment, setComment] = useState("")
     const navigate = useNavigate()
     const {user} = useSelector((state) => state.auth)
    //  console.log("shhshhs", user)
 
    const [ postComment] = usePostCommentMutation()
     const { refetch } = useFetchBlogByIdQuery(id, {skip: !id})

    const handleComment =  async(e) => {
      e.preventDefault()
      if (!user) {
        alert("Please login to comment on this post");
        navigate("/login");  // <-- Use 'navigate' instead of 'navigator'
        return;
      }
      const newComment = {
        comment,
        user: user.id,
        postId: id,
      };
    
      try {
        const res = await postComment(newComment).unwrap();
        alert("Commented successfully");
        setComment("");
        setError(null); // Clear the error if the comment was successful
        // refetch();
      } catch (error) {
        setError("An error occurred while posting the comment.");
      }
    };


  return (
    <div className='mt-8'>
  <h3 className='text-lg font-medium mb-8'>Leave a form</h3>
  <form onSubmit={handleComment} >
     <textarea
     value={comment}
     cols={30}
     rows={10}
     className='w-full bg-bgPrimary focus:outline-none p-5'
     placeholder='Share your oppinion about this post'
     onChange={(e)=> setComment(e.target.value)}
      name="" id=""></textarea>
      <button type='submit' className='w-full bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Submit</button>

  </form>
    </div>
  )
}

export default PostAComment