import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSlice.js";
import { articleSlice } from "./api/articleSlice.js";

 export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        [articleSlice.reducerPath]: articleSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, articleSlice.middleware),
})

setupListeners(store.dispatch);