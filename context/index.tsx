//importing react context
import { createContext, useState } from 'react';
//importing types
import { isNavHiddenState } from '../interfaces';
//nav context
export const NavContext = createContext<isNavHiddenState>({
  isNavHidden: true,
  setIsNavHidden: () => '',
});

export const NavProvider: React.FC = ({ children }) => {
  //local state
  const [isNavHidden, setIsNavHidden] = useState(true);
  return (
    <NavContext.Provider value={{ isNavHidden, setIsNavHidden }}>
      {children}
    </NavContext.Provider>
  );
};
