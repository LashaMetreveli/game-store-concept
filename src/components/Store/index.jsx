import BasicLayout from "../BasicLayout";
import style from "./Store.module.scss";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import productsFromDB from "./Util/productsFromDB";
import Card from "./Card";

const categories = ["all", "action", "adventure", "shooter", "openWorld"];

export default function Store() {
  const [loaded, toggleLoaded] = useState(false);
  const [activeFilter, setFilter] = useState("all");

  const [products, setProducts] = useState(productsFromDB);

  function changeCategory(category) {
    setFilter(category);
    if (category === "all") {
      setProducts(productsFromDB);
    } else {
      setProducts(
        productsFromDB.filter((item) => item.category.includes(category))
      );
    }
  }

  useEffect(() => {
    setTimeout(function () {
      toggleLoaded(!loaded);
    }, 500);
  }, []);

  return (
    <BasicLayout>
      <div className={style.container}>
        {!loaded && <Spinner />}
        {loaded && (
          <div className={style.container}>
            <div className={style.intro}>
              <ul className={style.buttonContainer}>
                {categories.map((category, c) => {
                  return (
                    <li key={category}>
                      <button
                        className={
                          category === activeFilter
                            ? style.focusedButton
                            : style.categoryButton
                        }
                        onClick={() => changeCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={style.productContainer}>
              {products.map((p) => {
                return (
                  <Card
                    key={p.name}
                    filterGenre={changeCategory}
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
        )}
      </div>
    </BasicLayout>
  );
}
