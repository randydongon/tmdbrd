export const initialState = {
  basket: [
    {
      id: 1,
      title: "Javascript for beginners",
      qty: 1,
      price: 5.0,
    },
    {
      id: 2,
      title: "Python for beginners",
      qty: 1,
      price: 10.0,
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
