import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BOOKS } from '../../services/config/index';
import { randomRatio } from '../../lib/makeRatio';

export const apiSlice = createApi({
  reducerPath: 'api',
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
          ratio: 3,
        }));
        return books;
      },

      // transformResponse: (response, meta, arg) => {
      //     // response.data
      //     return response.data.map((book) => {
      //         // book.available = randomAvailable()
      //         book.ratio = randomRatio()
      //         return book
      //     })
      // },
    }),
  }),
});

export const { useGetAllBooksQuery } = apiSlice;
