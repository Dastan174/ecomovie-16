import { usePopular } from "../../../hooks/popular/usePopular";
import { useRated } from "../../../hooks/rated/useRated";
import { useTrending } from "../../../hooks/trending/useTrending";
import Banner from "../../widgets/banner/Banner";
import MovieCarousel from "../../widgets/movieCarousel/MovieCarousel";

const Home = () => {
  const { data: trendingMovies } = useTrending({ isDay: "day", type: "movie" });
  const { data: popularMovies } = usePopular({ isDay: "week", type: "movie" });
  const { data: ratedMovies } = useRated({ isDay: "week", type: "movie" });
  return (
    <div>
      <Banner />
      <MovieCarousel data={trendingMovies!} title="Trending" />
      <MovieCarousel data={popularMovies!} title="What's Popular" />
      <MovieCarousel data={ratedMovies!} title="Top rated" />
    </div>
  );
};

export default Home;
