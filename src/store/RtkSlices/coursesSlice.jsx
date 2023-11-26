import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../constans/url";

export const coursesSlice = createApi({
  reducerPath: "coursesSlice",
  tagTypes: ["comment"],
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  keepUnusedDataFor: 1,
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: ({ id, search, category_id, date, price }) => ({
        url: `getAllCourses?page=${id}${search}${date}${price}${category_id}`,
        method: "get",
      }),
      keepUnusedDataFor: 10,
    }),
    getCourseById: builder.query({
      query: ({ id }) => ({
        url: `getCourseById/` + id,
        method: "get",
      }),
      keepUnusedDataFor: 10,
    }),
    getFavoriteCourses: builder.query({
      query: () => ({
        url: `getFavoriteCourses`,
        method: "get",
      }),
      keepUnusedDataFor: 10,
    }),
    isBuy: builder.mutation({
      query: ({ id, headers, body }) => ({
        url: `isBuy/` + id,
        headers: headers,
        body: body,
        method: "POST",
      }),
      keepUnusedDataFor: 10,
    }),
    getCoursesNameWhenBelongToTeacher: builder.query({
      query: ({ headers }) => ({
        url: `getCoursesNameWhenBelongToTeacher`,
        method: "get",
        headers: headers,
      }),
      keepUnusedDataFor: 10,
    }),
    getRelatedCourses: builder.query({
      query: ({ id }) => ({
        url: `getRelatedCourses/`+id,
        method: "get",
      }),
      keepUnusedDataFor: 10,
    }),
    createComment: builder.mutation({
      query: ({ headers, body }) => ({
        url: `createComment`,
        headers: headers,
        body: body,
        method: "POST",
      }),
      keepUnusedDataFor: 20,
      invalidatesTags: ["comment"],
    }),
    deleteComment: builder.mutation({
      query: ({ headers, id }) => ({
        url: `deleteComment/` + id,
        headers: headers,
        method: "Delete",
      }),
      keepUnusedDataFor: 20,
      invalidatesTags: ["comment"],
    }),
    getComments: builder.query({
      query: ({ id }) => ({
        url: `getComments/` + id,
        method: "GET",
      }),
      keepUnusedDataFor: 20,
      providesTags: ["comment"],
    }),
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetCourseByIdQuery,
  useGetCoursesNameWhenBelongToTeacherQuery,
  useCreateCommentMutation,
  useGetCommentsQuery,
  useIsBuyMutation,
  useDeleteCommentMutation,
  useGetFavoriteCoursesQuery,
  useGetRelatedCoursesQuery
} = coursesSlice;
