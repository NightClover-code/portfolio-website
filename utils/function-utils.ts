//importing types
import { setNavHiddenType } from '../types';
//function utils
export const hideNav = (setIsNavHidden: setNavHiddenType) => {
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
