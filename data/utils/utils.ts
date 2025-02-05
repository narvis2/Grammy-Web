export const preventScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
  document.body.style.overflowY = "scroll";
  document.documentElement.style.scrollBehavior = "auto";
  return currentScrollY;
};

export const allowScroll = (prevScrollY: number) => {
  document.body.style.position = "";
  document.body.style.width = "";
  document.body.style.top = "";
  document.body.style.overflowY = "";
  window.scrollTo(0, prevScrollY);
};

export const bedTypeConvert = (type: string) => {
  switch (type) {
    case 'SINGLE':
      return '싱글';
    default:
      return '더블'
  }
}

export const heightDividerText = (size: number, index: number) => {
  if (size === 1) {
    return '';
  }

  if (index > 0) {
    return '';
  }

  return ' | ';
}
