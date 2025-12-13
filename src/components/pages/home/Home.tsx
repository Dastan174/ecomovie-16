import { useTrending } from "../../../hooks/trending/useTrending";
import Banner from "../../widgets/banner/Banner";
import MovieCarousel from "../../widgets/movieCarousel/MovieCarousel";

const Home = () => {
  const { data: trendingMovies } = useTrending({ isDay: "day", type: "movie" });
  console.log(trendingMovies);

  return (
    <div>
      <Banner />
      <MovieCarousel data={trendingMovies!} title="Trending" />
      <MovieCarousel data={[]} title="What's Popular" />
      <MovieCarousel data={[]} title="Top rated" />
    </div>
  );
};

export default Home;
