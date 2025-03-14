import React from "react";
import IntroductionItem from "./item/IntroductionItem";
import IntroductionReverseItem from "./item/IntroductionReverseItem";

const Introduction = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 제목 영역 */}
      <div className="mb-8 text-start">
        <h1 className="text-3xl font-bold mb-2">차원이 다른 휴식과 여유를 선사하는 그라미 호텔</h1>
        <p className="text-gray-600">환상적인 뷰 속에서 시간이 천천히 흐르는 곳,<br/>당신만의 힐링을 만끽하세요.</p>
      </div>

      <IntroductionItem 
        img="/images/ocean.jpg" 
        title="오션 뷰"
        description="탁 트인 바다의 경치를 한눈에 담아내며,<br/>파도와 하늘이 만나는
            아름다운 풍경이 시원하게 펼쳐집니다." 
      />
      <div className="mt-8">
        <IntroductionReverseItem 
            img="/images/mountain_rainbow.jpg" 
            title="마운틴 뷰"
            description="산의 웅장한 전망을 넓은 창문을 통해 감상하며,<br/>시간에 따라 변하는 산의 다양한 색조와 질감을 느껴보세요." 
        />
      </div>
      <div className="mt-8">
        <IntroductionItem 
            img="/images/terrace_night.jpg" 
            title="테라스 뷰"
            description="은은한 불꽃이 타오르는 테라스에서<br/>
바다 바람을 느끼며 조용한 밤의 여유를 즐겨보세요.
따뜻한 불멍과 함께하는 순간이<br/>
일상의 번잡함을 잊게 만들어 줍니다." 
        />
      </div>
      <div className="mt-8">
        <IntroductionReverseItem
            img="/images/terrace_b_sunrise.jpg" 
            title="일출 뷰"
            description="넓게 펼쳐진 바다 위로 서서히 떠오르는 태양,<br/>
                시간에 따라 변하는 하늘의 색과 물결의 빛을 느껴보세요.<br/>
                테라스에서 바라보는 황홀한 일출이 <br/>
                당신의 아침을 한층 더욱 특별하게 만들어 줍니다." 
        />
      </div>
      <div className="mt-8">
        <IntroductionItem 
            img="/images/offers_bath.jpg" 
            title="자쿠지에서 맞이하는 황홀한 아침"
            description="따뜻한 자쿠지에 몸을 맡기고,<br/>
눈앞에 펼쳐진 황홀한 일출을 감상하는 순간.<br/>
잔잔한 파도 소리와 함께 천천히 스며드는 아침 햇살이<br/>
일상의 피로를 부드럽게 녹여줍니다.<br/>
포항 그라미 호텔에서,<br/>
가장 아름다운 아침을 온전히 느껴보세요." 
        />
      </div>
      <div className="mt-8">
        <IntroductionReverseItem
            img="/images/royal_b_sunrise.jpg" 
            title="파노라마 오션뷰가 펼쳐지는 프라이빗 휴식"
            description="넓은 창 너머로 펼쳐지는 탁 트인 바다, <br/>
시간에 따라 변하는 하늘과 바다의 색이<br/>
눈앞에서 그림처럼 펼쳐집니다.
<br/><br/>
자쿠지에 몸을 담그고,<br/>
여유로운 다이닝과 함께<br/>
포항 그라미 호텔만의 특별한 오션뷰를 만끽해보세요." 
        />
      </div>
      <div className="mt-8">
        <IntroductionItem 
            img="/images/individual_terrace_view.jpg" 
            title="나만의 개별 테라스에서 즐기는 완벽한 오션뷰"
            description="탁 트인 바다를 눈앞에 두고,<br/>
따스한 햇살과 함께 여유로운 한때를 보내보세요.<br/>
아무런 방해 없이 오롯이 나만의 공간에서<br/>
파도 소리와 함께하는 진정한 힐링을 경험할 수 있습니다." 
        />
      </div>
    </div>
  );
};

export default Introduction;
