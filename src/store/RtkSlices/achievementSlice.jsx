import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const achievementsSlice = createApi( {
    reducerPath: 'achievementsSlice',
    baseQuery: fetchBaseQuery( { baseUrl: apiUrl } ),
    keepUnusedDataFor: 1,
    endpoints: ( builder ) => ( {
        getAchievements: builder.query( {
            query: ( page ) => ( {
                url: `getAllAchievement?page=${page}`,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getAchievementById: builder.query( {
            query: ( id  ) => ( {
                url: `getAllAchievementById/` + id,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),


    } ),
} )

export const { useGetAchievementsQuery,useGetAchievementByIdQuery } = achievementsSlice
