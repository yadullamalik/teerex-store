import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { REMOVE_ITEM } from "../Context/reducer";
import { Buttons } from "./Buttons";
import "./Cart.css";

export const Cart = () => {
  const {
    state: { cart, total },
    dispatch,
  } = useContext(AppContext);

  const handleRemove = (i) => {
    let arr = cart;
    arr.splice(i, 1);
    dispatch({ type: REMOVE_ITEM, payload: arr });
  };

  return (
    <div className="cart">
      <div className="cart-div">
        {cart.map((e, i) => {
          return (
            <div key={e.id} className="cart-main-div">
              <img src={e.imageURL} width="80px" alt={e.name} />
              <h3>{e.name}</h3>
              <p>{e.type}</p>
              <p>Rs. {e.price}</p>
              <p>{e.gender}</p>
              <div className="color" style={{ backgroundColor: e.color }}></div>
              <div className="btns-div">
                <Buttons id={e.id} />
              </div>
              <button className="remove-btn" onClick={() => handleRemove(i)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="filters summary">
        <h3>
          Subtotal <span style={{ fontSize: "22px" }}>{cart.length}</span> items
        </h3>
        <h1>Total: ₹ {total}</h1>
        <button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
