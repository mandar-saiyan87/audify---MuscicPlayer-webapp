import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songsApi = createApi({
  reducerPath: 'songsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}` }),
  endpoints: (builder) => ({
    getsongs: builder.query({ query: () => `/tracks` }),
    getAlbums: builder.query({ query: () => `/albums` }),
    getArtists: builder.query({ query: () => `/artists` }),
    getCategories: builder.query({ query: () => `/categories` }),
    getGenres: builder.query({ query: () => `/genres` }),
    getSongsbyalbum: builder.query({ query: (albumid) => `/tracksbyalbum/${albumid}` }),
    getSongsbyid: builder.query({ query: (trackid) => `/tracksbyid/${trackid}` }),
    getSongsbyartist: builder.query({ query: (artistsid) => `/tracksbyartist/${artistsid}` }),
    getSongsbycategory: builder.query({ query: (category) => `/categories/${category}` }),
    getSongsbygenre: builder.query({ query: (genre) => `/genres/${genre}` }),
    search: builder.query({ query: (searchtext) => `/searching/${searchtext}` }),
  })
})

export const {
  useGetsongsQuery,
  useGetAlbumsQuery,
  useGetArtistsQuery,
  useGetCategoriesQuery,
  useGetGenresQuery,
  useGetSongsbyalbumQuery,
  useGetSongsbyidQuery,
  useGetSongsbyartistQuery,
  useGetSongsbycategoryQuery,
  useGetSongsbygenreQuery,
  useSearchQuery
} = songsApi