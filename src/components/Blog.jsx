import React, { useState } from 'react';
import SearchBlog from './SearchBlog';
import { useFetchBlogsQuery } from '../redux/features/blog/blogApi';
import { Link } from 'react-router-dom';


const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState({ search: "", category: "" });

  const { data: blogs , error, isLoading} = useFetchBlogsQuery(query);
  console.log("blogs", blogs);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setQuery({ search, category });
  };

  return (
    <div className='mt-16 container mx-auto'>
      <div>
        <SearchBlog 
          search={search} 
          handleSearchChange={handleSearchChange} 
          handleSearch={handleSearch} 
        />
      </div>
      <div>
         {isLoading &&  
         <div> loading..... </div>
         }
         {error &&  
         <div> {error.toString} </div>
         }
       <div className='grid mt-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
       {blogs?.length > 0 && blogs.map((blog) => (
          <Link to={`/blog/${blog._id}`} key={blog._id} className='shadow-md'>
            <img src= {blog?.coverImg}  alt="" className='h-80 w-full ' />
             <h2 className='text-xl p-4'> {blog.title}</h2>
            </Link>
        ))}
       </div>
      </div>
    </div>
  );
};

export default Blog;
