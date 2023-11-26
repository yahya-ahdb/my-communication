import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const studentSlice = createApi( {
    reducerPath: 'studentSlice',
    baseQuery: fetchBaseQuery( { baseUrl: apiUrl } ),
    keepUnusedDataFor: 1,
    endpoints: ( builder ) => ( {
        getMyMoney: builder.query( {
            query: ({headers}) => ( {
                url: `getMyMoney`,
                headers :headers ,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getMyCourses: builder.query( {
            query: ({headers}) => ( {
                url: `getMyCourses`,
                headers :headers ,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        myMoneyInfo: builder.query( {
            query: ({headers}) => ( {
                url: `myMoneyInfo`,
                headers :headers ,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getProposalCourses: builder.query( {
            query: ({headers}) => ( {
                url: `getProposalCourses`,
                headers :headers ,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),

    } ),
} )
export const { useGetMyCoursesQuery ,useGetMyMoneyQuery ,
    useMyMoneyInfoQuery , useGetProposalCoursesQuery
 } = studentSlice
