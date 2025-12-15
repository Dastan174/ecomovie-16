import { useState } from "react";
import scss from "./detailPage.module.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InfoCarousel from "../../widgets/infoCarousel/InfoCarousel";
import { useMovie } from "../../../hooks/oneMovie/useMovie";
import { useParams } from "react-router-dom";
import { useActors } from "../../../hooks/actors/useActors";
import { useTrailers } from "../../../hooks/trailer/useTrailer";

export default function DetailPage() {
  const { id } = useParams();

  const [modal, setModal] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>("");
  const { data: oneMovie } = useMovie({ id });

  const { data: actors } = useActors({ movie_id: +id!, type: "movie" });
  const { data: trailers } = useTrailers({ movie_id: +id!, type: "movie" });
  let numString = oneMovie?.vote_average.toString();
  let num = Number(numString?.replace(".", ""));
  const formatDuration = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h} h ${m} m`;
  };
  console.log(oneMovie?.backdrop_path);

  const open = () => {
    setVideoSrc("https://www.youtube.com/embed/YQ-qToZUybM?list=RDYQ-qToZUybM");
    setModal(true);
  };

  const close = () => {
    setModal(false);
    setVideoSrc("");
  };
  return (
    <div
      className={scss.container}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${oneMovie?.backdrop_path})`,
      }}
    >
      <div className={scss.bg}>
        <div className="container">
          <div className={scss.mainContainer}>
            <div className={scss.image}>
              <img
                src={`https://image.tmdb.org/t/p/original/${oneMovie?.poster_path}`}
                alt="photo"
              />
            </div>
            <div className={scss.cardDetails}>
              <h1>{oneMovie?.title}</h1>
              <div className={scss.category}>
                {oneMovie?.genres.map((el) => (
                  <p>{el.name}</p>
                ))}
              </div>
              <div className={scss.rating}>
                <span className={scss.ratingCircle}>
                  <CircularProgressbar
                    value={num}
                    text={`${oneMovie?.vote_average}`}
                    background
                    styles={buildStyles({
                      backgroundColor: "#04152d",
                      textColor: "#fff",
                      pathColor: "#4cd137",
                      trailColor: "transparent",
                      textSize: "30px",
                    })}
                  />
                </span>
                <a href="#" className={scss.playBut} onClick={open}>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="213.7px"
                    height="213.7px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                  >
                    <polygon
                      className={scss.triangle}
                      id="XMLID_18_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="
	73.5,62.5 148.5,105.8 73.5,149.1 "
                    />

                    <circle
                      className={scss.circle}
                      id="XMLID_17_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                  <p>Watch Trailer</p>
                </a>
              </div>
              <div className={scss.description}>
                <h2>Overview</h2>
                <p>{oneMovie?.overview}</p>
              </div>
              <div className={`${scss.info} ${scss.center}`}>
                <div className={scss.text}>
                  <span>Status:</span>
                  <p>{oneMovie?.status}</p>
                </div>
                <div className={scss.text}>
                  <span>Release Date:</span>
                  <p>{oneMovie?.release_date}</p>
                </div>
                <div className={scss.text}>
                  <span>Runtime:</span>
                  <p>{formatDuration(oneMovie?.runtime ?? 0)}</p>
                </div>
              </div>
              <div className={scss.line}></div>
              <div className={scss.text}>
                <span>Director:</span>
                <p></p>
              </div>
              <div className={scss.line}></div>
              <div className={scss.text}>
                <span>Writer:</span>
                <p>Hiroshi Seko</p>
              </div>
              <div className={scss.line}></div>
            </div>
          </div>
          <InfoCarousel title="Actors" isCircle={true} data={actors!} />
          <InfoCarousel title="Trailers" isCircle={false} data={trailers!} />
        </div>
      </div>
      <div className={modal ? scss.modal : scss.none}>
        <p onClick={close}>close</p>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
