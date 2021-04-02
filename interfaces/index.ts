//importing types
import { setNavHiddenType } from '../types';
export interface ServicesDataInterface {
  title: string;
  description: string;
  src: string;
  alt: string;
}
export interface isNavHiddenState {
  isNavHidden: boolean;
  setIsNavHidden: setNavHiddenType;
}
