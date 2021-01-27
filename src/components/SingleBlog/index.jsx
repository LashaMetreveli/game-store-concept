import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import blogDB from "../Blog/Util/blogDB";
import Spinner from "../Spinner";
import style from "./SingleBlog.module.scss";

export default function SingleBlog() {
  const location = useLocation();
  const blogId = location.state.response;
  const [loaded, toggleLoaded] = useState(false);

  const blog = blogDB[blogId];

  useEffect(() => {
    setTimeout(function () {
      toggleLoaded(!loaded);
    }, 500);
  }, []);

  return (
    <Fragment>
      {!loaded && <Spinner />}
      {loaded && (
        <BasicLayout>
          <div className={style.container}>
            <img className={style.blogImage} src={blog.image} />
            <h1 className={style.blogTitle}>{blog.name}</h1>
            <p className={style.blogText}>{blog.fullText}</p>
          </div>
        </BasicLayout>
      )}
    </Fragment>
  );
}
