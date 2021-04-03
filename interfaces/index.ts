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
export interface Project {
  id: string;
  image: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  title: string;
  name: string;
  description: string;
  github: string;
  website: string;
  skills: {
    title: string;
    logo: string;
    span: boolean;
  }[];
}
