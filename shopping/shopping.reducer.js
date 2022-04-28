import * as actionTypes from "./shopping.types";

const INITIAL_STATE = {
  products: [
    {
      id: "m1",
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      img: "https://tse3.mm.bing.net/th?id=OIP.AqGcnEeaV9937h_lz8l8UAHaE6&pid=Api&P=0&w=246&h=163",
    },
    {
      id: "m2",
      title: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      img: "https://tse4.mm.bing.net/th?id=OIP.ejVlTpLo-o0OXyKVvhy_iAHaE6&pid=Api&P=0&w=285&h=189",
    },
    {
      id: "m3",
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      img: "https://tse4.mm.bing.net/th?id=OIP.nFKmPW8RFvPBBfFyHxAX7QHaE8&pid=Api&P=0&w=253&h=168",
    },
    {
      id: "m4",
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      img: "https://tse2.mm.bing.net/th?id=OIP.xbu0ePhpnjcP0rjVdIazEgHaE8&pid=Api&P=0&w=266&h=177",
    },
    {
      id: "m5",
      title: "Chicken Shawarma",
      description: "Special Shawarma with mexican chous..",
      price: 26.99,
      img: "https://tse1.mm.bing.net/th?id=OIP.54H7cFwCZ16yDWwWuOAz1wHaEK&pid=Api&P=0&w=274&h=154",
    },
    {
      id: "m6",
      title: "Pastha",
      description: "tasty pastha with mozerall cheese",
      price: 9.99,
      img: "https://tse1.mm.bing.net/th?id=OIP.Kfks6fSqsTUs4vuniPdxrwHaFj&pid=Api&P=0&w=249&h=187",
    },
  ],
  cart: [],
  currentItem: null,
  //totalQuantity: 0,
  // changed: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      let inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      let inCarts = state.cart.find((item) => item.id === action.payload.id);
      inCarts = inCarts.qty !== 1;
      const value = inCarts
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty - 1 }
              : item
          )
        : state.cart.filter((item) => item.id !== action.payload.id);
      return {
        // ...state,
        // cart: state.cart.filter((item) => item.id !== action.payload.id),
        ...state,
        //cart: state.cart.filter((item) => item.id !== action.payload.id),

        cart: value,
      };

    // case actionTypes.ADJUST_QTY:
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, qty: +action.payload.qty }
    //         : item
    //     ),
    //   };

    default:
      return state;
  }
};

export default shopReducer;
