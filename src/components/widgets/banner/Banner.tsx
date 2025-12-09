import { useEffect, useState } from "react";
import SearchInput from "../../../ui/searchInput/SearchInput";
import scss from "./banner.module.scss";

const Banner = () => {
  const fullText: string = "Welcome to EcoMovie - Enjoy the Show!";

  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index: number = 0;
    const speed: number = 70;

    const typingInterval: number = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div>
      <div className={scss.mainContainer}>
        <div className={scss.text}>
          <h1>
            {displayedText}
            <span className={scss.cursor}></span>
          </h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <SearchInput />
      </div>
    </div>
  );
};

export default Banner;
