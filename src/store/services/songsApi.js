import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songsApi = createApi({
  reducerPath: 'songsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}` }),
  endpoints: (builder) => ({
    getsongs: builder.query({ query: () => `/tracks` }),
    getAlbums: builder.query({ query: () => `/albums` }),
    getArtists: builder.query({ query: () => `/artists` }),
    getCategories: builder.query({ query: () => `/categories`}),
    getGenres: builder.query({ query: () => `/genres` }),
  })
})

export const {
  useGetsongsQuery,
  useGetAlbumsQuery,
  useGetArtistsQuery,
  useGetCategoriesQuery,
  useGetGenresQuery
} = songsApi