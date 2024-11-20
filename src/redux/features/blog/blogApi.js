import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BlogApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blogbackend-1-8m8y.onrender.com/api/",
    credentials: "include",
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/blogs?search=${search}&category=${category}&location=${location}`,
      providesTags: ["Blogs"],
    }),
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blogs/related/${id}`,
    }),
    postBlog: builder.mutation({
      query: (post) => ({
        url: "/blogs/create_blog",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/blogs/update_blog/${id}`,
        method: "PUT",
        body: rest,
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Blogs", id }],
    }),
    fetchDeleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/delete/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Blogs", id }],
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useFetchRelatedBlogsQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useFetchDeleteBlogMutation,  // Corrected the hook name here
} = BlogApi;
