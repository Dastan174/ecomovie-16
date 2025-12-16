import React from "react";
import scss from "./error.module.scss";
import { IoReloadOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const Error = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.error}>
          <h3>Не удается получить доступ к сайту!</h3>
          <p>Сайт localhost не позволяет установить соединение:</p>
          <div className={scss.erbut}>
            <button>
              Повторить
              <IoReloadOutline />
            </button>
            <button>
              Выйти
              <CiLogout />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
