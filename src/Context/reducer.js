export const GET_DATA = "GET_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INC_CART_QTY = "INC_CART_QTY";
export const DEC_CART_QTY = "DEC_CART_QTY";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
        total: state.cart.reduce((a, e) => a + +e.qty * +e.price, 0),
      };
    case INC_CART_QTY:
      return {
        ...state,
        cart: action.payload,
        total: state.cart.reduce((a, e) => a + +e.qty * +e.price, 0),
      };
    case DEC_CART_QTY:
      return {
        ...state,
        cart: action.payload,
        total: state.cart.reduce((a, e) => a + +e.qty * +e.price, 0),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: action.payload,
        total: state.cart.reduce((a, e) => a + +e.qty * +e.price, 0),
      };
    default:
      return state;
  }
};
