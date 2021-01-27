import LogIn from "../../LogIn";
import Landing from "../../Landing";
import Cart from "../../Cart";
import SignUp from "../../SignUp";
import Store from "../../Store";
import SingleBlog from "../../SingleBlog";
import Blog from "../../Blog";
import Gallery from "../../Gallery";

export const routes = [
  {
    path: "/",
    component: Landing,
    exact: true,
  },

  {
    path: "/store",
    component: Store,
  },
  {
    path: "/login",
    component: LogIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/blog",
    component: Blog,
    exact: true,
  },
  {
    path: "/blog/read",
    component: SingleBlog,
    exact: true,
  },
];
