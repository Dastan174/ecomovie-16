import Select from "../../shared/select/Select";
import scss from "./PageLayout.module.scss";

const PageLayout = () => {
  return (
    <section className={scss.pageLayout}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.pagesList}>
            <h2>Explore Movies</h2>
            <div className="select">
                <Select/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLayout;
