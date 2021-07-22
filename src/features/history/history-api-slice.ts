import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Consultation } from '../../app/interfaces'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL as string,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchConsultations: builder.query<Consultation[], number | void>({
        query(limit = 10) {
          return `/events?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchConsultationsQuery } = apiSlice;
