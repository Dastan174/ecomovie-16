import { useRef, useState } from "react";
import scss from "./movie.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import MoveCard from "../../../ui/moveCard/MoveCard";

const MovieCarousel = () => {
  const [click, setClick] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardWidth = 220;
  const gap = 20;
  const step = (cardWidth + gap) * 5;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -step,

      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: step,
      behavior: "smooth",
    });
  };
  function clicked() {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  }

  const movies = [
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
  ];

  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.mainText}>
            <h3>Trending</h3>
            <div className={scss.btns} onClick={clicked}>
              {click ? (
                <button>Day</button>
              ) : (
                <button className={scss.btnColor}>Day</button>
              )}
              {click ? (
                <button className={scss.btnColor}>Week</button>
              ) : (
                <button>Week</button>
              )}
              {click ? (
                <span className={`${scss.bg} ${scss.left}`}></span>
              ) : (
                <span className={scss.bg}></span>
              )}
            </div>
          </div>
        </div>
        <div className={scss.wrapper}>
          <button className={scss.btn} onClick={scrollLeft}>
            <FaArrowLeft />
          </button>

          <div ref={scrollRef} className={scss.cardBar}>
            <div className={scss.cards}>
              {movies.map((el, idx) => (
                <MoveCard movie={el} key={idx} />
              ))}
            </div>
          </div>

          <button className={scss.btn} onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
