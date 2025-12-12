import { useState } from "react";
import scss from "./select.module.scss";
import { IoChevronDownOutline } from "react-icons/io5";

const Select = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const genres = ["Action", "Comedy", "Drama", "Horror"];
  const sort = ["Popularity", "Release Date", "Rating"];

  return (
    <div className={scss.selects}>
      <div className={scss.selectLeft}>
        <div className={scss.select} onClick={() => setOpenLeft(!openLeft)}>
          <input type="text" placeholder="Select genres" />
          <span>|</span>
          <span>
            <IoChevronDownOutline />
          </span>
        </div>

        {openLeft && (
          <div className={scss.dropdown}>
            {genres.map((g) => (
              <div className={scss.item} key={g}>
                {g}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={scss.selectRight}>
        <div className={scss.select} onClick={() => setOpenRight(!openRight)}>
          <input type="text" placeholder="Sort by" />
          <span>|</span>
          <span>
            <IoChevronDownOutline />
          </span>
        </div>
        {openRight && (
          <div className={scss.dropdown}>
            {sort.map((el) => (
              <div className={scss.item} key={el}>
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
