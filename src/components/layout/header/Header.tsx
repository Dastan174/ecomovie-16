import { useState } from "react";
import { Link } from "react-router-dom";
import scss from "./header.module.scss";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.header}>
            <div className={scss.left}>
              <img
                src="https://movie.elcho.dev/assets/eco-movie-logo-a8_bjuTM.svg"
                alt="EcoMovie"
              />
            </div>

            <div className={scss.nigth}>
              <nav>
                <GiHamburgerMenu />

                <Link to="/explore/movie">Movies</Link>
                <Link to="/explore/tv">TV Shows</Link>
                <CiSearch />
              </nav>
            </div>

            <div className={scss.burger} onClick={toggleMenu}>
              {menuOpen ? (
                <IoMdClose size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className={scss.mobileMenu}>
            <nav>
              <Link onClick={() => setMenuOpen(false)} to="/">
                Movies
              </Link>
              <Link onClick={() => setMenuOpen(false)} to="/tv-shows">
                TV Shows
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
