import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const user = userInfo ? JSON.parse(userInfo) : null;

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/">Shop</Link>

      <div>
        {user ? (
          <>
            <span style={{ color: "white", marginRight: "15px" }}>
              Hi, {user.name}
            </span>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">My Orders</Link>
            <button onClick={logoutHandler} className="primary-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
