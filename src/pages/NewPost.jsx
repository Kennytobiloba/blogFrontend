import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useFectPostBlogMutation } from "../redux/features/blog/blogApi";
import { useNavigate } from "react-router-dom";


const NewPost = () => {
  const editorRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const [title, setTitle] = useState();
  const [coverImg, setCoverImg] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [rating, setRating] = useState();
   const navigate = useNavigate()

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs", // the ID of the div that will contain the editor
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["link"],
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
      },
    });

    // Cleanup function to destroy the editor instance when the component unmounts
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);
 const [fectPostBlog, isLoading] = useFectPostBlogMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the editor content
      const content = await editorRef.current.save();
      // console.log(content);
       const newPost = {
        title,
        content,
        coverImg,
        description,
        category,
        rating,
        author: user?.id,
       }
        // console.log(newPost)
         const res = await fectPostBlog(newPost).unwrap()
         console.log("res", res)
         alert("posted posted sucefully")
         navigate('/dashboard') // redirect to home page
    } catch (error) {
      console.error("An error occurred while saving content", error);
    }
  };

  return (
    <div className="bg-white md:p-8">
      <h2 className="text-2xl font-semibold">Create A New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-5 pt-8">
        <div className="space-y-4">
          <label className="font-semibold text-xl">Blog Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
            type="text"
            placeholder="Ex: marina del Rey"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-2/3 w-full">
            <p className="font-semibold text-xl mb-5">Content Section</p>
            <p className="text-xs italic">Write your post below here..</p>
            <div id="editorjs"></div>
          </div>
          <div className="md:w-1/3 w-full border p-5 space-y-5">
            <p className="text-xl font-semibold">Choose Blog Format</p>
            <div>
              <div className="space-y-4">
                <label className="font-semibold">Blog Cover:</label>
                <input
                  value={coverImg}
                  onChange={(e) => setCoverImg(e.target.value)}
                  className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                  type="text"
                  placeholder="https://unsplash.com/photos/a-person-"
                  required
                />
              </div>
              {/* category */}
              <div className="space-y-4">
                <label className="font-semibold">Category:</label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                  type="text"
                  placeholder="RoofTops"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <label className="font-semibold">Description:</label>
                <textarea
                  cols={4}
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                  placeholder="Write your blog meta description"
                  required
                />
              </div>

              {/* rating */}
              <div className="space-y-4">
                <label className="font-semibold">Rating:</label>
                <input
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                  type="number"
                  required
                />
              </div>

              {/* Author */}
              <div className="space-y-4">
                <label className="font-semibold">Username:</label>
                <input
                  value={user.username}
                  className="w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3"
                  type="text"
                  placeholder={`${user.username} (not editable)`}
                  disabled
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="w-full mt-5 bg-bgPrimary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
          type="submit"
        
        >
          Add New Blog
        </button>
      </form>
    </div>
  );
};

export default NewPost;
