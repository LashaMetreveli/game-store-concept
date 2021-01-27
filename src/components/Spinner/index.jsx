import { ScaleLoader } from "react-spinners";
import style from "./Spinner.module.scss";
export default function Spinner() {
  return (
    <div className={style.spinner}>
      <ScaleLoader color={"white"} />
    </div>
  );
}
