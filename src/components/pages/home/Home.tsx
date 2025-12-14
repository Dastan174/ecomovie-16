import { useTrending } from "../../../hooks/trending/useTrending";
import Banner from "../../widgets/banner/Banner";
import MovieCarousel from "../../widgets/movieCarousel/MovieCarousel";

const Home = () => {
  const { data: trendingMovies } = useTrending({ isDay: "day", type: "movie" });

  return (
    <div>
      <Banner />
      <MovieCarousel data={trendingMovies!} title="Trending" isSwitch={false} />
      <MovieCarousel data={[]} title="What's Popular" isSwitch={false} />
      <MovieCarousel data={[]} title="Top rated" isSwitch={false} />
    </div>
  );
};

export default Home;
