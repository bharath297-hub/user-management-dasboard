import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <span className="navbar-title">User Management Dashboard</span>

      <button
        className="logout-btn"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
