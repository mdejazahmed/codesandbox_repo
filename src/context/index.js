import { CartContextProvider } from "./cartContext";
import { UserContextProvider } from "./userContext";

export const StoreProvider = ({ children }) => {
  return (
    <UserContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </UserContextProvider>
  );
};
