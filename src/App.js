import React from "react";
import Homepage from "./pages/HomePage/Homepage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { store } from './store/store'
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import Search from './pages/Search/Search'
import Albums from "./pages/Albums/Albums";
import Tracks from "./pages/Tracks/Tracks";
import Artists from "./pages/Artists/Artists";
import AlbumDetails from "./pages/AlbumDetails/AlbumDetails";
import ArtistsDetails from "./pages/ArtistsDetails/ArtistsDetails";
import DiscoverCategory from "./pages/DiscoverCategory/DiscoverCategory";
import GenrePage from "./pages/Genre/GenrePage";
import Login from "./pages/AuthPage/Login";
import SignUp from "./pages/AuthPage/SignUp";
import CreateNewPlaylist from "./pages/CreateNewPlaylist/CreateNewPlaylist";


let theme = createTheme()

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="">
      <Homepage />
    </div>,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/home/albums',
        element: <Albums />
      },
      {
        path: '/home/tracks',
        element: <Tracks />
      },
      {
        path: '/home/artists',
        element: <Artists />
      },
      {
        path: '/home/albums/:albumid',
        element: <AlbumDetails />
      },
      {
        path: '/home/artist/:artistid',
        element: <ArtistsDetails />
      },
      {
        path: '/home/discover/:category',
        element: <DiscoverCategory />
      },
      {
        path: '/home/genre/:genre',
        element: <GenrePage />
      },
      {
        path: '/home/playlist/createnewplaylist',
        element: <CreateNewPlaylist />
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
