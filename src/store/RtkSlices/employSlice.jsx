import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const employ = createApi( {
    reducerPath: 'employ',
    baseQuery: fetchBaseQuery( { baseUrl: apiUrl } ),
    keepUnusedDataFor: 1,
    endpoints: ( builder ) => ( {
        getAllStudent: builder.query( {
            query: ( {page, headers ,search} ) => ( {
                headers: headers,
                url: `getAllStudent?page=${page}`+search,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getStudentById: builder.mutation( {
            query: ( { headers, id } ) => ( {
                url: `getStudentById/${id}`,
                headers,
            } ),
            keepUnusedDataFor: 2
        } ),
        getEmployeeById: builder.mutation( {
            query: ( { headers, id } ) => ( {
                url: `getEmployeeById/${id}`,
                headers,
            } ),
            keepUnusedDataFor: 2
        } ),


    } ),
} )
// getEmployeeById

export const { useGetAllStudentQuery ,useGetStudentByIdMutation
    ,useGetEmployeeByIdMutation
 } = employ
