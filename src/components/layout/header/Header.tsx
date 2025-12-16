import { Link } from "react-router-dom";
import scss from "./header.module.scss";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.header}>
            <div className={scss.left}>
              <div className={scss.lftimg}>
                <div className={scss.jo}>
                  <img
                    src="https://img.freepik.com/premium-vector/film-reel-logo-cinema-logo-vector_472355-391.jpg"
                    alt=""
                  />
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%94%D0%BE%D0%BC_%D0%9A%D0%B8%D0%BD%D0%BE.png"
                  alt=""
                />
              </div>
              {/* <span>EcoMovie</span> */}
            </div>
            <GiHamburgerMenu className={scss.burger} />
            <div className={scss.nigth}>
              <nav className={scss.nav}>
                <Link to="/explore/movie">Movies</Link>
                <Link to="/explore/tv">TV Shows</Link>
                <CiSearch />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
