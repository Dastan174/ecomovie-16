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
          {typesData?.map((el, idx) => (
            <MoveCard movie={el} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLayout;
