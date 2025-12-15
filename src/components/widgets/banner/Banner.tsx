import SearchInput from "../../../ui/searchInput/SearchInput";
import scss from "./banner.module.scss";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const bannerQuotes = [
    "Welcome to Ecomovie - Enjoy the Show!",
    "Discover Movie Magic at EcoMovie",
    "Get Ready for Cinematic Bliss",
  ];

  return (
    <div className={scss.mainContainer}>
      <div className={scss.main}>
        <div className={scss.text}>
          <h1>
            <Typewriter
              words={bannerQuotes}
              loop={0}
              typeSpeed={70}
              deleteSpeed={50}
            />
            <span className={scss.cursor}></span>
          </h1>
        </div>
        <div className={scss.tex}>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Banner;
