//importing react context
import { createContext, useState } from 'react';
//importing types
import { isBooleanState } from '../interfaces';
//context
export const NavContext = createContext<isBooleanState>({
  isNavHidden: true,
  setIsNavHidden: () => '',
  isLoading: false,
  setIsLoading: () => '',
});

export const NavProvider: React.FC = ({ children }) => {
  //local state
  const [isNavHidden, setIsNavHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <NavContext.Provider
      value={{ isNavHidden, setIsNavHidden, isLoading, setIsLoading }}
    >
      {children}
    </NavContext.Provider>
  );
};
