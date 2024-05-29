import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world',
//   headers: {
//     'X-RapidAPI-Key': 'dad18da50bmsh39cbdde9804a1ffp1cbf20jsn8000e6efd9d1',
//     'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

export const spotifyApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'dad18da50bmsh39cbdde9804a1ffp1cbf20jsn8000e6efd9d1');
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/get-top-songs-in-world' }),
  })
});


export const { useGetTopTracksQuery } = spotifyApi;