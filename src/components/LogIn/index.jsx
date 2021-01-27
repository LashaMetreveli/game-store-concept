import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BasicLayout from "../BasicLayout";
import Button from "../Button";
import Input from "../Input";
import Spinner from "../Spinner";
import style from "../SignUp/Login.module.scss";
import { logInAsync } from "../../redux/actions/userActions";

export default function LogIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, authError, loading] = useSelector((state) => [
    state.appUser.user,
    state.appUser.error,
    state.appCommon.loading,
  ]);

  useEffect(() => {
    if (user) history.push("/store");
    return () => {};
  }, [user]);

  useEffect(() => {
    setError(authError);
    return () => {};
  }, [authError]);

  const [error, setError] = useState(null);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const isValid = data.email !== "" && data.password !== "";

  const LogIn = () => {
    if (!isValid) {
      setError("Please enter all fields");
    }
    const { email, password } = data;
    dispatch(logInAsync(email, password));
  };

  return (
    <BasicLayout>
      <div className={style.container}>
        {loading && <Spinner />}
        {!loading && (
          <div className={style.container}>
            <div className={style.form}>
              <h4 className={style.label}>Log In</h4>
              <Input
                value={data.email}
                placeholder="test.user@gmail.com"
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
                placeholder="test123"
                type="password"
                onChange={(e) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
              />
              {(error || authError) && <p>{error}</p>}
              <br />
              <Button
                text={"Log In"}
                onClick={() => {
                  LogIn();
                }}
              />
            </div>
          </div>
        )}
      </div>
    </BasicLayout>
  );
}
