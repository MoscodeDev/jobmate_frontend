import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

 export const articleSlice = createApi({
    reducerPath:'remotive',
    baseQuery: fetchBaseQuery({baseUrl:"https://dev.to/api/articles?tag=career&per_page=20"}),
    endpoints: (build)=>({
        getArticles: build.query({
            query: ()=> ''
        })
    })
})

export const { useGetArticlesQuery} = articleSlice