import scss from "./actorCard.module.scss";

interface IActorProps {
  actor: IActor;
}

interface IActor {
  image: string;
  name: string;
  role: string;
  id: number;
}

const ActorCard = ({ actor }: IActorProps) => {
  return (
    <div>
      <div className={scss.card}>
        <img src={actor.image} alt="" />
        <div className={scss.text}>
          <p>{actor.name}</p>
          <span>{actor.role}</span>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
