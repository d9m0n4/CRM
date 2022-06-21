import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const HouseAPI = createApi({
  reducerPath: 'HouseAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['House'],
  endpoints: (build) => ({
    fetchAllHouses: build.query({
      query: () => `house`,
    }),
    fetchHouseById: build.query({
      query: (id) => ({
        url: `/house/${id}`,
      }),
    }),
    createHouse: build.mutation({
      query: (house) => ({
        url: '/house',
        method: 'POST',
        body: house,
      }),
      invalidatesTags: ['House'],
    }),
  }),
});

export const { useFetchAllHousesQuery, useFetchHouseByIdQuery, useCreateHouseMutation } = HouseAPI;
