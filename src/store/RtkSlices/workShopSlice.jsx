import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const workShopSlice = createApi( {
    reducerPath: 'workShopSlice',
    baseQuery: fetchBaseQuery( { baseUrl: apiUrl } ),
    keepUnusedDataFor: 1,
    endpoints: ( builder ) => ( {
        getAllWorkshop: builder.query( {
            query: (  page  ) => ( {
                url: `getAllWorkshop?page=` + page,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getWorkshopById: builder.query( {
            query: (  id  ) => ( {
                url: `getWorkshopById/` +id,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getLastFFourWorkshop: builder.query( {
            query: (   ) => ( {
                url: `getLastFourWorkshop`,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),

    } ),
} )

export const { useGetAllWorkshopQuery
    , useGetWorkshopByIdQuery,
    useGetLastFFourWorkshopQuery
 } = workShopSlice
