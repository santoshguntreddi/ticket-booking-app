import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axiosInstance";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    getMovies: build.query<any, any>({
      query: (params) => ({
        url: "/movie/now_playing",
        params,
      }),
    }),
    getMovieById: build.query<any, any>({
      query: ([id, params]) => ({ url: `/movie/${id}`, params }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
