import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials
      }),
    }),

    getUsers: builder.query({
      query: () => "users"
    }),

    getUserById: builder.query({
      query: (id) => `users/${id}`
    }),

    addUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user
      }),
    }),

  }),
});

export const { 
  useLoginMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation 
} = userApi;
