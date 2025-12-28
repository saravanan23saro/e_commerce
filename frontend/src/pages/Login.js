import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD
import API from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Component = () => {
  const navigate = useNavigate(); // ✅ correct
}


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/users/login", {
        email,
        password,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Login successful");
      navigate("/");   // ✅ HOME
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
