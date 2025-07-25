import { createContext, useReducer } from "react";
import { getAllProducts } from "../data";
import { initialState, ProductReducer } from "../reducers/ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const products = getAllProducts();
  const [state, dispatch] = useReducer(ProductReducer, {
    ...initialState,
    allProducts: products,
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
