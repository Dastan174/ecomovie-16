import ActorCard from "../../../ui/ActorCard/ActorCard.tsx";
import TrailerCard from "../../../ui/TrailerCard/TrailerCard.tsx";
import scss from "./infoCarousel.module.scss";

export interface IData {
  text?: string;
  image?: string;
  imageT?: string;
  name?: string;
  role?: string;
  id?: number;
}

export interface InfoCarouselProps {
  title: string;
  data: IData[];
  isCircle?: boolean;
}

const InfoCarousel = ({ title, data, isCircle }: InfoCarouselProps) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={scss.actors}>
        <h2>{title}</h2>
        <div className={scss.carousel}>
          <div className={scss.carouselTrack}>
            {data.map((el, idx) =>
              isCircle ? (
                <ActorCard actor={el} key={el.id || idx} />
              ) : (
                <TrailerCard trailer={el} key={el.id || idx} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCarousel;
