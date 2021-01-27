import BasicLayout from "../BasicLayout";
import style from "./Gallery.module.scss";
import imagesDB from "./Util/imagesDb";

export default function Gallery() {
  return (
    <BasicLayout showFooter={false}>
      <div className={style.container}>
        <div className={style.gallery}>
          {imagesDB.map((i) => {
            return (
              <div className={style.item} key={i}>
                <img src={`${i}`} />
                <p className={style.desc}>description</p>
              </div>
            );
          })}
        </div>
      </div>
    </BasicLayout>
  );
}
