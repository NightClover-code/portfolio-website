export * from './api';
export * from './config';

//importing types
import { setBooleanType } from '../types';
//function utils
export const hideNav = (setIsNavHidden: setBooleanType) => {
  //hide nav
  window.addEventListener('resize', (e: any) => {
    if (e.target.innerWidth > 800) {
      setIsNavHidden(true);
    }
  });
};

export const disableScroll = (isNavHidden: boolean) => {
  if (!isNavHidden) {
    document.body.classList.add('disable__scroll');
  } else {
    document.body.classList.remove('disable__scroll');
  }
};

export const disableLinks = (currentItemRef: HTMLUListElement | null) => {
  setTimeout(() => {
    if (currentItemRef) {
      return currentItemRef.classList.add('disable');
    }
  }, 10);
  setTimeout(() => {
    if (currentItemRef) {
      return currentItemRef.classList.remove('disable');
    }
  }, 1000);
};
