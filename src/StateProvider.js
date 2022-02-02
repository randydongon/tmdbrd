// import React, { createContext, useReducer, useContext } from "react";

// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initilastate, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initilastate)}>
//     {children}
//   </StateContext.Provider>
// );
// export const useStateValue = () => useContext(StateContext);

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
