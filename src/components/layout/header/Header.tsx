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
              <img
                src="https://movie.elcho.dev/assets/eco-movie-logo-a8_bjuTM.svg"
                alt=""
              />
              {/* <span>EcoMovie</span> */}
            </div>
            <div className={scss.nigth}>
              <nav>
                <GiHamburgerMenu />

                <Link to="/">Movies</Link>
                <Link to="/TV Shows">TV Shows</Link>
                <CiSearch />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
