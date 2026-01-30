import { useState } from "react";
import { useLoginMutation } from "../api/userApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ username, password }).unwrap();
      dispatch(loginSuccess(response.token));
      navigate("/dashboard");
    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-container" onSubmit={handleSubmit}>
        <h2 className="login-title">Signin </h2>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button">
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
