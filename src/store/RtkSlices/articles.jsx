import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';
// import { useHeaders } from "../../hooks/useHeaders"

// const headers = useHeader();
// console.log( headers )
export const articlesSlice = createApi( {
    reducerPath: 'articlesSlice',
    baseQuery: fetchBaseQuery( { baseUrl: apiUrl } ),
    keepUnusedDataFor: 1,
    endpoints: ( builder ) => ( {
        getArticles: builder.query( {
            query: ( page ) => ( {
                url: `getArticles?page=${page}`,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getArticleById: builder.query( {
            query: ( id ) => ( {
                url: `getArticleById/` + id,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),

        getAllArticleCategory: builder.query( {
            query: () => ( {
                url: `getAllArticleCategory`,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),
        getArticleByCategoryId: builder.mutation( {
            query: ( id ) => ( {
                url: `getArticleByCategoryId/${id}`,
                method: 'get',
            } ),
            keepUnusedDataFor: 2
        } ),
        getRelatedArticle: builder.query( {
            query: ( { id } ) => ( {
                url: `getRelatedArticle/` + id,
                method: 'get',
            } ),
            keepUnusedDataFor: 10
        } ),

    } ),
} )

export const { useGetArticlesQuery, useGetArticleByIdQuery,
    useGetAllArticleCategoryQuery, useGetArticleByCategoryIdMutation,
    useGetRelatedArticleQuery

} = articlesSlice
