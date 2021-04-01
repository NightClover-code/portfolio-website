import { Dispatch, SetStateAction } from 'react';
export interface ServicesDataInterface {
  title: string;
  description: string;
  src: string;
  alt: string;
}
export type NavContextInterface = [boolean, Dispatch<SetStateAction<boolean>>];
