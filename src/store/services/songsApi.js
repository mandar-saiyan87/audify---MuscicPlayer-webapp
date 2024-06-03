import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songsApi = createApi({
  reducerPath: 'songsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getsongs: builder.query({ query: () => `/tracks` }),
    getAlbums: builder.query({ query: () => `/artists` }),
    getArtists: builder.query({ query: () => `/albums` }),
    getCategories: builder.query({ query: () => `/categories` })
  })
})

export const {
  useGetsongsQuery,
  useGetAlbumsQuery,
  useGetArtistsQuery,
  useGetCategoriesQuery
} = songsApi