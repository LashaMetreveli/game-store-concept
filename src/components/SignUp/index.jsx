import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BasicLayout from "../BasicLayout";
import Button from "../Button";
import Input from "../Input";
import Spinner from "../Spinner";
import style from "./Login.module.scss";
import { signupAsync } from "../../redux/actions/userActions";

export default function SignUp() {
  const dispatch = useDispatch();
  const [user, authError, loading] = useSelector((state) => [
    state.appUser.user,
    state.appUser.error,
    state.appCommon.loading,
  ]);
  const history = useHistory();

  const [error, setError] = useState(null);

  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    if (user) history.push("/");
    return () => {};
  }, [user]);

  useEffect(() => {
    setError(authError);
    return () => {};
  }, [authError]);

  const isValid =
    data.email !== "" && data.password !== "" && data.username !== "";

  const SignUp = () => {
    if (!isValid) {
      setError("Please enter all fields");
    }
    const { email, password, username } = data;

    dispatch(signupAsync(email, password, username));
  };

  return (
    <BasicLayout>
      <div className={style.container}>
        {loading && <Spinner />}
        {!loading && (
          <div className={style.container}>
            <div className={style.form}>
              <h4 className={style.label}>Registration</h4>
              <Input
                value={data.email}
                placeholder="email"
                type="email"
                onChange={(e) => {
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
              />
              <Input
                value={data.password}
                placeholder="password"
                type="password"
                onChange={(e) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
              />
              <Input
                value={data.username}
                placeholder="username"
                type="text"
                onChange={(e) => {
                  setData({
                    ...data,
                    username: e.target.value,
                  });
                }}
              />
              {error && <p>{error}</p>}
              <br />
              <Button
                text={"Sign Up"}
                onClick={() => {
                  SignUp();
                }}
              />
            </div>
          </div>
        )}
      </div>
    </BasicLayout>
  );
}
