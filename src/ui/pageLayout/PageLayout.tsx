import { useLocation } from "react-router-dom";
import Select from "../../shared/select/Select";
import scss from "./PageLayout.module.scss";
import MoveCard from "../moveCard/MoveCard";

interface PageLayoutProps {
  typesData: any[];
}

const PageLayout = ({ typesData }: PageLayoutProps) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const movies = [
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
    {
      name: "Zootopia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbsYMFIvTxIagOdjojl06i1joprdIv2sp2w&s",
      date: "10 december",
      rating: 7.0,
      categories: ["animation", "drama"],
      id: 1,
    },
  ];
  return (
    <section className={scss.pageLayout}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.pagesList}>
            <h2>
              Explore {pathname.includes("movie") ? "Movies" : "Tv Shows"}
            </h2>
            <div className="select">
              <Select />
            </div>
          </div>
        </div>
        <div className={scss.list}>
          {typesData.map((el, idx) => (
            <MoveCard movie={el} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLayout;
