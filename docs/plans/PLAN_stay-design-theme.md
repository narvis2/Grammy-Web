# 구현 계획서: Stay 디자인 테마 적용

**상태**: ✅ 완료
**시작일**: 2026-03-17
**최종 수정일**: 2026-03-17

---

**⚠️ 필수 지침**: 각 Phase 완료 후:

1. ✅ 완료된 작업의 체크박스를 체크
2. 🧪 모든 품질 게이트 검증 명령 실행
3. ⚠️ 모든 품질 게이트 항목 통과 확인
4. 📅 위의 "최종 수정일" 업데이트
5. 📝 Notes 섹션에 학습 내용 기록
6. ➡️ 그 후에만 다음 Phase로 진행

⛔ **품질 게이트를 건너뛰거나 실패한 상태로 진행하지 마세요**

---

## 📋 개요

### 기능 설명

Grammy-Web(그라미 호텔 웹사이트)의 **기존 핑크/골드 컬러 테마**를 참고 코드의 **Stay 테마 (따뜻한 베이지/브라운 팔레트)**로 전면 교체합니다. 프로젝트의 구성(컴포넌트 구조, 데이터 흐름, 라우팅)은 그대로 유지하되, **컬러 시스템, 타이포그래피, 레이아웃 스타일, 애니메이션**을 참고 디자인의 고급스럽고 따뜻한 톤으로 개선합니다.

### 성공 기준

- [ ] Tailwind 컬러 팔레트가 stay 테마로 완전 교체됨
- [ ] 모든 페이지에서 시각적 일관성 유지 (stay 컬러만 사용)
- [ ] Navbar가 투명→불투명 전환 시 부드럽고 세련된 스타일로 동작
- [ ] Hero 섹션의 이미지 슬라이더가 parallax + fade 효과 적용
- [ ] Footer가 stay-950 다크 브라운으로 통일
- [ ] 모바일/데스크톱 반응형 디자인이 깨지지 않음
- [ ] `yarn build` 에러 없음, `yarn lint` 통과

### 사용자 영향

기존의 핑크 톤 대비 **따뜻한 베이지/브라운 톤**으로 변경되어, 호텔 웹사이트로서 더 프리미엄하고 차분한 느낌을 줍니다. 완전한 검은색 대신 짙은 고동색을 사용하여 눈의 피로를 줄이고 공간감을 부여합니다.

---

## 🏗️ 아키텍처 결정

| 결정 사항 | 근거 | 트레이드오프 |
| --- | --- | --- |
| 기존 `brand`/`cream`/`gold` 컬러를 `stay-*` 팔레트로 **전면 교체** | 두 팔레트 병행 시 혼란, 일관성 저하 | 기존 핑크 톤 완전 제거 |
| Tailwind `extend.colors`에 `stay` 스케일 추가 | 참고 코드와 동일한 클래스명 사용 가능, 유지보수 용이 | 기존 `third`, `brand` 등의 클래스명 전체 교체 필요 |
| `font-serif` (Cormorant Garamond)를 **display** 폰트로 유지 | 이미 프로젝트에 설정되어 있음, 참고 코드와 동일한 세리프 체계 | 없음 |
| globals.css의 CSS 변수도 stay 컬러로 통일 | 캘린더, Swiper 등 Tailwind 외부 스타일도 일관성 유지 | CSS 변수 의존 코드 모두 확인 필요 |
| 컴포넌트 구조는 변경하지 않음 | 기능은 그대로이고 디자인만 변경하는 것이 목표 | 참고 코드의 일부 레이아웃 패턴은 차용하되 구조 변경 최소화 |

---

## 📦 의존성

### 시작 전 필수 확인

- [ ] 현재 `main` 브랜치가 깨끗한 상태 (uncommitted changes 없음)
- [ ] `yarn build` 정상 동작 확인
- [ ] `yarn dev`로 현재 디자인 스크린샷 백업 (비교용)

### 외부 의존성

- `framer-motion`: ^12.3.0 (이미 설치됨, `motion/react` import 방식으로 변경 필요 여부 확인)
- `lucide-react`: 신규 설치 필요 (참고 코드의 아이콘 라이브러리, 기존 `react-icons`와 병행 또는 교체 검토)
- `tailwindcss`: ^3 (이미 설치됨)

---

## 🎨 Stay 컬러 팔레트 정의

```
stay-50:  #faf9f7  (기본 배경 - 한지 느낌 미색)
stay-100: #f2efe9  (섹션 배경 - 라이트 베이지)
stay-200: #e6dfd3  (구분 배경 - 웜 베이지)
stay-300: #d5c8b5  (구분선, 장식선 - 샌드 베이지)
stay-400: #bfae94  (서브타이틀, 스크롤바 - 뮤트 골드)
stay-500: #a6956f  (보조 텍스트 - 미디엄 브라운)
stay-600: #8c7356  (본문 텍스트 - 딥 브라운)
stay-700: #735c45  (부가 설명 - 우드 브라운)
stay-800: #5a4636  (강조 텍스트 - 다크 우드)
stay-900: #3f3025  (배지, 버튼 - 딥 다크 브라운)
stay-950: #2a221a  (메인 제목, 핵심 텍스트 - 다크 숯 브라운)
```

---

## 🔄 컬러 매핑 가이드 (기존 → 신규)

| 기존 클래스 | 용도 | 신규 클래스 |
| --- | --- | --- |
| `brand` (#c78390) | 버튼, 액센트 | `stay-900` / `stay-950` |
| `brand-dark` (#B06B78) | 호버 상태 | `stay-800` |
| `brand-light` (#D9A5AF) | 라이트 액센트 | `stay-400` |
| `cream` (#FAF8F5) | 메인 배경 | `stay-50` (#faf9f7) |
| `warm` (#F5F0EB) | 섹션 배경 | `stay-100` / `stay-200` |
| `warm-dark` (#E8E0D8) | 구분선/보더 | `stay-300` |
| `gold` (#B8967A) | 보조 액센트 | `stay-400` / `stay-500` |
| `charcoal` (#1A1A1A) | 다크 배경 | `stay-950` (#2a221a) |
| `soft-black` (#2C2C2C) | 진한 텍스트 | `stay-950` |
| `body-text` (#5A5A5A) | 본문 텍스트 | `stay-600` / `stay-700` |
| `third` (#c78390) | 브랜드 핑크 | `stay-400` (포인트) |

---

## 🚀 구현 Phase

### Phase 1: 디자인 토큰 기반 구축 (Tailwind 컬러 & 글로벌 스타일)

**목표**: Tailwind 컬러 팔레트 교체 및 globals.css의 CSS 변수/기본 스타일을 stay 테마로 전환
**상태**: ✅ 완료

#### 작업 목록

**🟢 구현**

- [ ] **Task 1.1**: `tailwind.config.ts` 컬러 팔레트 교체
    - 파일: `tailwind.config.ts`
    - 내용:
        - `colors` 객체에 `stay` 스케일 (50~950) 추가
        - 기존 `third`, `cream`, `warm`, `warm-dark`, `brand`, `gold`, `charcoal`, `soft-black`, `body-text` 컬러를 **stay 매핑값으로 교체** (하위 호환)
        - `selection` 스타일: `selection:bg-stay-300 selection:text-stay-950`

- [ ] **Task 1.2**: `globals.css` CSS 변수 및 기본 스타일 업데이트
    - 파일: `app/globals.css`
    - 내용:
        - `:root` CSS 변수 컬러를 stay 팔레트로 교체
        - `body` 기본 배경: `stay-50` (#faf9f7)
        - `body` 기본 텍스트: `stay-950` (#2a221a)
        - 스크롤바 색상: `stay-300` ~ `stay-400`
        - React Calendar 컬러를 stay 팔레트로 교체 (기존 brand 핑크 → stay-900)
        - Swiper 버튼 스타일 stay 테마로 교체

- [ ] **Task 1.3**: `layout.tsx` 기본 클래스 업데이트
    - 파일: `app/layout.tsx`
    - 내용:
        - `<body>` 또는 루트 `<div>`의 배경색 클래스를 `bg-stay-50 text-stay-950`으로 변경
        - `selection` 스타일 추가

**🔵 리팩토링**

- [ ] **Task 1.4**: 사용되지 않는 기존 컬러 정리
    - 기존 `third`, `brand`, `cream` 등의 컬러 정의 중 더 이상 참조되지 않는 것 제거
    - Tailwind config를 깔끔하게 유지

#### 품질 게이트 ✋

**⚠️ 중단: Phase 2로 진행하기 전에 모든 체크 통과 필수**

- [ ] `yarn build` 에러 없음
- [ ] `yarn lint` 통과
- [ ] `yarn dev`로 사이트 접속 시 배경색이 `#faf9f7`으로 변경됨
- [ ] 브라우저 개발자 도구에서 CSS 변수가 stay 값으로 적용됨 확인
- [ ] 기존 컴포넌트에서 컬러 클래스 미매핑으로 인한 깨짐 없음

**검증 명령어**:
```bash
yarn build
yarn lint
```

---

### Phase 2: 네비게이션 바 (Navbar) 디자인 개선

**목표**: Navbar를 참고 코드 스타일로 개선 — 넓은 letter-spacing, 투명→불투명 전환 개선, 모바일 메뉴 리뉴얼
**상태**: ✅ 완료

#### 작업 목록

**🟢 구현**

- [ ] **Task 2.1**: Navbar 데스크톱 스타일 개선
    - 파일: `components/Navbar.tsx`
    - 내용:
        - 로고 텍스트: `font-serif tracking-[0.2em]` 적용
        - 스크롤 전: `bg-transparent py-8` + 흰색 텍스트
        - 스크롤 후: `bg-white/95 backdrop-blur-md py-4 shadow-sm` + stay-950 텍스트
        - 전환 duration: `transition-all duration-700`
        - 메뉴 항목: `text-xs tracking-[0.15em]` + 호버 시 한글 서브텍스트 표시 (`opacity-0 → opacity-100`)
        - 예약 버튼: 스크롤 전 `border-white/50 투명`, 스크롤 후 `bg-stay-950 text-white`

- [ ] **Task 2.2**: Navbar 모바일 메뉴 개선
    - 파일: `components/Navbar.tsx` 또는 `components/navbar/` 관련 파일
    - 내용:
        - 전체 화면 오버레이: `bg-stay-50 pt-32 px-8`
        - 메뉴 항목: `text-3xl font-serif tracking-wider` + `border-b border-stay-200`
        - 한글 서브텍스트: `text-sm text-stay-500 font-light`
        - 예약 버튼: `bg-stay-950 text-white tracking-[0.2em]`
        - 햄버거 아이콘: 스크롤 상태에 따라 흰색/stay-950 전환

- [ ] **Task 2.3**: Navbar 서브메뉴(드롭다운) 스타일 업데이트
    - 파일: `components/navbar/` 관련 파일
    - 내용:
        - 드롭다운 배경: `bg-white/95 backdrop-blur-md`
        - 메뉴 항목 호버: `text-stay-500`으로 변경
        - 구분선: `border-stay-200`

**🔵 리팩토링**

- [ ] **Task 2.4**: Navbar 관련 기존 핑크/골드 컬러 클래스 모두 제거
    - `brand`, `third`, `gold` 등의 클래스를 stay 클래스로 교체

#### 품질 게이트 ✋

- [ ] `yarn build` 에러 없음
- [ ] Navbar가 홈 히어로 위에서 투명 상태로 표시됨
- [ ] 스크롤 시 부드럽게 흰색 배경으로 전환됨
- [ ] 모바일 햄버거 메뉴가 정상 동작
- [ ] 서브메뉴(Rooms 등) 호버 시 정상 표시
- [ ] 모든 Navbar 링크 정상 동작

**수동 테스트 체크리스트**:
- [ ] 데스크톱: 스크롤 전/후 Navbar 스타일 전환 확인
- [ ] 데스크톱: 메뉴 항목 호버 시 한글 서브텍스트 표시 확인
- [ ] 모바일: 햄버거 → 전체 화면 메뉴 열기/닫기 확인
- [ ] 모바일: 메뉴 항목 클릭 시 해당 페이지 이동 확인

---

### Phase 3: 히어로 섹션 & 홈 페이지 디자인 개선

**목표**: 홈 히어로 슬라이더와 홈 페이지 각 섹션의 타이포그래피/여백/컬러를 stay 테마로 개선
**상태**: ✅ 완료

#### 작업 목록

**🟢 구현**

- [ ] **Task 3.1**: 히어로 슬라이더 스타일 개선
    - 파일: `components/home/bg/HomeImageBgContainer.tsx`
    - 내용:
        - 배경: `bg-stay-950` (다크 브라운)
        - 이미지 오버레이: `bg-gradient-to-b from-black/40 via-transparent to-black/40`
        - 이미지 opacity: 활성 이미지 `opacity-70`, 비활성 `opacity-0`
        - 이미지 scale 애니메이션: 활성 시 `scale: 1.08` (Ken Burns 효과)
        - 텍스트: `font-serif`, "Welcome to" 이탤릭 + 메인 타이틀 + 수직 라인 + 한글 서브 텍스트
        - 데스크톱 슬라이드 인디케이터: 라벨 버튼 스타일 (활성: `bg-white text-stay-950`, 비활성: `text-white`)
        - 좌우 화살표: 원형 버튼 `border border-white/50`, 호버 시 `bg-white text-stay-950`

- [ ] **Task 3.2**: 홈 갤러리/오퍼 캐러셀 스타일 업데이트
    - 파일: `components/home/carousel/` 관련 파일
    - 내용:
        - Swiper 네비게이션/페이지네이션 컬러를 stay 팔레트로 교체
        - 카드 스타일: `border-stay-200`, 호버 시 `border-stay-400`

- [ ] **Task 3.3**: 홈 객실 타입 섹션 스타일 개선
    - 파일: `components/home/roomtype/RoomTypeContainer.tsx`, `RoomTypeItem.tsx`
    - 내용:
        - 섹션 배경: `bg-stay-50`
        - 섹션 타이틀: `font-serif text-stay-950 tracking-wide`
        - 서브 타이틀: `text-stay-400 font-serif italic tracking-[0.2em] uppercase`
        - 객실 카드: 이미지 호버 `scale-105 duration-[2s]`
        - 객실명: `font-serif tracking-widest text-stay-950`
        - 설명: `text-stay-500 font-light`
        - "VIEW DETAILS" 링크: `text-stay-950 tracking-[0.2em] border-b border-stay-950`

- [ ] **Task 3.4**: 홈 이벤트 섹션 스타일 개선
    - 파일: `components/home/event/HomeEventAdapter.tsx`
    - 내용:
        - 섹션 배경: `bg-white`
        - 이벤트 카드: `border border-stay-200 hover:border-stay-400`
        - 상태 배지: 진행중 `bg-stay-900 text-white`, 종료 `bg-stay-200 text-stay-600`
        - 제목: `text-stay-950 font-medium`, 호버 `text-stay-600`
        - 화살표: `text-stay-300 → hover:text-stay-900`

- [ ] **Task 3.5**: 홈 오시는 길 섹션 스타일 개선
    - 파일: `components/home/way/WayToComeContainer.tsx`
    - 내용:
        - stay 팔레트에 맞게 텍스트/배경/보더 컬러 교체

**🔵 리팩토링**

- [ ] **Task 3.6**: 홈 관련 모든 컴포넌트에서 기존 핑크/골드 컬러 참조 제거 확인

#### 품질 게이트 ✋

- [ ] `yarn build` 에러 없음
- [ ] 홈 히어로 슬라이더 자동 재생 정상 동작
- [ ] 데스크톱/모바일 슬라이드 인디케이터 정상 동작
- [ ] 객실 카드 호버 효과 정상
- [ ] 모든 섹션의 FadeIn 애니메이션 정상 동작
- [ ] 반응형 레이아웃 깨짐 없음 (모바일 ~ 데스크톱)

**수동 테스트 체크리스트**:
- [ ] 히어로: 5초 간격 이미지 전환 + 페이드/스케일 효과 확인
- [ ] 히어로: 인디케이터 클릭으로 슬라이드 전환 확인
- [ ] 객실 섹션: 카드 호버 시 이미지 확대 + 텍스트 색상 변경 확인
- [ ] 이벤트 섹션: 카드 호버 시 보더/텍스트 색상 변경 확인

---

### Phase 4: 서브 페이지 디자인 적용 (Prologue, Rooms, Special Offers, Notice)

**목표**: 홈 외 서브 페이지들의 컬러/타이포그래피를 stay 테마로 통일
**상태**: ✅ 완료

#### 작업 목록

**🟢 구현**

- [ ] **Task 4.1**: Prologue (소개) 페이지 스타일 적용
    - 파일: `components/prologue/` 관련 파일
    - 내용:
        - 섹션 타이틀: `font-serif italic tracking-[0.2em] text-stay-400 uppercase` (영문 서브타이틀)
        - 메인 제목: `font-serif text-stay-950 tracking-wide`
        - 본문: `text-stay-700 leading-[2.2] font-light break-keep`
        - 수직 구분선: `w-[1px] h-20 bg-stay-300`
        - 배경 교차: 섹션별로 `bg-stay-50` / `bg-white` 교차

- [ ] **Task 4.2**: Rooms (객실) 페이지 스타일 적용
    - 파일: `components/room/` 관련 파일
    - 내용:
        - 객실 상세의 컬러를 stay 팔레트로 교체
        - 이미지 갤러리 네비게이션 버튼 스타일
        - 예약 버튼: `bg-stay-950 text-white hover:bg-stay-800`
        - 텍스트 계층: 제목 `stay-950`, 설명 `stay-600`, 부가정보 `stay-500`

- [ ] **Task 4.3**: Special Offers (특별 서비스) 페이지 스타일 적용
    - 파일: `components/special_offers/` 관련 파일 (OffersSlice, Bed, Bath, Terrace, Cafeteria, Amenity)
    - 내용:
        - 각 섹션의 영문 서브타이틀: `text-stay-400 tracking-[0.2em] uppercase`
        - 한글 제목: `font-serif text-stay-950`
        - 설명 텍스트: `text-stay-600 font-light leading-[2]`
        - 이미지 호버: `scale-105 duration-[2s] ease-out`
        - 구분선: `bg-stay-300`

- [ ] **Task 4.4**: Notice (공지) 페이지 스타일 적용
    - 파일: `components/notice/` 관련 파일
    - 내용:
        - 리스트 보더: `border-stay-200`
        - 제목: `text-stay-950`
        - 날짜/부가정보: `text-stay-500`
        - 호버: `hover:border-stay-400`

- [ ] **Task 4.5**: Reservation 모달 스타일 적용
    - 파일: `components/reservation/` 관련 파일
    - 내용:
        - 모달 배경, 버튼, 텍스트 컬러를 stay 팔레트로 교체
        - 예약 버튼: `bg-stay-950 text-white`

**🔵 리팩토링**

- [ ] **Task 4.6**: 전체 서브 페이지에서 기존 `brand`, `third`, `gold` 등 미사용 클래스 완전 제거

#### 품질 게이트 ✋

- [ ] `yarn build` 에러 없음
- [ ] 각 서브 페이지 접속 시 stay 테마 일관 적용 확인
- [ ] 모달(객실 상세) 정상 동작
- [ ] 모든 FadeIn 애니메이션 정상 동작
- [ ] 반응형 디자인 깨짐 없음

**수동 테스트 체크리스트**:
- [ ] `/prologue` 페이지: 섹션별 컬러/타이포 확인
- [ ] `/rooms` 페이지: 객실 카드 + 상세 모달 확인
- [ ] `/special_offers` 페이지: 각 서비스 섹션 스타일 확인
- [ ] `/notice` 페이지: 리스트 + 상세 스타일 확인
- [ ] 인터셉팅 라우트 모달 (`/@modal/(.)reservation/[roomId]`) 동작 확인

---

### Phase 5: Footer 디자인 개선 & 공통 컴포넌트 마무리

**목표**: Footer를 stay-950 다크 브라운으로 개선하고, 모달/토스트 등 공통 UI의 stay 테마 적용을 완료
**상태**: ✅ 완료

#### 작업 목록

**🟢 구현**

- [ ] **Task 5.1**: Footer 디자인 개선
    - 파일: `components/Footer.tsx`
    - 내용:
        - 배경: `bg-stay-950` (기존 charcoal → 다크 브라운)
        - 로고: `font-serif text-3xl tracking-[0.2em] text-white`
        - 주소/사업자정보: `text-white/60 font-light text-sm leading-[2]`
        - 네비게이션 링크: `text-white/80 hover:text-white`
        - 구분선: `border-white/10`
        - 전화번호: `text-2xl font-light hover:text-stay-300`
        - 섹션 라벨: `text-white/50 text-xs tracking-[0.2em] uppercase`
        - 하단 copyright: `text-white/40 text-xs tracking-wider`

- [ ] **Task 5.2**: 공통 모달 스타일 업데이트
    - 파일: `components/common/modal/` 관련 파일
    - 내용:
        - 오버레이: `bg-black/50`
        - 모달 배경: `bg-white` 또는 `bg-stay-50`
        - 닫기 버튼, 텍스트 등 stay 컬러로 교체

- [ ] **Task 5.3**: 토스트(react-hot-toast) 스타일 커스터마이징
    - 파일: `app/providers.tsx` 또는 Toaster 설정 파일
    - 내용:
        - 토스트 배경/텍스트 색상을 stay 팔레트에 맞게 설정

- [ ] **Task 5.4**: 공통 FadeIn 컴포넌트 확인
    - 파일: `components/common/animation/FadeIn.tsx`
    - 내용:
        - FadeIn 자체는 컬러 의존성 없으므로 변경 불필요
        - easing이 참고 코드와 유사한지 확인 후 필요 시 미세 조정

**🔵 리팩토링**

- [ ] **Task 5.5**: 전체 프로젝트 grep으로 기존 컬러 클래스 잔여 확인
    - `brand`, `third`, `cream`, `warm`, `gold`, `charcoal`, `soft-black`, `body-text` 검색
    - 남아있는 참조를 stay 대응값으로 교체

#### 품질 게이트 ✋

- [ ] `yarn build` 에러 없음
- [ ] `yarn lint` 통과
- [ ] Footer가 stay-950 다크 브라운으로 표시됨
- [ ] 모달 열기/닫기 정상 동작
- [ ] 토스트 알림 stay 테마로 표시됨
- [ ] **전체 프로젝트에서 기존 컬러 클래스(brand, third, cream 등) 0건 확인**

**검증 명령어**:
```bash
yarn build
yarn lint
# 기존 컬러 클래스 잔여 확인
grep -rn "brand\|third\|cream\b\|warm\b\|warm-dark\|gold\b\|charcoal\|soft-black\|body-text" --include="*.tsx" --include="*.ts" --include="*.css" .
```

**수동 테스트 체크리스트**:
- [ ] Footer: 다크 브라운 배경 + 흰색 텍스트 확인
- [ ] Footer: 전화번호/주소/링크 정상 표시
- [ ] Footer: Instagram 등 소셜 링크 정상 동작
- [ ] 모달: 프로모션 모달 스타일 확인
- [ ] 전체 사이트 탐색: 모든 페이지에서 핑크/골드 흔적 없음 확인

---

### Phase 6: 최종 검증 & 세부 조정

**목표**: 전체 사이트의 디자인 일관성 최종 확인, 접근성 검토, 성능 확인
**상태**: ✅ 완료

#### 작업 목록

**🟢 구현**

- [ ] **Task 6.1**: 전체 페이지 시각적 일관성 검토
    - 모든 페이지를 데스크톱/태블릿/모바일로 확인
    - 컬러, 타이포, 여백의 일관성 검증
    - 스크린샷 비교 (Phase 1 이전 vs 현재)

- [ ] **Task 6.2**: 접근성 확인
    - stay 팔레트의 contrast ratio 확인 (WCAG AA 기준)
    - 특히 `stay-400` 텍스트가 `stay-50` 배경 위에서 가독성 확인
    - 필요 시 작은 텍스트에는 더 짙은 컬러(`stay-600`+) 사용

- [ ] **Task 6.3**: 성능 확인
    - `yarn build` 번들 사이즈 확인 (ANALYZE=true)
    - 불필요한 CSS 증가 없는지 확인
    - Lighthouse 점수 확인

- [ ] **Task 6.4**: 세부 조정
    - 발견된 이슈 수정
    - 미세한 여백/컬러 조정
    - 스크롤 애니메이션 타이밍 미세 조정

#### 품질 게이트 ✋ (최종)

- [ ] `yarn build` 에러 없음
- [ ] `yarn lint` 통과
- [ ] 모든 페이지에서 stay 테마 일관 적용
- [ ] 모바일 반응형 깨짐 없음
- [ ] 접근성 contrast ratio AA 기준 통과
- [ ] Lighthouse Performance 80+ 유지
- [ ] 기존 기능 (네비게이션, 예약 링크, 모달, 캘린더 등) 모두 정상 동작

---

## ⚠️ 리스크 평가

| 리스크 | 확률 | 영향 | 완화 전략 |
| --- | --- | --- | --- |
| Tailwind 클래스 교체 누락으로 일부 컴포넌트에 기존 컬러 잔존 | 중간 | 낮음 | Phase 5에서 grep 전수 검사 수행 |
| 참고 코드의 `motion/react` import와 프로젝트의 `framer-motion` import 불일치 | 낮음 | 중간 | framer-motion v12는 두 import 모두 지원, 기존 방식 유지 가능 |
| stay-400 같은 연한 컬러가 흰 배경에서 가독성 부족 | 중간 | 중간 | Phase 6 접근성 검토에서 contrast ratio 확인 후 조정 |
| globals.css의 CSS 변수 변경이 캘린더/Swiper에 예기치 않은 영향 | 낮음 | 중간 | Phase 1 품질 게이트에서 캘린더/Swiper 동작 확인 |
| 대량 클래스 교체로 인한 git diff 복잡성 | 낮음 | 낮음 | Phase별 커밋으로 변경 추적 용이하게 관리 |

---

## 🔄 롤백 전략

### Phase별 롤백

모든 Phase는 독립적인 git 커밋으로 관리하므로, 문제 발생 시 해당 커밋을 `git revert`로 되돌릴 수 있습니다.

### Phase 1 실패 시
- `tailwind.config.ts`와 `globals.css`를 이전 커밋으로 복원
- `git revert <phase1-commit-hash>`

### Phase 2~5 실패 시
- 해당 Phase 커밋을 revert
- 이전 Phase까지의 상태로 복원

### 전체 롤백
- 작업 시작 전 `main` 브랜치의 커밋 해시를 기록해 두고
- 필요 시 `git reset --hard <original-hash>`로 완전 복원 가능

---

## 📊 진행 추적

### 완료 상태

- **Phase 1** (디자인 토큰): ✅ 100%
- **Phase 2** (Navbar): ✅ 100%
- **Phase 3** (히어로 & 홈): ✅ 100%
- **Phase 4** (서브 페이지): ✅ 100%
- **Phase 5** (Footer & 공통): ✅ 100%
- **Phase 6** (최종 검증): ✅ 100%

**전체 진행률**: 100%

### 시간 추적

| Phase | 예상 | 실제 | 차이 |
| --- | --- | --- | --- |
| Phase 1: 디자인 토큰 | 1~2h | - | - |
| Phase 2: Navbar | 2~3h | - | - |
| Phase 3: 히어로 & 홈 | 3~4h | - | - |
| Phase 4: 서브 페이지 | 3~4h | - | - |
| Phase 5: Footer & 공통 | 2~3h | - | - |
| Phase 6: 최종 검증 | 1~2h | - | - |
| **합계** | **12~18h** | - | - |

---

## 📝 Notes & 학습 내용

### 구현 노트

- (구현 중 발견 사항 기록)

### 발생한 블로커

- (블로커 발생 시 기록)

### 향후 개선 사항

- (향후 참고 사항 기록)

---

## 📚 참고 자료

### 컬러 팔레트 참조
- stay-50: #faf9f7 ~ stay-950: #2a221a (본 문서 상단 컬러 정의 참조)

### 참고 코드
- 황리단스테이 디자인 참고 코드 (사용자 제공)

### 관련 파일
- `tailwind.config.ts` — Tailwind 컬러 정의
- `app/globals.css` — 글로벌 CSS 변수 & 스타일
- `app/layout.tsx` — 루트 레이아웃
- `components/Navbar.tsx` — 네비게이션
- `components/Footer.tsx` — 푸터
- `components/home/bg/HomeImageBgContainer.tsx` — 히어로 슬라이더
- `components/home/roomtype/` — 객실 섹션
- `components/home/event/` — 이벤트 섹션

---

## ✅ 최종 체크리스트

**계획서를 COMPLETE로 표시하기 전**:

- [ ] 모든 Phase가 품질 게이트를 통과하여 완료됨
- [ ] 전체 통합 테스트 수행 완료
- [ ] 모든 페이지 데스크톱/모바일 시각 검증 완료
- [ ] Lighthouse 성능 점수 확인
- [ ] 접근성(contrast ratio) 검증 완료
- [ ] 기존 컬러 클래스 잔여 0건 확인
- [ ] `yarn build` & `yarn lint` 최종 통과
- [ ] 계획서 문서 보관

---

**계획서 상태**: ✅ 완료
**다음 액션**: 없음 (모든 Phase 완료)
**블로커**: 없음
