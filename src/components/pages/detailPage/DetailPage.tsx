import { useState } from "react";
import scss from "./detailPage.module.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InfoCarousel from "../../widgets/infoCarousel/InfoCarousel";

export default function DetailPage() {
  const [modal, setModal] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string>("");
  const open = () => {
    setVideoSrc("https://www.youtube.com/embed/YQ-qToZUybM?list=RDYQ-qToZUybM");
    setModal(true);
  };

  const close = () => {
    setModal(false);
    setVideoSrc(""); // <— стоп видео
  };
  return (
    <div className={scss.container}>
      <div className={scss.bg}>
        <div className="container">
          <div className={scss.mainContainer}>
            <div className={scss.image}>
              <img
                src="https://image.tmdb.org/t/p/original/pHyxb2RV5wLlboAwm9ZJ9qTVEDw.jpg"
                alt="photo"
              />
            </div>
            <div className={scss.cardDetails}>
              <h1>Chainsaw Man - The Movie: Reze Arc (2025)</h1>
              <div className={scss.category}>
                <p>Animation</p>
                <p>Action</p>
                <p>Romance</p>
                <p>Fantasy</p>
              </div>
              <div className={scss.rating}>
                <span className={scss.ratingCircle}>
                  <CircularProgressbar
                    value={70}
                    text="7.9"
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
                <p>
                  In a brutal war between devils, hunters, and secret enemies, a
                  mysterious girl named Reze has stepped into Denji's world, and
                  he faces his deadliest battle yet, fueled by love in a world
                  where survival knows no rules.
                </p>
              </div>
              <div className={`${scss.info} ${scss.center}`}>
                <div className={scss.text}>
                  <span>Status:</span>
                  <p>Released</p>
                </div>
                <div className={scss.text}>
                  <span>Release Date:</span>
                  <p>Sep 19, 2025</p>
                </div>
                <div className={scss.text}>
                  <span>Runtime:</span>
                  <p>1h 40m</p>
                </div>
              </div>
              <div className={scss.line}></div>
              <div className={scss.text}>
                <span>Director:</span>
                <p>Tatsuya Yoshihara</p>
              </div>
              <div className={scss.line}></div>
              <div className={scss.text}>
                <span>Writer:</span>
                <p>Hiroshi Seko</p>
              </div>
              <div className={scss.line}></div>
            </div>
          </div>
          <InfoCarousel
            title="Actors"
            isCircle={true}
            data={[
              {
                name: "Mister Bean",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWchmcrtA5uEUhXTiqcO3ghT4iTzMy-SH9ww&s",
                role: "mr bean",
              },
            ]}
          />
          <InfoCarousel
            title="Trailers"
            isCircle={false}
            data={[
              {
                text: "Mister Bean",
                imageT:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWchmcrtA5uEUhXTiqcO3ghT4iTzMy-SH9ww&s",
              },
            ]}
          />
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
