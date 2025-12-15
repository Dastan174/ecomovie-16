import type { Cast } from "../../hooks/types";
import scss from "./actorCard.module.scss";

interface IActorProps {
  actor: Cast;
}

const ActorCard = ({ actor }: IActorProps) => {
  return (
    <div>
      <div className={scss.card}>
        <img
          src={`https://image.tmdb.org/t/p/original/${actor?.profile_path}`}
          alt=""
        />
        <div className={scss.text}>
          <p>{actor.original_name}</p>
          <span>{actor.character}</span>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
