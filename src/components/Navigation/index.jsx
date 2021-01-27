import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import style from "./Navigation.module.scss";
import { LogOut, ShoppingCart } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync } from "../../redux/actions/userActions";

export default function Navigation() {
  const [user, cartItems] = useSelector((state) => [
    state.appUser.user,
    state.appCart.cartItems,
  ]);
  const dispatch = useDispatch();

  return (
    <div className={style.container} id="navigation">
      <Logo />

      <div className={style.NavLinks}>
        <NavLink
          to="/store"
          className={style.navLink}
          activeClassName={style.activeNavLink}
          exact
        >
          store
        </NavLink>
        <NavLink
          to="/blog"
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          blog
        </NavLink>
        <NavLink
          to="/gallery"
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          gallery
        </NavLink>
      </div>
      <div className={style.rightNavLinks}>
        {user && (
          <span className={style.relat}>
            <NavLink
              to="/cart"
              className={style.navLink}
              activeClassName={style.activeNavLink}
            >
              <ShoppingCart />
            </NavLink>
            {cartItems.length !== 0 && (
              <span className={style.notif}>{cartItems.length}</span>
            )}
          </span>
        )}

        {!user && (
          <NavLink
            to="/login"
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            login
          </NavLink>
        )}

        {!user && (
          <NavLink
            to="/signup"
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            sign up
          </NavLink>
        )}

        {user && (
          <p className={style.profileDropdown}>{user.user.displayName}</p>
        )}
        {user && (
          <NavLink
            to="/"
            onClick={() => {
              dispatch(logOutAsync());
            }}
            className={style.navLink}
          >
            <LogOut />
          </NavLink>
        )}
      </div>
    </div>
  );
}

// test.user@gmail.com
// test123
