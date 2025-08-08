import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './constants';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api/`, credentials: 'include'}),
    endpoints:(build)=>({
        login: build.mutation({
            query: (credentials) => ({
                url:'users/login',
                method: 'POST',
                body: credentials
            })
        }),

        getUser: build.query({
            query:()=> '/users/user'
        }),

        logout: build.mutation({
            query:()=>({
                url: '/users/logout',
                method: 'POST',
                body: {}
            })
        }),
        register: build.mutation({
            query: (credentials)=>({
                url: 'users/register',
                method: 'POST',
                body: credentials
            })
        }),
        editUser: build.mutation({
            query: (credentials) =>({
                url: '/users/edit',
                method: 'PUT',
                body: credentials
            })
        })
    }),



});

export const {useLoginMutation, useGetUserQuery, useLogoutMutation, useRegisterMutation, useEditUserMutation, endpoints:{getUser}} = apiSlice;