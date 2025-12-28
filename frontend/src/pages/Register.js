import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import API from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Component = () => {
  const navigate = useNavigate(); // ✅ correct
}


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users/register", {
        name,
        email,
        password,
      });

      alert("Registration successful");
      navigate("/login");   // ✅ USE THIS
    } catch (error) {
      alert(error.response?.data?.message || "Register failed");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

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

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
