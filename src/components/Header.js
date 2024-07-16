import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";
export const Header = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>REDUX CARD</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link className="items" to="/cart">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
