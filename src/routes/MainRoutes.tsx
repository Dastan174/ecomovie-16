import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import DetailPage from "../components/pages/detailPage/DetailPage";
import PageLayout from "../ui/pageLayout/PageLayout";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "/movie/:id", element: <DetailPage /> },
    { link: "/explore/:type", element: <PageLayout /> },
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
