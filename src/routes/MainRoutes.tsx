import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/pages/home/Home";
import DetailPage from "../components/pages/detailPage/DetailPage";
import PageLayout from "../ui/pageLayout/PageLayout";
import { useMoves } from "../hooks/moves/useMoves";

const MainRoutes = () => {
  const { pathname } = useLocation();
  const { data: exploreData } = useMoves({
    type: pathname.includes("movie") ? "movie" : "tv",
  });
  const routes = [
    { link: "/", element: <Home /> },
    { link: "/movie/:id", element: <DetailPage /> },
    {
      link: "/explore/:type",
      element: <PageLayout typesData={exploreData!} />,
    },
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
