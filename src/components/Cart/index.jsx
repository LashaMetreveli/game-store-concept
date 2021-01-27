import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BasicLayout from "../BasicLayout";
import Spinner from "../Spinner";
import style from "./Cart.module.scss";
import Button from "../Button";
import {
  clearAllInCartAsync,
  clearCartAsync,
} from "../../redux/actions/cartActions";
import Input from "../Input";

export default function Cart() {
  const [loaded, toggleLoaded] = useState(false);
  const [itemText, setText] = useState("You Have No Items In Your Cart");
  const [buttonText, setButtonText] = useState("Shop Now");

  const [data, setData] = useState({
    fullname: "testUser",
    address: "new york",
    cardnum: "1111-2222-3333-4444",
    exp: "september",
    cvv: "361",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const [user, cartItems, cartSum] = useSelector((state) => [
    state.appUser.user,
    state.appCart.cartItems,
    state.appCart.sum,
  ]);
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(function () {
      toggleLoaded(!loaded);
    }, 700);
  }, []);

  let itemNum = cartItems.length;

  return (
    <BasicLayout>
      {!loaded && <Spinner />}
      {itemNum < 1 && loaded && (
        <div className={style.container}>
          <h1>{itemText}</h1>
          <Button text={buttonText} onClick={() => history.push("/store")} />
        </div>
      )}
      {itemNum > 0 && loaded && (
        <Fragment>
          <div className={style.itemsWrapper}>
            <h1 className={style.header}>Cart</h1>

            {cartItems.map((i) => {
              return (
                <div
                  key={i[0]}
                  className={style.itemContainer}
                  style={{
                    backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.4), 
                    rgba(0, 0, 0, 0.1)
                  ),
                  url(${i[2]})`,
                  }}
                >
                  <h1 className={style.itemName}>{i[0]}</h1>
                  <h1 className={style.cost}>{i[1]}$</h1>
                  <button
                    onClick={() => {
                      dispatch(clearCartAsync(i[0], i[1]));
                    }}
                    className={style.removeButton}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className={style.checkout}>
            <h3 className={style.total}>Checkout</h3>
            <hr />
            <h3 className={style.total}>Total: {cartSum}$</h3>
            <Input
              margin={"10px 10px 10px 40px"}
              value={data.fullname}
              placeholder="full name"
              type="text"
              onChange={(e) => {
                setData({
                  ...data,
                  fullname: e.target.value,
                });
              }}
            />
            <Input
              margin={"10px 10px 10px 40px"}
              value={data.address}
              placeholder="address"
              type="text"
              onChange={(e) => {
                setData({
                  ...data,
                  address: e.target.value,
                });
              }}
            />
            <Input
              margin={"10px 10px 10px 40px"}
              value={data.cardnum}
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              placeholder="1111-2222-3333-4444"
              onChange={(e) => {
                setData({
                  ...data,
                  cardnum: e.target.value,
                });
              }}
            />
            <Input
              margin={"10px 10px 10px 40px"}
              value={data.exp}
              type="text"
              placeholder="exp. month"
              onChange={(e) => {
                setData({
                  ...data,
                  exp: e.target.value,
                });
              }}
            />
            <Input
              margin={"10px 10px 10px 40px"}
              value={data.cvv}
              type="number"
              placeholder="CCV"
              onChange={(e) => {
                setData({
                  ...data,
                  ccv: e.target.value,
                });
              }}
            />
            <br />
            <Button
              text={"Complete Payment"}
              onClick={() => {
                toggleLoaded(false);
                setText(`Purchase Complete. Thanks ${user.user.displayName}`);
                setButtonText("Visit Store Again");
                setTimeout(function () {
                  dispatch(clearAllInCartAsync());
                  toggleLoaded(true);
                }, 1000);
              }}
            />
          </div>
        </Fragment>
      )}
    </BasicLayout>
  );
}
