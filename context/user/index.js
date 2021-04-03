import { createContext, useReducer } from "react";
import { userTypes } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case userTypes.LOGIN:
      return { ...state, user: action.payload };
    case userTypes.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

const initialState = {
  user: null,
};

const UserContext = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, Provider };
