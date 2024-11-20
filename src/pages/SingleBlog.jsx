import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBlogByIdQuery } from '../redux/features/blog/blogApi'
import SingleBlogCard from '../components/SingleBlogCard'
import Comment from '../components/Comment'
import Relatedblog from '../components/Relatedblog'

const SingleBlog = () => {
    const { id } = useParams()

    // Log the ID to make sure it's being passed correctly
    console.log("Blog ID:", id)

    // Fetch blog data using the id from the URL
    const { data: blog, isLoading, error } = useFetchBlogByIdQuery(id)

    // Log the fetched blog data
    console.log("Fetched blog:", blog)

    if (!id) {
        return <div>Invalid blog ID</div>
    }

    return (
        <div>
            {/* Loading State */}
            {isLoading && <div>Loading....</div>}

            {/* Error State */}
            {error && <div>Something went wrong: {error.message}</div>}

            {/* Blog Content */}
            {blog?.post ? (
                <div className="container mx-auto flex flex-col lg:flex-row mt-6 justify-between md:gap-12">
                    <div>
                        <SingleBlogCard blog={blog?.post} />
                        <div>
                            <Comment comments={blog?.comment} />
                        </div>
                    </div>
                    <div className="bg-white lg:w-full w-full">
                        <Relatedblog blogId={id} /> {/* Assuming you want to pass the current blog ID */}
                    </div>
                </div>
            ) : (
                !isLoading && <div>No blog found for this ID</div> // Show if no blog is found
            )}
        </div>
    )
}

export default SingleBlog
