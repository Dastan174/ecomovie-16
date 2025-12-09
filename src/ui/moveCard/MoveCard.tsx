import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import scss from "./MoveCard.module.scss";

const MoveCard = () => {
  return (
    <div className={scss.card}>
      <div className={scss.poster}>
        <img
          src="https://image.tmdb.org/t/p/original/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
          alt=""
        />

        <div className={scss.category}>
          <span>Animation</span>
          <span>Comedy</span>
        </div>

        <div className={scss.ratingCircle}>
          <CircularProgressbar
            value={77}
            text="7.7"
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
        <h3>Zootopia 2</h3>
        <span>Nov 26, 2025</span>
      </div>
    </div>
  );
};

export default MoveCard;
