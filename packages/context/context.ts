import { createContext } from "react";

const defaulta: {
  selected: number[];
  change: (a: number[]) => void;
} = {
  change(v) {},
  selected: [],
};

export const ListContext = createContext(defaulta);
