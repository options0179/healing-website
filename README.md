# 쉼 — 오늘의 TMI

지친 일상 속에서 잠깐 숨을 돌릴 수 있도록, 일상과 자연 속에 숨어있는 뜬금없는 TMI를 전해주는 작은 힐링 웹사이트입니다.

## 사용 흐름

1. **인트로** (`/`) — "도파민에 절여진 기쁨으로 휴식을 취하고 있다고요?"라는 멘트로 시작하는 첫 화면
2. **카테고리 선택** (`/categories`) — 대화창 형식으로 궁금한 TMI 종류를 선택
3. **TMI 결과** (`/tmi/:categoryId`) — 선택한 카테고리의 랜덤 TMI 한 줄 + 다른 TMI/카테고리 보기

## 카테고리

- 🦦 동물의 어이없는 특징
- 🌿 자연 속 숨겨진 비밀
- 🕰️ 역사적 인물의 의외인 점
- 🌌 우주의 사소한 진실
- 🍯 음식에 숨은 과학

## 기술 스택

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [react-router-dom](https://reactrouter.com/)
- 디자인 토큰은 `design.md`를 기준으로 `src/styles/tokens.css`에 정의 (크림 캔버스 `#f9f7f3` + 진한 초록 `#2d562d`)

## 시작하기

```bash
npm install
npm run dev
```

빌드:

```bash
npm run build
```

## 프로젝트 구조

```
src/
  components/    Footer, VineDecoration(스크롤 패럴랙스 식물 장식) 등 공용 컴포넌트
  pages/         IntroPage, CategoriesPage, TmiPage, PrivacyPage
  data/          카테고리 정의 및 카테고리별 큐레이션 TMI 데이터
  lib/           TMI 소스 어댑터 (추후 외부 API 연동 시 교체 지점)
  styles/        디자인 토큰 및 전역 스타일
```

## 콘텐츠 데이터

현재 모든 TMI는 `src/data/tmi/` 아래 카테고리별 큐레이션 데이터로 관리됩니다. `src/lib/tmiSource.ts`의 `curatedPools` 맵만 교체하면 특정 카테고리를 외부 API 소스로 바꿀 수 있는 구조입니다.

## favicon

`public/leaf.svg` 자리에 사용할 아이콘 파일(leaf-heart)을 넣으면 자동으로 적용됩니다.
