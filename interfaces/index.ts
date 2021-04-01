//importing types
import { SetStateAction } from 'react';
export interface ServicesDataInterface {
  title: string;
  description: string;
  src: string;
  alt: string;
}
export interface isNavHiddenState {
  isNavHidden: boolean;
  setIsNavHidden: (value: SetStateAction<boolean>) => void;
}
