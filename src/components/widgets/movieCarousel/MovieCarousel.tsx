import { useRef, useState } from "react";
import scss from "./movie.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
              <div className={scss.card}>
                <img
                  src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
                  alt="photo"
                />
                <div className={scss.cardText}>
                  <h4>Zootopia 2</h4>
                  <p>Nov 26, 2025</p>
                </div>
              </div>
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
