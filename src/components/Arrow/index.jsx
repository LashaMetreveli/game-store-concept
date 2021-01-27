import { ArrowUp } from "react-feather";
import style from "./Arrow.module.scss";

export default function Arrow() {
  return (
    <div
      className={style.arrow}
      onClick={() => {
        document
          .getElementById("navigation")
          .scrollIntoView({ inline: "center", behavior: "smooth" });
      }}
    >
      <ArrowUp size={45} />
    </div>
  );
}
