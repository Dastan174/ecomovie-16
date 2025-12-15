import type { Trailer } from "../../hooks/types";
import scss from "./trailerCard.module.scss";

interface ITrailerProps {
  trailer: Trailer;
}

const TrailerCard = ({ trailer }: ITrailerProps) => {
  return (
    <div className={scss.card}>
      <img src={trailer.iso_3166_1} alt="" />
      <p>
        {trailer.name.length > 24
          ? trailer.name.slice(0, 24) + "..."
          : trailer.name}
      </p>
    </div>
  );
};

export default TrailerCard;
