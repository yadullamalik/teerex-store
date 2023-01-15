import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiBadge } from "react-icons/bi";

export const Navbar = () => {
  const [l, setL] = useState(0);
  const {
    state: { cart },
  } = useContext(AppContext);

  useEffect(() => {
    let c = 0;
    for (let i = 0; i < cart.length; i++) {
      c += cart[i].qty;
    }
    setL(c);
  }, [cart]);

  return (
    <div className="nav">
      <h2>TeeRex Store</h2>
      <div className="links-div">
        <Link className="link p" to={"/"}>
          Products
        </Link>
        <Link className="link" to={"/cart"}>
          <AiOutlineShoppingCart className="cart-icon" /> <BiBadge className="badge-icon"/> <span className="badge-count">{l}</span>
        </Link>
      </div>
    </div>
  );
};
