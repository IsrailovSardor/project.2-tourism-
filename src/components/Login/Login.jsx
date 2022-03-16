import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Context } from "../Context/Contex";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, user } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3004/login/", {
        email,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };


  console.log(user);

  return (
    <div className="h-56">
      <form onSubmit={handleLogin} className="flex flex-col justify-between">
        <div className="my-2 ">
          <TextField
            value={email}
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            id="post-title"
            label="Введите email"
            variant="outlined"
            className="reg-input"
            required
          />
        </div>
        <div className="my-2">
          <TextField
            value={password}
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            id="post-title"
            label="Введите пароль"
            variant="outlined"
            className="reg-input"
            required
          />
        </div>
        <div className="mt-2 text-center">
          <Button type="submit" variant="contained">
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
