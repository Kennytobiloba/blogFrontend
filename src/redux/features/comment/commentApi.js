import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blogbackend-1-8m8y.onrender.com/api/comments",
    credentials: "include",
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentData) => ({
        url: "/post-comment",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Comments", id: postId },
      ],
    }),

    getComment: builder.query({
      query: () => ({
        url: "/get_comment", 
        method: "GET",
      }),
      providesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentQuery, usePostCommentMutation } = commentApi;
export default commentApi;
