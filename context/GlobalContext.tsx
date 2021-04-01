//importing hooks & types
import { useState, createContext } from 'react';
import { NavContextInterface } from '../interfaces';
//context
export const NavContext = createContext<NavContextInterface>([
  true,
  () => null,
]);
//context provider
export const NavProvider: React.FC = ({ children }) => {
  //local state
  const [isNavHidden, setIsNavHidden] = useState(true);
  return (
    <NavContext.Provider value={[isNavHidden, setIsNavHidden]}>
      {children}
    </NavContext.Provider>
  );
};
