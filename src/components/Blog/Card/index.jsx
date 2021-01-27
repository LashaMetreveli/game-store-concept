import style from "./Card.module.scss";
import uuid4 from "uuid";
import { useHistory } from "react-router-dom";

export default function Card({ name, description, image, genres, blogID }) {
  const history = useHistory();

  console.log(blogID);

  return (
    <div className={style.container}>
      <div className={style.middle}>
        <img
          className={style.image}
          src={image}
          onClick={() => {
            window.scrollTo(0, 0);
            history.push({
              pathname: "/blog/read",
              state: {
                response: blogID,
              },
            });
          }}
        />
      </div>

      <h2 className={style.name}>{name}</h2>

      {genres.map((g) => {
        return (
          <span key={g + uuid4()} className={style.ganre}>
            {g}
          </span>
        );
      })}
      <hr className={style.line} />
      <p className={style.desc}>{description}</p>
    </div>
  );
}
