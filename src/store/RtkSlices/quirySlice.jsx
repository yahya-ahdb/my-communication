import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const quirySlice = createApi( {
    reducerPath: 'quirySlice',
    baseQuery: fetchBaseQuery( { baseUrl: apiUrl } ),
    keepUnusedDataFor: 1,
    endpoints: ( builder ) => ( {
        getAllQuestion: builder.query( {
            query: (  page  ) => ( {
                url: `getAllQuestion?page=` + page,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),

    } ),
} )

export const { useGetAllQuestionQuery } = quirySlice
