import React from 'react';
import { FormatData } from '../utilis/formatDate';
import EditorJSHTML from "editorjs-html";

const editorJSParser = EditorJSHTML();

const SingleBlogCard = ({ blog }) => {
    const { title, author, category, content, coverImg, createdAt,rating } = blog || {};

    // Parse content if it exists and has a valid structure
    let htmlContent = editorJSParser.parse(content).join('');
    

    return (
        <div className='bg-white p-8 '>
            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
                <p className='mb-6'>
                    {FormatData(createdAt)} by <span className='text-blue-400 cursor-pointer'>{author || 'Admin'}</span>
                </p>
            </div>
            <div>
                <img src={coverImg} alt="" className='w-full md:h-[520px] bg-cover' />
            </div>
            <div className='mt-8 space-y-4'>
                {/* Render parsed HTML content or fallback text */}
             
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }}  className='space-y-3 editorjsdiv'/>
               
            </div>
            <div className='mt-4'>
                <span className=' text-lg font-medium'>Rating:</span>
                <span>{rating} (based on 2,370)</span>
            </div>
           
        </div>
    );
}

export default SingleBlogCard;
