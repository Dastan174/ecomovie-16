import { useActors } from "../../../hooks/actors/useActors.ts";
import type { Cast, Trailer } from "../../../hooks/types.ts";
import ActorCard from "../../../ui/ActorCard/ActorCard.tsx";
import TrailerCard from "../../../ui/TrailerCard/TrailerCard.tsx";
import scss from "./infoCarousel.module.scss";

export interface InfoCarouselProps {
  title: string;
  data: (Cast | Trailer)[];
  isCircle?: boolean;
}

const InfoCarousel = ({ title, data, isCircle }: InfoCarouselProps) => {
  if (!data || data.length === 0) {
    return null;
  }
  const { data: actors } = useActors({ type: "movie", movie_id: 232 });

  return (
    <div>
      <div className={scss.actors}>
        <h2>{title}</h2>
        <div className={scss.carousel}>
          <div className={scss.carouselTrack}>
            {data.map((el, idx) =>
              isCircle ? (
                <ActorCard data={actors!} actor={el} key={el.id || idx} />
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
