import {createApi } from '@reduxjs/toolkit/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const authSlice = createApi({
    reducerPath:'authSlice',
    baseQuery:fetchBaseQuery({baseUrl:apiUrl}),
    keepUnusedDataFor:1,
    endpoints:(builder)=>({
        login:builder.mutation({
            query:({body,headers})=>({
                url:`login`,
                method:'POST',
                body : body,
                headers : headers
            }),
            keepUnusedDataFor:10
        }),
        register:builder.mutation({
            query:({body ,headers})=>({
                url:`register`,
                method:'POST',
                body: body ,
                headers : headers
            }),
            keepUnusedDataFor:10
        }),
        logout:builder.mutation({
            query:({headers})=>({
                url:`logout`,
                method:'POST',
                headers : headers
            }),
            keepUnusedDataFor:10
        }),
        refresh:builder.mutation({
            query:({headers})=>({
                url:`refresh`,
                headers : headers ,
                method:'POST',
            }),
            keepUnusedDataFor:10
        }),
        }),
})

export const { useLoginMutation ,useRegisterMutation , useLogoutMutation , useRefreshMutation } = authSlice
