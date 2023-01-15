import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { ADD_TO_CART } from "../Context/reducer";
import { Buttons } from "./Buttons";
import "./Card.css";

export const Card = ({ e }) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const addToCart = (e) => {
    const p = {
      ...e,
      qty: 1,
    };
    dispatch({
      type: ADD_TO_CART,
      payload: p,
    });
  };
  return (
    <div className="card">
      <img src={e.imageURL} width="150px" height="150px" alt={e.name} />
      <h3>{e.name}</h3>
      <div className="flex-div">
        <p>{e.type}</p>
        <p>Rs. {e.price}</p>
      </div>
      <div className="flex-div">
        <p>{e.gender}</p>
        <div className="color" style={{ backgroundColor: e.color }}></div>
      </div>
      {cart.some((c) => c.id === e.id) ? (
        <Buttons id={e.id} />
      ) : (
        <button onClick={() => addToCart(e)}>Add To Cart</button>
      )}
    </div>
  );
};
