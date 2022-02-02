import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

const ListView = () => {
  const [{ basket }, dispatch] = useStateValue();

  basket.map((item) => console.log(item.id));
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: new Date().getMilliseconds(),
        title: "Kaizen book",
        qty: 1,
        price: 5.0,
      },
    });
  };

  return (
    <div className="container list-container">
      {basket.map((item) => (
        <span key={item.id}>{item.title}</span>
      ))}
      <button onClick={addToBasket} className="btn btn-primary">
        Add List
      </button>
    </div>
  );
};

export default ListView;
