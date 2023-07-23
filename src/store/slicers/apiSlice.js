import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BOOKS } from '../../services/config/index';
import { randomInteger } from '../../lib/makeRatio';

export const apiSlice = createApi({
  reducerPath: 'api',
  keepUnusedDataFor: Infinity,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BOOKS,
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/api/library',
      transformResponse: (response) => {
        // приводим данные ответа к нужному формату
        const books = response.map((book) => ({
          ...book,
          ratio: randomInteger(0, 5),
        }));
        return books;
      },
    }),
  }),
});

export const { useGetAllBooksQuery } = apiSlice;
