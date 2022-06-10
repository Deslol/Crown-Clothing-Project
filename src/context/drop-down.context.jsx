import { createContext, useState } from 'react';

export const DropDownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const DropDownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
