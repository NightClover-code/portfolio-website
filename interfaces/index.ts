//importing types
import { setNavHiddenType } from '../types';
export interface isNavHiddenState {
  isNavHidden: boolean;
  setIsNavHidden: setNavHiddenType;
}
export interface ProjectType {
  id: string;
  projectID: string;
  image: Image;
  title: string;
  name: string;
  description: string;
  github: string;
  website: string;
  skill: SkillType[];
}
export interface Image {
  id: string;
  imageID: string;
  alt: string;
  objectPosition: string;
  animationDelay: number;
  imgSource: ImageType;
}

export interface ImageType {
  id: string;
  name: string;
  url: string;
}

export interface HeroType {
  id: string;
  title: string;
  description: string;
  image: ImageType;
}

export interface AdvantageType {
  id: string;
  title: string;
  description: string;
  alt: string;
  image: ImageType;
  animationDelay: number;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  alt: string;
  image: ImageType;
}

export interface SkillType {
  id: string;
  title: string;
  alt: string;
  span: boolean;
  normalLogo: ImageType;
  invertedLogo: ImageType;
}
