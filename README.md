# 🚗 광연자동차운전전문학원 웹사이트

> **2025년 프리미엄 운전전문학원 웹사이트** - 신뢰감 · 안전 · 전문성 · 합격 보장

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-yellow.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-blue.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.14.1-orange.svg)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black.svg)](https://vercel.com/)

---

## 📋 프로젝트 개요

광연자동차운전전문학원은 서울 강남구에 위치한 전문 운전면허 교육기관입니다. 본 웹사이트는 2025년 최신 웹 기술을 활용하여 완전히 리뉴얼된 프리미엄 웹사이트로, 다음과 같은 특징을 가지고 있습니다:

### 🎯 프로젝트 목표
- **신뢰감 있는 브랜딩**: 공공기관급 안정감과 현대적 프리미엄 디자인의 조화
- **모바일 퍼스트**: 모든 디바이스에서 최적화된 사용자 경험 제공
- **전환율 극대화**: 실전 상담 신청 전환율을 극대화하는 UX 설계
- **접근성 최적화**: 중장년층과 장애인을 고려한 포용적 디자인

### 🌟 주요 특징
- ✨ **Glassmorphism 디자인**: 2025년 트렌드 반영한 유리질 효과
- 📱 **완벽한 반응형**: 모바일, 태블릿, 데스크톱 모두 지원
- 🎨 **프리미엄 애니메이션**: Framer Motion을 활용한 부드러운 인터랙션
- 🔍 **SEO 최적화**: 지역 키워드 및 메타 태그 완벽 적용
- 🚀 **빠른 로딩**: Vite 기반 최적화된 빌드 시스템
- 💬 **실시간 상담**: Firebase Firestore 기반 실시간 데이터베이스

---

## 🏗️ 기술 스택

### Frontend Framework
- **React 18.3.1** - 최신 React 기능 (Concurrent Features, Automatic Batching)
- **TypeScript 5.6.3** - 타입 안전성과 개발 생산성 향상
- **Vite 6.0.3** - 초고속 개발 서버와 최적화된 프로덕션 빌드

### Styling & UI
- **Tailwind CSS 4.0.0** - 유틸리티 퍼스트 CSS 프레임워크
- **Framer Motion** - 선언적 애니메이션 라이브러리
- **Headless UI** - 접근성 높은 UI 컴포넌트

### Backend & Database
- **Firebase 10.14.1**
  - Firestore: 실시간 NoSQL 데이터베이스
  - Authentication: 사용자 인증
  - Storage: 파일 저장
  - Hosting: 정적 파일 호스팅

### Development Tools
- **ESLint** - 코드 품질 관리
- **PostCSS** - CSS 처리 및 최적화
- **Autoprefixer** - 브라우저 호환성 자동화

### Deployment
- **Vercel** - 글로벌 CDN과 자동화된 배포
- **GitHub Actions** - CI/CD 파이프라인

---

## 📁 프로젝트 구조

```
c:\gencoding\gen_project_30\
├── 📁 .github/                 # GitHub 설정 및 템플릿
│   ├── workflows/             # GitHub Actions 워크플로우
│   └── copilot-instructions.md # GitHub Copilot 지침
├── 📁 .vscode/                # VS Code 설정
│   ├── settings.json         # 워크스페이스 설정
│   └── tasks.json            # 빌드 태스크
├── 📁 public/                 # 정적 파일
│   ├── favicon.ico           # 파비콘
│   └── robots.txt            # 검색 엔진 크롤링 설정
├── 📁 src/                    # 소스 코드
│   ├── 📁 assets/            # 이미지, 폰트 등 리소스
│   ├── 📁 components/        # 재사용 가능한 컴포넌트
│   │   ├── FixedCTA.tsx      # 고정 CTA 버튼
│   │   ├── Footer.tsx        # 사이트 푸터
│   │   └── Header.tsx        # 네비게이션 헤더
│   ├── 📁 pages/             # 페이지 컴포넌트
│   │   ├── About.tsx         # 학원 소개 페이지
│   │   ├── Contact.tsx       # 온라인 상담 페이지
│   │   ├── Courses.tsx       # 교육 과정 안내
│   │   ├── Home.tsx          # 메인 랜딩 페이지
│   │   ├── Location.tsx      # 오시는 길 페이지
│   │   └── Process.tsx       # 수강 절차 안내
│   ├── App.css               # 전역 스타일
│   ├── App.tsx               # 메인 앱 컴포넌트
│   ├── firebase.ts           # Firebase 설정
│   ├── index.css             # Tailwind CSS 및 유틸리티
│   └── main.tsx              # 앱 진입점
├── 📁 .vercel/                # Vercel 배포 설정
├── 📄 .env                    # 환경 변수 (Firebase 설정)
├── 📄 .env.local             # 로컬 환경 변수
├── 📄 .gitignore             # Git 무시 파일
├── 📄 eslint.config.js       # ESLint 설정
├── 📄 index.html             # HTML 템플릿
├── 📄 package.json           # 프로젝트 설정 및 의존성
├── 📄 postcss.config.js      # PostCSS 설정
├── 📄 tailwind.config.js     # Tailwind CSS 설정
├── 📄 tsconfig.json          # TypeScript 설정
├── 📄 vercel.json            # Vercel 배포 설정
└── 📄 vite.config.ts         # Vite 설정
```

### 🗂️ 주요 파일 설명

#### 설정 파일들
- **`package.json`**: 프로젝트 메타데이터, 의존성, 스크립트 정의
- **`vite.config.ts`**: Vite 빌드 도구 설정 (플러그인, 경로 설정 등)
- **`tailwind.config.js`**: Tailwind CSS 커스텀 설정 (색상, 폰트 등)
- **`tsconfig.json`**: TypeScript 컴파일러 옵션
- **`eslint.config.js`**: 코드 품질 검사 규칙

#### 환경 설정
- **`.env`**: 프로덕션 환경 변수 (Firebase API 키 등)
- **`.env.local`**: 로컬 개발 환경 변수 (Git 추적 제외)

#### 배포 설정
- **`vercel.json`**: Vercel 플랫폼 배포 설정
- **`.github/workflows/`**: 자동화된 CI/CD 파이프라인

---

## 🚀 빠른 시작

### 📋 사전 요구사항

- **Node.js**: 18.0.0 이상
- **npm**: 9.0.0 이상 (또는 yarn/pnpm)
- **Git**: 2.30.0 이상

### ⚡ 설치 및 실행

#### 1. 저장소 클론
```bash
git clone https://github.com/your-username/kydriving-website.git
cd kydriving-website
```

#### 2. 의존성 설치
```bash
npm install
```

#### 3. 환경 변수 설정
`.env` 파일을 생성하고 Firebase 설정을 입력하세요:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
```

#### 4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하여 개발을 시작하세요!

### 🏗️ 빌드 및 배포

#### 프로덕션 빌드
```bash
npm run build
```

#### 빌드 미리보기
```bash
npm run preview
```

#### Vercel 자동 배포
프로젝트를 GitHub에 푸시하면 자동으로 Vercel에 배포됩니다.

---

## 🎨 디자인 시스템

### 색상 팔레트
```css
/* 프라이머리 컬러 */
--primary-50: #eff6ff;   /* 아주 연한 파랑 */
--primary-500: #3b82f6;  /* 중간 파랑 */
--primary-900: #1e3a8a;  /* 어두운 파랑 */

/* 세컨더리 컬러 */
--secondary-50: #f0fdf4;  /* 아주 연한 초록 */
--secondary-500: #22c55e; /* 중간 초록 */
--secondary-900: #14532d; /* 어두운 초록 */

/* 액센트 컬러 */
--accent-50: #fefce8;    /* 아주 연한 노랑 */
--accent-500: #eab308;   /* 중간 노랑 */
--accent-900: #713f12;   /* 어두운 노랑 */
```

### 타이포그래피
- **본문**: Inter, Pretendard, Noto Sans KR (시스템 폰트)
- **제목**: 가독성과 임팩트를 고려한 계층적 크기
- **특별 효과**: 그라데이션 텍스트와 그림자 효과

### 컴포넌트 패턴
- **Glassmorphism**: 투명도와 블러 효과를 활용한 현대적 디자인
- **카드 디자인**: 그림자와 테두리를 활용한 깊이감 표현
- **애니메이션**: 마이크로 인터랙션과 페이지 전환 효과

---

## 📱 기능 상세

### 🏠 메인 페이지 (Home)
- **히어로 섹션**: 학원 소개와 CTA 버튼
- **이벤트 팝업**: 특별 이벤트 및 프로모션 알림
- **서비스 소개**: 주요 서비스 카드 레이아웃
- **통계 수치**: 신뢰성 강조를 위한 데이터 시각화
- **후기 섹션**: 실제 수강생 후기와 평점
- **CTA 섹션**: 최종 전환 유도를 위한 콜투액션

### 👨‍🏫 학원 소개 (About)
- **연혁**: 학원의 역사와 발전 과정
- **교육 철학**: 교육 방식과 가치관
- **강사진 소개**: 전문 강사 프로필
- **시설 안내**: 교육 환경과 장비
- **인증 정보**: 관련 자격증과 수상 경력

### 📚 교육 과정 (Courses)
- **기초반**: 초보자를 위한 기본 교육
- **실전반**: 실전 운전 기술 향상
- **특별반**: 고령자, 장애인 등 특수 교육
- **시간표**: 유연한 교육 시간 선택
- **수강료**: 투명한 가격 정책

### 📋 수강 절차 (Process)
- **온라인 신청**: 간편한 온라인 접수
- **서류 제출**: 필요한 서류 안내
- **면접 및 상담**: 1:1 맞춤 상담
- **교육 시작**: 체계적인 커리큘럼 진행
- **시험 준비**: 합격 전략 및 모의고사

### 💬 온라인 상담 (Contact)
- **실시간 상담**: Firebase 기반 실시간 문의
- **예약 시스템**: 방문 예약 일정 관리
- **문의 폼**: 구조화된 정보 수집
- **자동 응답**: 빠른 초기 응대

### 🗺️ 오시는 길 (Location)
- **주소 정보**: 정확한 위치 안내
- **교통편**: 버스, 지하철 노선 안내
- **주차 안내**: 주차장 정보 및 요금
- **주변 시설**: 편의시설 및 식당 안내

---

## 🔧 개발 가이드라인

### 📝 코드 스타일
- **TypeScript**: 엄격한 타입 체크 사용
- **ESLint**: 코드 품질 자동 검사
- **Prettier**: 일관된 코드 포맷팅
- **컴포넌트**: 함수형 컴포넌트 + Hooks 패턴

### 🏷️ 네이밍 컨벤션
```typescript
// 컴포넌트
export const UserProfileCard: React.FC<Props> = () => {}

// 훅
const useAuthState = () => {}

// 타입
interface UserData {
  id: string;
  name: string;
  email: string;
}

// 상수
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = '/api/v1';
```

### 🗂️ 폴더 구조 원칙
- **컴포넌트**: `components/` 폴더에 재사용 가능한 컴포넌트
- **페이지**: `pages/` 폴더에 라우팅되는 페이지 컴포넌트
- **유틸리티**: `utils/` 폴더에 헬퍼 함수
- **타입**: `types/` 폴더에 TypeScript 타입 정의

### 🔄 상태 관리
- **로컬 상태**: `useState`, `useReducer`
- **서버 상태**: React Query (추후 도입 예정)
- **글로벌 상태**: Context API 또는 Zustand

---

## 🚀 배포 및 운영

### Vercel 자동 배포
1. **GitHub 연동**: 프로젝트를 GitHub에 푸시
2. **Vercel 연결**: Vercel 대시보드에서 프로젝트 연결
3. **환경 변수 설정**: Firebase 설정 값 입력
4. **도메인 연결**: `kydriving.co.kr` 도메인 연결

### Firebase 설정
1. **프로젝트 생성**: Firebase Console에서 새 프로젝트 생성
2. **서비스 활성화**:
   - Firestore Database
   - Authentication
   - Storage
   - Hosting
3. **보안 규칙 설정**: 데이터베이스 접근 권한 설정
4. **환경 변수 적용**: `.env` 파일에 설정 값 입력

### 모니터링 및 분석
- **Google Analytics**: 사용자 행동 분석
- **Firebase Analytics**: 앱 사용 통계
- **Vercel Analytics**: 성능 모니터링
- **Error Tracking**: Sentry 또는 비슷한 서비스

---

## 🔧 유지보수 가이드

### 📅 정기 점검 항목
- **의존성 업데이트**: `npm audit` 및 `npm update`
- **보안 패치**: 알려진 취약점 점검 및 패치
- **성능 최적화**: Lighthouse 점수 모니터링
- **SEO 점검**: 검색 엔진 순위 및 메타 태그 확인

### 🐛 문제 해결
```bash
# 캐시 클리어
npm run clean

# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 빌드 캐시 클리어
npm run build -- --force
```

### 📊 성능 모니터링
- **Core Web Vitals**: LCP, FID, CLS 지표 모니터링
- **번들 크기**: 빌드 출력 크기 최적화
- **로딩 속도**: 초기 로딩 및 라우팅 성능

### 🔄 업데이트 절차
1. **브랜치 생성**: `git checkout -b feature/new-feature`
2. **개발 및 테스트**: 로컬에서 충분히 테스트
3. **코드 리뷰**: Pull Request 생성 및 리뷰
4. **배포**: main 브랜치에 머지 시 자동 배포

---

## 🤝 기여 가이드

### 개발 환경 설정
1. **Node.js 설치**: LTS 버전 권장
2. **VS Code**: 추천 확장 프로그램 설치
   - TypeScript and JavaScript Language Features
   - Tailwind CSS IntelliSense
   - ESLint
   - Prettier

### 작업 흐름
1. **이슈 생성**: GitHub Issues에서 작업 내용 정의
2. **브랜치 생성**: `feature/`, `bugfix/`, `hotfix/` 접두사 사용
3. **커밋 메시지**: 명확하고 간결한 영어로 작성
4. **Pull Request**: 상세한 설명과 스크린샷 첨부

### 코드 리뷰 기준
- ✅ **기능 완성도**: 요구사항 100% 충족
- ✅ **코드 품질**: ESLint 통과 및 클린 코드
- ✅ **성능**: 불필요한 리렌더링 없음
- ✅ **접근성**: WCAG 2.1 AA 준수
- ✅ **반응형**: 모든 디바이스에서 정상 동작

---

## 📞 지원 및 문의

### 기술 지원
- **이메일**: dev@kydriving.co.kr
- **GitHub Issues**: 버그 리포트 및 기능 요청
- **Slack**: 실시간 기술 지원 채널

### 학원 문의
- **전화**: 02-123-4567
- **이메일**: info@kydriving.co.kr
- **웹사이트**: https://www.kydriving.co.kr
- **주소**: 서울시 강남구 헌릉로 733번 (세공동)

### 긴급 상황
- **시스템 장애**: 1시간 내 응대
- **보안 문제**: 즉시 조치 및 보고
- **법적 문제**: 전문 변호사 자문

---

## 📜 라이선스

본 프로젝트는 **광연자동차운전전문학원**의 독점 자산입니다.
무단 복제, 배포, 수정 시 법적 조치를 취할 수 있습니다.

### 사용 제한
- ✅ **개인 학습**: 교육 목적의 코드 참고 허용
- ✅ **영리 사용 불가**: 상업적 이용 금지
- ✅ **재배포 금지**: 어떠한 형태의 재배포도 불허

---

## 🙏 감사의 말

본 프로젝트는 다음과 같은 오픈소스 프로젝트와 도구의 도움을 받아 개발되었습니다:

- **React Team**: 혁신적인 프론트엔드 라이브러리 제공
- **Vite Team**: 초고속 개발 경험 제공
- **Tailwind CSS Team**: 생산적인 스타일링 솔루션
- **Firebase Team**: 강력한 백엔드 서비스
- **Vercel Team**: 뛰어난 배포 플랫폼

특히, GitHub Copilot의 도움을 받아 개발 생산성이 크게 향상되었습니다.

---

<div align="center">

**🚗 광연자동차운전전문학원 웹사이트 🚗**

*신뢰할 수 있는 운전 교육, 미래를 향한 안전한 출발*

[🌐 웹사이트 방문](https://www.kydriving.co.kr) • [📧 문의하기](mailto:info@kydriving.co.kr) • [📱 전화: 02-123-4567](tel:021234567)

© 2025 광연자동차운전전문학원. All rights reserved.

</div>
```
