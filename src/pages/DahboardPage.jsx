import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { FaBlog, FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RiAdminLine } from "react-icons/ri";
import { useFetchBlogsQuery } from "../redux/features/blog/blogApi";
import { useGetCommentQuery } from "../redux/features/comment/commentApi";
import { useGetUserQuery } from "../redux/features/auth/authapi";
import BlogChart from "../components/BlogChart";

const DashboardPage = () => {
  const [query, setQuery] = useState({
    search: "",
    category: "",
  });
  const { user } = useSelector((state) => state.auth);
  const { data: blogs = [], isLoading } = useFetchBlogsQuery(query);
  const [comment, setComent] = useState([]);
   const {data:users ={}} = useGetUserQuery()
    console.log(users,"userss")
    const admin = users.user?.filter((user) => user.role === "admin")
     console.log(admin)

  // Fetches comments with RTK Query
  // const { data: comment = [], isLoading: isCommentLoading, error } = useGetCommentQuery();
  const getfunc = async () => {
    const respond = await fetch(
      "https://blogbackend-1-8m8y.onrender.com/api/comments/get_comment",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await respond.json();
    // console.log(data);
    if (respond.ok) {
      setComent(data.totalComment);
    } else {
    }
  };
  useEffect(() => {
    getfunc();
  }, []); // Empty dependency array to only run once on mount

  return (
    <>
      <div className="space-y-6">
        <div className="bg-bgPrimary p-5">
          <h1>Hi, {user?.username} </h1>
          <p>Welcome to Admin page</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            consequuntur nemo debitis atque ea commodi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 pt-8">
          <div className="bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FiUsers className="size-8 text-indigo-600" />
            <p> 2 Users</p>
          </div>
          <div className="bg-red-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaBlog className="size-8 text-red-600" />
            <p> {blogs?.length} Blogs</p>
          </div>
          <div className="bg-lime-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <RiAdminLine className="size-8 text-lime-600" />
            <p>{admin?.length} Admins</p>
          </div>
          <div className="bg-orange-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center">
            <FaRegComment className="size-8 text-orange-600" />
            <p> {comment} comments</p>
          </div>
        </div>

         <div className=" pt-5 pb-5">
          <BlogChart blogs={blogs}/>

         </div>
      </div>
    </>
  );
};

export default DashboardPage;
