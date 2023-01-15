import { createContext, useEffect, useReducer } from "react";
import { cartReducer, GET_DATA } from "./reducer";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  useEffect(() => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((r) => r.json())
      .then((r) =>
        dispatch({
          type: GET_DATA,
          payload: r,
        })
      );
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    data: [],
    cart: [],
    total: 0,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
