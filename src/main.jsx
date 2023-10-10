import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import videogames from "./data/games.js";
import GamesView from "./views/GamesView.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

videogames.forEach((game) => {
  routes.push({
    path: game.name,
    element: <GamesView game={game} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
