import scss from "./trailerCard.module.scss";

interface ITrailerProps {
  trailer: ITrailer;
}

interface ITrailer {
  imageT: string;
  text: string;
  id: number;
}

const TrailerCard = ({ trailer }: ITrailerProps) => {
  return (
    <div className={scss.card}>
      <img src={trailer.imageT} alt="" />
      <p>{trailer.text}</p>
    </div>
  );
};

export default TrailerCard;
