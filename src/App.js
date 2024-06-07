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


let theme = createTheme()

const router = createBrowserRouter([
  {
    path: '/' || '/home',
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
    ]
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
