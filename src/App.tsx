import { useActors } from "./hooks/actors/useActors";
import { useTrailers } from "./hooks/trailer/useTrailer";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const { data: actors } = useActors({ type: "movie", movie_id: 212 });
  console.log(actors);
  const { data: trailers } = useTrailers({ type: "movie", movie_id: 212 });
  console.log(trailers);

  return (
    <>
      {" "}
      <MainRoutes />{" "}
    </>
  );
};

export default App;
