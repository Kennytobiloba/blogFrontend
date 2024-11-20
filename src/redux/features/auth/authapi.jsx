import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://blogbackend-1-8m8y.onrender.com/api/auth',
        credentials:"include"
     }),
     endpoints: (builder) => ({
        registerUser: builder.mutation({
            query:(newUser) => (
                {
                    url:"register",
                    method:"POST",
                    body: newUser,

                }
            )
        }),
         loginUser: builder.mutation({
             query:(credentials)=> (
               {
                url:"/login",
                method:"POST",
                body: credentials,
               }
             )
         }),
         logOutUser: builder.mutation({
            query:(userlogout) => ({
                url:"/logOut",
                method:"POST",
            })
         }),
         getUser: builder.query({
             query:() =>({
                url:"/get_user",
                method:"GET"
             }),
             refetchOnMount:true,
             invalidatesTags:["User"]
         }),
          delectUser: builder.mutation({
            query:(userId)=> ({
                url:`/delete/${userId}`,
                method:"DELETE"
            })
          }),
          UpdateRole: builder.mutation({
            query:({userId, role})=>({
                url:`/update/${userId}`,
                method:"PUT",
                body:{role},
            }),
            refetchOnMount:true,
            invalidatesTags:["User"]
          })
     })
 })
  export const {useRegisterUserMutation,
    useLoginUserMutation,
    useLogOutUserMutation,
    useDelectUserMutation,
    useGetUserQuery,
    useUpdateRoleMutation,
 } = AuthApi
   export default AuthApi