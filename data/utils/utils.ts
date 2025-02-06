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

export const viewTypeConvert = (roomType: string) => {
  return roomType === "스탠다드 A" || roomType === "스위트 A" || roomType === "디럭스 A 테라스" || roomType === "로얄 스위트 B" || roomType === "로얄 스위트 A 테라스" ? "오션뷰" : roomType === "코너 스위트" ? "측면 오션뷰" : "마운틴 뷰";
}

export const viewTypeDescription = (roomType: string) => {
  switch (roomType) {
    case "스탠다드 A":
      return "탁 트인 오션뷰를 만끽하며 바다의 파도 소리를 들으며 편안한 휴식을 즐길 수 있는 아늑한 객실";
    case "스탠다드 B":
      return "마운틴 뷰를 자랑하는 아늑한 객실로,\n최고급 침대와 포근한 오리털 이불로 편안한 휴식을 제공합니다.";
    case "디럭스 A 테라스":
      return "개별 테라스에서 환상적인 오션뷰를 즐길 수 있는 특별한 공간으로,\n여유로운 분위기 속에서 잊지 못할 추억을 만들어 보세요.";
    case "디럭스 B 테라스":
      return "자연의 아름다움을 만끽할 수 있는 마운틴 뷰와 넓은 개별 테라스가 있는 특별한 객실\n최고급 침대와 포근한 오리털 이불로 편안한 휴식을 제공합니다.\n산의 경치를 바라보며 하루의 피로를 잊고, 아늑한 분위기 속에서 특별한 경험을 누려보세요.";
    case "스위트 B":
      return "그라미 호텔에서 마운틴 뷰와 오션뷰를 모두 만끽할 수 있는 유일한 객실입니다.\n지친 일상에서 벗어나 아름다운 뷰를 감상하며 특별한 시간을 가져보세요.";
    case "스위트 A":
      return "환상적인 오션뷰를 자랑하는 고급스러운 공간으로, 가족이나 친구와 함께하는 완벽한 휴식을 제공합니다.\n욕조에 몸을 담그고 바다의 아름다움을 감상할 수 있는 특별한 경험을 누려보세요.\n여유로운 분위기 속에서 바다의 경치를 즐기며, 잊지 못할 소중한 시간을 만들어 보세요.";
    case "스탠다드 트윈":
      return "마운틴 뷰를 자랑하는 아늑한 객실로,\n최고급 침대와 포근한 오리털 이불로 편안한 휴식을 제공합니다.";
    case "코너 스위트":
      return "환상적인 오션뷰와 더블 베드 2개를 갖춘 고급스러운 공간으로,\n욕조에서 바다의 아름다움을 감상하며 특별한 시간을 보낼 수 있습니다.";
    case "로얄 스위트 A 테라스":
      return "정면으로 보이는 환상적인 오션뷰와 개별 테라스를 갖춘 최상급 공간으로 그라미호텔의 시그니처 객실입니다.\n개별 테라스에서 동해의 아름다운 일출을 감상하는 럭셔리한 경험을 할 수 있습니다.";
    case "로얄 스위트 B":
      return "그라미 호텔의 시그니처 객실 중 하나인 로얄스위트 B 타입은 대형 유리창으로 자연광이 가득한 럭셔리한 공간으로,\n객실 내 욕조에서 탁 트인 오션뷰를 감상하며 편안한 휴식을 제공합니다.";
  }
}