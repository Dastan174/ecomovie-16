import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "/", element: "" },
    { link: "/", element: "" },
  ];
  return (
    <Routes>
      {routes.map((el, idx) => (
        <Route path={el.link} element={el.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
