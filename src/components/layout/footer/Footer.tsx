import scss from "./footer.module.scss";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.footer}>
            <div className={scss.ferst}>
              <div className={scss.palm}>
                <a href="#">Terms Of Use</a>
                <a href="#">Privacy-Policy</a>
                <a href="#">About</a>
                <a href="#">Blog </a>
                <a href="#">FAQ</a>
              </div>
              <p>
                EcoMovie - a unique website providing fascinating information
                about movies and TV shows. Here you can discover all the
                necessary details about your favorite films, actors, directors,
                ratings, and much more. EcoMovie boasts a stylish and intuitive
                interface that makes your search for cinematic masterpieces as
                convenient and enjoyable as possible.
              </p>
            </div>
            <div className={scss.past}>
              <span>
                <FaDiscord />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaVk />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <FaGithub />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
