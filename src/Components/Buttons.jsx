import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { DEC_CART_QTY, INC_CART_QTY } from "../Context/reducer";

export const Buttons = ({ id }) => {
  const [msg, setMsg] = useState("Quantity Reached Maximum 😊");
  const [m, setM] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const add = () => {
    setM(false);
    let arr = cart;
    for (let i = 0; i < cart.length; i++) {
      if (arr[i].id == id) {
        arr[i].qty++;
      }
    }
    dispatch({ type: INC_CART_QTY, payload: arr });
  };
  const dec = () => {
    let arr = cart;
    for (let i = 0; i < cart.length; i++) {
      if (arr[i].id == id && arr[i].qty == 1) {
        arr.splice(i, 1);
      } else if (arr[i].id == id && arr[i].qty > 1) {
        arr[i].qty--;
      }
    }
    dispatch({ type: DEC_CART_QTY, payload: arr });
  };

  const timer = () => {
    let a = setInterval(() => {
      setM(true);
    }, 10);
    setTimeout(() => {
      clearInterval(a);
      setM(false);
    }, 4000);
  };

  const handleInc = () => {
    cart.some((e) => e.id == id && e.quantity > e.qty) ? add() : timer();
  };

  const handleDec = () => {
    dec();
  };
  return (
    <div>
      {m && <div className="msg">{msg}</div>}
      <button onClick={handleDec}>-</button>
      <button>{cart.map((e) => e.id == id && e.qty)}</button>
      <button onClick={handleInc}>+</button>
    </div>
  );
};
