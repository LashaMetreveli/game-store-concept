import style from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className={style.container}>
      <NavLink to="/" className="nav-link" exact>
        <h1 className={style.text}>G store</h1>
      </NavLink>
    </div>
  );
}
