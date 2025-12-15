import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import scss from "./MoveCard.module.scss";
import { useNavigate } from "react-router-dom";
import type { Movie } from "../../hooks/types";

interface MovieProps {
  movie: Movie;
}

const MoveCard = ({ movie }: MovieProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${movie}/${movie.id}`)}
      className={scss.card}
    >
      <div className={scss.poster}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />

        <div className={scss.category}>
          {movie.genre_ids.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>

        <div className={scss.ratingCircle}>
          <CircularProgressbar
            value={Math.round(movie.vote_average) * 10}
            text={Math.round(movie.vote_average).toString() }
            background
            styles={buildStyles({
              backgroundColor: "#ffffffff",
              textColor: "black",
              pathColor: "#4cd137",
              trailColor: "transparent",
              textSize: "30px",
            })}
          />
        </div>
      </div>

      <div className={scss.cardText}>
        <h3>{movie.title}</h3>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};

export default MoveCard;
