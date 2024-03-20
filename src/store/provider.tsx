import { Provider } from "react-redux";
import store from "./store";
import { ReactElement } from "react";

export const StateProvider = ({ children }: { children: ReactElement }) => {
  return <Provider store={store}>{children}</Provider>;
};
