import React from 'react'
import { FormatData } from '../utilis/formatDate' // Assuming FormatData is a utility function
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Function to format the blog data for the chart
const formatData = (blogs) => {
    return blogs.map(blog => (
        {
            name: FormatData(blog.createdAt),   // Format the date
            post: blog.title.length,            // The length of the title
            pv: blog.pageView || 0,             // Page views, default to 0 if undefined
            amt: blog.amt || 0                  // Amount, default to 0 if undefined
        }
    ))
}

const BlogChart = ({ blogs }) => {
    // Format the blog data for the chart
    const data = formatData(blogs)
    
    return (
        <div className='p-6 bg-bgPrimary rounded-lg shadow-md'>
            <h2 className="text-xl font-semibold mb-4">Blogs Chart</h2>
            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="post" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BlogChart
