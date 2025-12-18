# 광연자동차운전전문학원 웹사이트

2025년 기준 국내 최고 수준 운전전문학원 웹사이트 리뉴얼 프로젝트

## 🚀 기술 스택

- **Frontend**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Headless UI
- **Animations**: Framer Motion
- **Backend**: Firebase (Auth, Firestore, Storage, Functions)
- **Deployment**: Vercel

## 📋 프로젝트 목표

- 신뢰감 · 안전 · 전문성 · 합격 보장 컨셉의 프리미엄 웹사이트
- 모바일 우선 디자인 (Mobile First)
- 중장년층 가독성 최적화
- 실전 상담 전환율 극대화

## 🏗️ 프로젝트 구조

```
src/
├── components/          # 재사용 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Footer.tsx      # 푸터
│   └── FixedCTA.tsx    # 고정 CTA 버튼
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 메인 랜딩 페이지
│   ├── About.tsx       # 학원 소개
│   ├── Courses.tsx     # 교육 과정 안내
│   ├── Process.tsx     # 수강 절차
│   ├── Contact.tsx     # 온라인 상담·예약
│   └── Location.tsx    # 오시는 길
├── firebase.ts         # Firebase 설정
├── App.tsx            # 메인 앱 컴포넌트
└── main.tsx           # 앱 진입점
```

## 🛠️ 설치 및 실행

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### 미리보기
```bash
npm run preview
```

## 🎨 디자인 컨셉

- **색상**: 딥블루 / 네이비 기반 + 화이트
- **톤앤매너**: 공공기관급 안정감 + 현대적 프리미엄
- **키워드**: 신뢰감 · 안전 · 전문성 · 합격 보장

## 📱 주요 기능

- 반응형 웹 디자인 (모바일 우선)
- Framer Motion을 활용한 부드러운 애니메이션
- Firebase Firestore 기반 상담 신청 시스템
- SEO 최적화 (지역 키워드, 메타 태그)
- 접근성 고려 (장애인 편의시설 정보 포함)

## 🚀 배포

### Vercel 배포
1. [Vercel](https://vercel.com)에 가입하고 GitHub 연동
2. 프로젝트를 Vercel에 연결
3. 환경 변수 설정:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=your-app-id
   ```
4. 배포 완료 후 도메인 연결

### Firebase 설정
1. [Firebase Console](https://console.firebase.google.com)에서 프로젝트 생성
2. Firestore Database 활성화
3. 웹 앱 추가하여 설정 값 획득
4. `.env` 파일에 설정 값 입력

### 로컬 배포 테스트
```bash
npm run build
npm run preview
```

## 🔧 Firebase 설정

Firebase 프로젝트를 생성하고 `src/firebase.ts`의 설정을 업데이트하세요:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  // ...
};
```

## 📈 확장 가능성

- 관리자 대시보드 (상담 내역 관리)
- 사용자 로그인 시스템
- 후기 관리 시스템
- 문자/SMS 발송 연동
- 화이트라벨 버전 (지역 학원 확산)

## 📞 연락처

광연자동차운전전문학원
- 전화: 02-123-4567
- 이메일: info@kydriving.co.kr
- 웹사이트: http://www.kydriving.co.kr

---

© 2025 광연자동차운전전문학원. All rights reserved.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
