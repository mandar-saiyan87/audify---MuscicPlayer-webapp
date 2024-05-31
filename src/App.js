import React from "react";
import Homepage from "./pages/HomePage/Homepage";
import Discover from "./pages/Discover/Discover";
import TopArtist from "./pages/TopArtists/TopArtist";
import TopCharts from "./pages/TopCharts/TopCharts";
import AroundYou from "./pages/AroundYou/AroundYou";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { store } from './store/store'
import { Provider } from "react-redux";

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
        element: <Discover />
      },
      {
        path: '/search',
        element: <AroundYou />
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
