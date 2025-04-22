import { createContext, useReducer } from "react";

const initialState = { name: "Ejaz", email: "ejaz.ahmed1227@gmail.com" };
const reducer = (state, action) => {
  switch (action.type) {
    case "change_name":
      return { ...state, name: action.payload.name };
      break;
    default:
      return state;
      break;
  }
};
export const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ userState, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};
