import React from "react";
import Homepage from "./pages/HomePage/Homepage";
import Discover from "./pages/Discover/Discover";
import TopArtist from "./pages/TopArtists/TopArtist";
import TopCharts from "./pages/TopCharts/TopCharts";
import AroundYou from "./pages/AroundYou/AroundYou";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

let theme = createTheme()

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="">
      <Homepage />
    </div>,
    children: [
      {
        path: '/discover',
        element: <Discover />
      },
      {
        path: '/aroundyou',
        element: <AroundYou />
      },
      {
        path: '/topartist',
        element: <TopArtist />
      },
      {
        path: '/topcharts',
        element: <TopCharts />
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
