import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import scss from "./MoveCard.module.scss";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  movie: IMovie;
}

interface IMovie {
  image: string;
  name: string;
  date: string;
  rating: number;
  categories: string[];
  id: number;
}

const MoveCard = ({ movie }: MovieProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${movie}/${movie.id}`)}
      className={scss.card}
    >
      <div className={scss.poster}>
        <img src={movie.image} alt="" />

        <div className={scss.category}>
          {movie.categories.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>

        <div className={scss.ratingCircle}>
          <CircularProgressbar
            value={movie.rating}
            text={movie.rating.toString()}
            background
            styles={buildStyles({
              backgroundColor: "#ffffffff",
              textColor: "black",
              pathColor: "#4cd137",
              trailColor: "transparent",
              textSize: "30px",
            })}
          />
          <iframe src="" frameborder="0"></iframe>
        </div>
      </div>

      <div className={scss.cardText}>
        <h3>{movie.name}</h3>
        <span>{movie.date}</span>
      </div>
    </div>
  );
};

export default MoveCard;
