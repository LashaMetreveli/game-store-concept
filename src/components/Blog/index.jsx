import BasicLayout from "../BasicLayout";
import style from "./Blog.module.scss";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import blogDB from "./Util/blogDB";
import Card from "./Card";

const categories = ["all", "action", "adventure", "shooter", "openWorld"];

export default function Blog() {
  const [loaded, toggleLoaded] = useState(false);
  const [activeFilter, setFilter] = useState("all");

  const [blogs, setBlogs] = useState(blogDB);

  function changeCategory(category) {
    setFilter(category);
    if (category === "all") {
      setBlogs(blogDB);
    } else {
      setBlogs(blogDB.filter((item) => item.category.includes(category)));
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
            <div className={style.intro}></div>

            <div className={style.productContainer}>
              {blogs.map((p, index) => {
                return (
                  <Card
                    blogID={index}
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
