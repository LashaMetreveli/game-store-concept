import style from "./Card.module.scss";
import Button from "../../Button";
import { useDispatch, useSelector } from "react-redux";
import uuid4 from "uuid";
import { addToCartAsync } from "../../../redux/actions/cartActions";
import { useState } from "react";

export default function Card({
  name,
  description,
  price,
  image,
  genres,
  filterGenre,
}) {
  const dispatch = useDispatch();

  const [cartItems, user] = useSelector((state) => [
    state.appCart.cartItems,
    state.appUser.user,
  ]);
  const [notification, setNotification] = useState(null);
  const handleAddToCart = () => {
    let valid = true;
    cartItems.map((i) => {
      if (i[0] === name) {
        valid = false;
        setNotification("Item Is Already In Your Cart");
      }
    });

    if (valid) {
      dispatch(addToCartAsync(name, price, image));
    }
    console.log(cartItems);
  };

  return (
    <div className={style.container}>
      <div className={style.middle}>
        <img className={style.image} src={image} />
        <span className={style.hiddenButton}>
          {user && <Button text={"Add To Cart"} onClick={handleAddToCart} />}
          {notification && <p>{notification}</p>}
        </span>
      </div>

      <h2 className={style.name}>{name}</h2>

      {genres.map((g) => {
        return (
          <span
            onClick={() => filterGenre && filterGenre(g)}
            key={g + uuid4()}
            className={style.ganre}
          >
            {g}
          </span>
        );
      })}
      <p className={style.price}>{price}$</p>
      <hr className={style.line} />
      <p className={style.desc}>{description}</p>
    </div>
  );
}
