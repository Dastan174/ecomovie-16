import scss from "./detailPage.module.scss";

export default function DetailPage() {
  return (
    <div className={scss.container}>
      <div className={scss.bg}>
        <div className="container">
          <div className={scss.mainContainer}>
            <img
              src="https://image.tmdb.org/t/p/original/pHyxb2RV5wLlboAwm9ZJ9qTVEDw.jpg"
              alt="photo"
            />
            <div className={scss.cardDetails}>
              <h1>Chainsaw Man - The Movie: Reze Arc (2025)</h1>
              <div className={scss.genre}>
                <p>Animation</p>
                <p>Action</p>
                <p>Romance</p>
                <p>Fantasy</p>
              </div>
              <div className={scss.rating}>
                <span>7.9</span>
                <span>play</span>
              </div>
              <div className={scss.description}>
                <h4>Overview</h4>
                <p>
                  In a brutal war between devils, hunters, and secret enemies, a
                  mysterious girl named Reze has stepped into Denji's world, and
                  he faces his deadliest battle yet, fueled by love in a world
                  where survival knows no rules.
                </p>
              </div>
              <div className={scss.info}>
                <span>Status:</span>
                <p>Released</p>
                <span>Release Date::</span>
                <p>Sep 19, 2025</p>
                <span>Runtime:</span>
                <p>1h 40m</p>
              </div>
              <div>line</div>
              <div>
                <span>Director</span>
                <p>Tatsuya Yoshihara</p>
              </div>
              <div>
                <span>Writer</span>
                <p>Hiroshi Seko</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// https://image.tmdb.org/t/p/original/kfXgo2rMF1A19celCwLyQ4Xwpf8.jpg
