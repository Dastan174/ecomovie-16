import scss from "./searchInput.module.scss";

const SearchInput = () => {
  return (
    <div>
      <div className={scss.mainContainer}>
        <input type="text" placeholder="Search for a movie or tv show..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchInput;
