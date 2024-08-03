import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Plx from "react-plx";

const parallaxData = [
  {
    start: "self",
    duration: 300,
    properties: [
      {
        startValue: 0,
        endValue: -20,
        property: "translateY",
      },
    ],
  },
];

const Introduction: React.FC = () => {
  const [visibility, setVisibility] = useState<{ [key: string]: boolean }>({
    intro: false,
    mountainView: false,
    oceanView: false,
    facilities: false,
    terrace: false,
    oceanBathtub: false,
    separateViewSpace: false,
    farewell: false,
  });

  const refs = {
    intro: useRef<HTMLHeadingElement | null>(null),
    mountainView: useRef<HTMLDivElement | null>(null),
    oceanView: useRef<HTMLDivElement | null>(null),
    facilities: useRef<HTMLHeadingElement | null>(null),
    terrace: useRef<HTMLDivElement | null>(null),
    oceanBathtub: useRef<HTMLDivElement | null>(null),
    separateViewSpace: useRef<HTMLDivElement | null>(null),
    farewell: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const key = target.dataset.key as string;

          if (entry.isIntersecting) {
            setVisibility((prev) => ({
              ...prev,
              [key]: true,
            }));
          } else {
            setVisibility((prev) => ({
              ...prev,
              [key]: false,
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div>
      <Plx parallaxData={parallaxData}>
        <section
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: 'url("/images/room1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            <h2
              ref={refs.intro}
              data-key="intro"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                marginBottom: "20px",
                fontWeight: "bold",
                textShadow: "2px 2px 4px #000",
                opacity: visibility.intro ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                color: "white",
              }}
            >
              자연이 선사하는 아름다운 풍경
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                color: "white",
                margin: "0 20px",
                opacity: visibility.intro ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              저희 호텔은 바다와 산의 두 가지 자연의 경관을 독특하게 경험할 수
              있는 선택지를 제공합니다. 마운틴뷰 객실에서는 장엄한 산의 웅장함,
              오션뷰 객실에서는 바다의 광활함을 감상하실 수 있습니다. 각기 다른
              매력의 자연 풍경을 통해 특별한 휴식을 즐겨보세요.
            </p>
          </div>
        </section>
      </Plx>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Plx parallaxData={parallaxData}>
            <div
              ref={refs.mountainView}
              data-key="mountainView"
              style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                opacity: visibility.mountainView ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                background: "linear-gradient(135deg, #fff3e0, #ffebee)",
                height: "auto",
                minHeight: "400px",
                maxHeight: "600px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/room1.jpg"
                alt="Mountain View"
                layout="responsive"
                width={600}
                height={400}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "1.5em",
                  textAlign: "center",
                }}
              >
                마운틴 뷰
              </h3>
              <p style={{ fontSize: "1em", lineHeight: "1.6" }}>
                산의 웅장한 전망을 넓은 창문을 통해 감상하며, 시간에 따라 변하는
                산의 다양한 색조와 질감을 느껴보세요. 매일매일 변화하는 자연의
                아름다움을 감상할 수 있으며, 고요한 자연 속에서 시각적인
                평온함과 완벽한 힐링의 순간을 선사할 것입니다.
              </p>
            </div>
          </Plx>
          <Plx parallaxData={parallaxData}>
            <div
              ref={refs.oceanView}
              data-key="oceanView"
              style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                opacity: visibility.oceanView ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                background: "linear-gradient(135deg, #fff3e0, #ffebee)",
                height: "auto",
                minHeight: "400px",
                maxHeight: "600px",
                transitionDelay: "0.5s",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/room2.jpg"
                alt="Ocean View"
                layout="responsive"
                width={600}
                height={400}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "1.5em",
                  textAlign: "center",
                }}
              >
                오션 뷰
              </h3>
              <p style={{ fontSize: "1em", lineHeight: "1.6" }}>
                탁 트인 바다의 경치를 한눈에 담아내며, 파도와 하늘이 만나는
                아름다운 풍경이 시원하게 펼쳐집니다. 해가 뜨고 지는 순간마다
                변하는 바다의 풍경을 감상하면서 시각적인 즐거움과 완벽한 힐링의
                순간을 만끽해 보세요.
              </p>
              0
            </div>
          </Plx>
        </div>
      </section>

      <Plx parallaxData={parallaxData}>
        <section
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: 'url("/images/room1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            <h2
              ref={refs.facilities}
              data-key="facilities"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                marginBottom: "20px",
                fontWeight: "bold",
                textShadow: "2px 2px 4px #000",
                opacity: visibility.facilities ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                color: "white",
              }}
            >
              다양한 객실 시설
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                color: "white",
                margin: "0 20px",
                opacity: visibility.facilities ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              총 44개의 객실을 6가지 유형으로 나뉘어, 객실마다 차별화된 시설을
              배치하여 여행자님의 취향과 일행의 수에 맞추어 아름다운 전망과
              편안하고 독특한 시설을 부담 없는 가격으로 누리실 수 있습니다.
            </p>
          </div>
        </section>
      </Plx>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Plx parallaxData={parallaxData}>
            <div
              ref={refs.terrace}
              data-key="terrace"
              style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                opacity: visibility.terrace ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                background: "linear-gradient(135deg, #fff3e0, #ffebee)",
                height: "auto",
                minHeight: "400px",
                maxHeight: "600px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/room1.jpg"
                alt="Terrace"
                layout="responsive"
                width={600}
                height={400}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "1.5em",
                  textAlign: "center",
                }}
              >
                개별 테라스
              </h3>
              <p style={{ fontSize: "1em", lineHeight: "1.6" }}>
                고요한 파도 소리가 잔잔하게 들려오면서 느끼는 마음의 안정감과
                바다의 시원한 바람이 살랑이며 상쾌한 마음을 느낄 수 있습니다.
                이러한 여유 속에서 진정한 힐링과 재충전을 할 수 있습니다.
              </p>
            </div>
          </Plx>
          <Plx parallaxData={parallaxData}>
            <div
              ref={refs.oceanBathtub}
              data-key="oceanBathtub"
              style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                opacity: visibility.oceanBathtub ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                background: "linear-gradient(135deg, #fff3e0, #ffebee)",
                height: "auto",
                minHeight: "400px",
                maxHeight: "600px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/room1.jpg"
                alt="Ocean Bathtub"
                layout="responsive"
                width={600}
                height={400}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "1.5em",
                  textAlign: "center",
                }}
              >
                오션뷰 욕조
              </h3>
              <p style={{ fontSize: "1em", lineHeight: "1.6" }}>
                투명하게 펼쳐져 있는 속이 뚫린 듯한 바다의 전망을 감상하면서,
                따뜻한 물에 몸을 담그어 한층 더 편안해지고, 스트레스와 피로가
                자연스럽게 녹아내리는 목욕시간을 경험하실 수 있습니다.
              </p>
            </div>
          </Plx>
          <Plx parallaxData={parallaxData}>
            <div
              ref={refs.separateViewSpace}
              data-key="separateViewSpace"
              style={{
                padding: "20px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                opacity: visibility.separateViewSpace ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                background: "linear-gradient(135deg, #fff3e0, #ffebee)",
                height: "auto",
                minHeight: "400px",
                maxHeight: "600px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/room1.jpg"
                alt="Separate View Space"
                layout="responsive"
                width={600}
                height={400}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "1.5em",
                  textAlign: "center",
                }}
              >
                별도 계단형 전망 공간
              </h3>
              <p style={{ fontSize: "1em", lineHeight: "1.6" }}>
                수면공간과 별도로 구분지어 오로지 바다를 구경하기 위하 바다의
                경치를 더욱 넓고 편안하게 감상할 수 있는 독립적인 공간입니다.
                개별 테라스와 다르게 조용하고 아늑하게 바다의 아름다운 풍경을
                만끽할 수 있습니다.
              </p>
            </div>
          </Plx>
        </div>
      </section>

      <Plx parallaxData={parallaxData}>
        <section
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: 'url("/images/room1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            <p
              ref={refs.farewell}
              data-key="farewell"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                color: "white",
                margin: "0 20px",
                opacity: visibility.farewell ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                lineHeight: "1.6",
              }}
            >
              저희 호텔을 찾아주셔서 감사합니다. 저희 호텔에서의 휴식이
              여행자님의 소중한 추억으로 남길 바라겠습니다. 여행의 마지막
              순간까지도 특별한 경험이 되도록 최선을 다하겠습니다.
            </p>
          </div>
        </section>
      </Plx>
    </div>
  );
};

export default Introduction;
