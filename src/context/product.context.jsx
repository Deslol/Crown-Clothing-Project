import { useState, createContext } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS);

  const value = { products, setProduct };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
