import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constans/url';

export const adminSlice = createApi( {
    reducerPath: 'adminSlice',
    baseQuery: fetchBaseQuery( { baseUrl: apiUrl } ),
    keepUnusedDataFor: 1,
    endpoints: ( builder ) => ( {


        // Categories
        getAllCategories: builder.query( {
            query: ( { headers } ) => ( {
                url: `getAllCategories`,
                headers,
            } ),
            keepUnusedDataFor: 2
        } ),

        createCategory: builder.mutation( {
            query: ( { headers, data } ) => ( {
                url: `/createCategory`,
                headers: headers,
                method: 'POST',
                body: data
            } ),
            keepUnusedDataFor: 2
        } ),

        updateCategory: builder.mutation( {
            query: ( { headers, id, data } ) => ( {
                url: `/updateCategory/${id}`,
                headers: headers,
                method: 'POST',
                body: data
            } ),
            keepUnusedDataFor: 2
        } ),

        deleteCategory: builder.mutation( {
            query: ( { headers, id } ) => ( {
                url: `/deleteCategory/${id}`,
                headers: headers,
                method: 'DELETE',
            } ),
            keepUnusedDataFor: 2
        } ),


        // Courses
        createCourse: builder.mutation( {
            query: ( { headers, data } ) => ( {
                url: `/createCourse`,
                headers: headers,
                formData: true,
                method: 'POST',
                body: data,
            } ),
            keepUnusedDataFor: 2
        } ),

        updateCourse: builder.mutation( {
            query: ( { headers, id, data } ) => ( {
                url: `/updateCourse/${id}`,
                headers: headers,
                method: 'PUT',
                body: data
            } ),
            keepUnusedDataFor: 2
        } ),

        getAllCourses: builder.query( {
            query: ( { headers } ) => ( {
                url: `/getAllCourses`,
                headers: headers,
            } ),
            keepUnusedDataFor: 2
        } ),
        getAllCourse: builder.query( {
            query: ( page  ) => ( {
                url: `/getAllCourses?page=`+page,
                method :"GET"
            } ),
            keepUnusedDataFor: 2
        } ),


        // Techers
        getAllTechers: builder.query( {
            query: ( { headers } ) => ( {
                url: `getTeachers`,
                headers,
            } ),
            keepUnusedDataFor: 2
        } ),
        getTecherById: builder.mutation( {
            query: ( { headers, id } ) => ( {
                url: `getTeacherById/${id}`,
                headers,
            } ),
            keepUnusedDataFor: 2
        } ),
        createTeacher: builder.mutation( {
            query: ( { headers, data } ) => ( {
                url: `/createTeacher`,
                headers: headers,
                method: 'POST',
                body: data
            } ),
            keepUnusedDataFor: 2
        } ),
        getAllWorkshop: builder.query( {
            query: ( { headers,  id} ) => ( {
                url: `/getAllWorkshop?page=`+id,
                headers: headers,
                method: 'GET',
            } ),
            keepUnusedDataFor: 2
        } ),
        //Employ
        getAllEmployee: builder.query( {
            query: ( { headers } ) => ( {
                url: `getAllEmployee`,
                headers,
            } ),
            keepUnusedDataFor: 2
        } ),

        //Employ
        getAllMarketer: builder.query( {
            query: ( { headers } ) => ( {
                url: `getAllMarketer`,
                headers,
            } ),
            keepUnusedDataFor: 2
        } ),

    } ),
} )

export const {
    useGetAllCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation,
    useCreateCourseMutation, useUpdateCourseMutation, useGetAllCoursesQuery,
    useGetAllTechersQuery, useGetTecherByIdMutation, useCreateTeacherMutation
    , useGetAllWorkshopQuery, useGetAllEmployeeQuery , useGetAllMarketerQuery
    , useGetAllCourseQuery
} = adminSlice
