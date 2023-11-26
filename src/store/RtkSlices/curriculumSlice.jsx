import {createApi } from '@reduxjs/toolkit/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const curriculumSlice = createApi({
    reducerPath:'curriculumSlice',
    baseQuery:fetchBaseQuery({baseUrl:apiUrl}),
    keepUnusedDataFor:1,
    endpoints:(builder)=>({
        createCurriculum:builder.mutation({
            query:({ headers, body })=>({
                url:`createCurriculum`,
                headers : headers,
                body : body,
                method:'POST',
            }),
            keepUnusedDataFor:10
        }),
        curriculaCompleted:builder.mutation({
            query:({ headers ,curricula_id })=>({
                url:`curriculaCompleted`,
                headers : headers,
                method:'POST',
            }),
            keepUnusedDataFor:10
        }),
        updateCurriculum:builder.mutation({
            query:({ headers , id , body })=>({
                url:`updateCurriculum/`+id,
                headers : headers,
                body:body,
                method:'POST',
            }),
            keepUnusedDataFor:20
        }),
        }),
})

export const { useCreateCurriculumMutation ,
    useCurriculaCompletedMutation ,
    useUpdateCurriculumMutation
 } = curriculumSlice
