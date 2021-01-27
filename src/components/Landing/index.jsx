import BasicLayout from "../BasicLayout";
import Button from "../Button";
import style from "./Landing.module.scss";
import { useHistory } from "react-router-dom";
import productsFromDB from "../Store/Util/productsFromDB";
import Card from "../Store/Card";
export default function Landing() {
  const history = useHistory();

  let size = 4;
  const products = productsFromDB.slice(0, size);

  return (
    <div className={style.container}>
      <BasicLayout>
        <div className={style.content}>
          <div className={style.cover}>
            <h1 className={style.slogan}>Discover New Games With Us</h1>
            <div className={style.subWrapper}>
              <Button
                text={"go to shop"}
                onClick={() => history.push("/store")}
              />
            </div>
          </div>
          <h1 className={style.featuredHeader}>Featured Today</h1>
          <div className={style.featured}>
            {products.map((p) => {
              return (
                <Card
                  key={p.name}
                  name={p.name}
                  price={p.price}
                  genres={p.category}
                  description={p.description}
                  image={p.image}
                />
              );
            })}
          </div>
        </div>
      </BasicLayout>
    </div>
  );
}
