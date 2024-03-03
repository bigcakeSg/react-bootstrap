import { createContext } from "react";

export interface ContextInterface {
  value: number;
  changeValue: () => void;
}

const MyContext = createContext<ContextInterface>({
  value: 0,
  changeValue: () => null,
});

export default MyContext;
