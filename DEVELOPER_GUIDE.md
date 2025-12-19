# 🚀 개발자 가이드

## 목차
1. [개발 환경 설정](#개발-환경-설정)
2. [프로젝트 구조 이해](#프로젝트-구조-이해)
3. [코딩 컨벤션](#코딩-컨벤션)
4. [컴포넌트 개발 가이드](#컴포넌트-개발-가이드)
5. [상태 관리](#상태-관리)
6. [API 연동](#api-연동)
7. [테스트 가이드](#테스트-가이드)
8. [배포 가이드](#배포-가이드)
9. [문제 해결](#문제-해결)

---

## 개발 환경 설정

### 1. 필수 요구사항
```bash
Node.js >= 18.0.0
npm >= 9.0.0
Git >= 2.30.0
```

### 2. VS Code 확장 프로그램 (권장)
```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json",
    "christian-kohler.path-intellisense",
    "formulahendry.auto-rename-tag",
    "ms-vscode.vscode-css-peek"
  ]
}
```

### 3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 변수를 설정하세요:
```env
# Firebase 설정
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id

# 개발 환경 설정
VITE_APP_ENV=development
VITE_APP_VERSION=1.0.0
```

---

## 프로젝트 구조 이해

### 📁 폴더 구조 상세 설명

```
src/
├── 📁 components/           # 재사용 가능한 UI 컴포넌트
│   ├── ui/                  # 기본 UI 컴포넌트 (Button, Input 등)
│   ├── layout/              # 레이아웃 컴포넌트 (Header, Footer 등)
│   └── features/            # 기능별 컴포넌트
├── 📁 pages/                # 페이지 컴포넌트 (라우팅 대상)
├── 📁 hooks/                # 커스텀 React Hooks
├── 📁 utils/                # 유틸리티 함수
├── 📁 types/                # TypeScript 타입 정의
├── 📁 constants/            # 상수 정의
├── 📁 services/             # 외부 API 서비스
├── 📁 stores/               # 상태 관리 (Zustand 등)
└── 📁 styles/               # 스타일 관련 파일
```

### 🔄 데이터 흐름
```
사용자 입력 → 컴포넌트 → Hook → Service → Firebase → UI 업데이트
```

---

## 코딩 컨벤션

### 📝 TypeScript 규칙
```typescript
// ✅ 좋은 예
interface User {
  readonly id: string;
  name: string;
  email: string;
  createdAt: Date;
}

type UserRole = 'admin' | 'user' | 'guest';

const createUser = (data: Omit<User, 'id' | 'createdAt'>): User => {
  return {
    id: generateId(),
    createdAt: new Date(),
    ...data,
  };
};

// ❌ 나쁜 예
interface user {  // PascalCase 사용
  id: string;     // readonly 누락
  name: any;      // 구체적인 타입 사용
}
```

### 🎨 CSS 클래스 네이밍
```css
/* BEM 방법론 사용 */
.block__element--modifier {
  /* 스타일 */
}

/* Tailwind CSS 우선 사용 */
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
  버튼
</button>
```

### 📦 컴포넌트 구조
```typescript
// components/UserCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  className?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onEdit,
  className = ''
}) => {
  return (
    <motion.div
      className={`user-card ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="user-card__name">{user.name}</h3>
      <p className="user-card__email">{user.email}</p>
      {onEdit && (
        <button
          className="user-card__edit-btn"
          onClick={() => onEdit(user)}
        >
          수정
        </button>
      )}
    </motion.div>
  );
};
```

---

## 컴포넌트 개발 가이드

### 🧩 컴포넌트 설계 원칙

#### 1. 단일 책임 원칙
```typescript
// ✅ 좋은 예: 하나의 책임만 담당
const UserAvatar: React.FC<{ user: User }> = ({ user }) => (
  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
);

// ❌ 나쁜 예: 여러 책임 혼재
const UserProfile: React.FC<{ user: User }> = ({ user }) => (
  <div>
    <img src={user.avatar} alt={user.name} />
    <h1>{user.name}</h1>
    <p>{user.bio}</p>
    <button>수정</button>
    <button>삭제</button>
    {/* ... 더 많은 기능 */}
  </div>
);
```

#### 2. Props 인터페이스 설계
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn--${variant}`;
  const sizeClasses = `btn--${size}`;
  const loadingClasses = loading ? 'btn--loading' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${loadingClasses} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};
```

#### 3. 커스텀 Hook 사용
```typescript
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// 사용 예
const [user, setUser] = useLocalStorage('user', null);
```

---

## 상태 관리

### 📊 상태 관리 전략

#### 1. 로컬 상태 (useState/useReducer)
- 컴포넌트 내부 상태
- 폼 데이터
- UI 상태 (모달, 드롭다운 등)

#### 2. 서버 상태 (React Query)
```typescript
// 추후 도입 예정
import { useQuery, useMutation } from '@tanstack/react-query';

const useContacts = () => {
  return useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
    staleTime: 5 * 60 * 1000, // 5분
  });
};
```

#### 3. 글로벌 상태 (Context API)
```typescript
// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

---

## API 연동

### 🔗 Firebase 연동 가이드

#### 1. Firestore 데이터 구조
```typescript
// types/contact.ts
export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  courseType: 'basic' | 'advanced' | 'special';
  preferredTime: string;
  createdAt: Date;
  status: 'pending' | 'contacted' | 'enrolled' | 'cancelled';
}

// services/contactService.ts
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_NAME = 'contacts';

export const contactService = {
  // 문의 생성
  async createContact(contact: Omit<Contact, 'id' | 'createdAt' | 'status'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...contact,
        status: 'pending',
        createdAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw new Error('문의 등록에 실패했습니다.');
    }
  },

  // 문의 목록 조회
  async getContacts(): Promise<Contact[]> {
    try {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      })) as Contact[];
    } catch (error) {
      console.error('Error getting contacts:', error);
      throw new Error('문의 목록을 불러오는데 실패했습니다.');
    }
  },

  // 문의 상태 업데이트
  async updateContactStatus(id: string, status: Contact['status']): Promise<void> {
    try {
      await updateDoc(doc(db, COLLECTION_NAME, id), { status });
    } catch (error) {
      console.error('Error updating contact:', error);
      throw new Error('문의 상태 업데이트에 실패했습니다.');
    }
  },
};
```

#### 2. 에러 처리
```typescript
// utils/errorHandler.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const handleApiError = (error: unknown): string => {
  if (error instanceof AppError) {
    return error.message;
  }

  if (error instanceof Error) {
    // Firebase 에러 처리
    if (error.message.includes('permission-denied')) {
      return '접근 권한이 없습니다.';
    }
    if (error.message.includes('network-request-failed')) {
      return '네트워크 연결을 확인해주세요.';
    }
  }

  console.error('Unhandled error:', error);
  return '알 수 없는 오류가 발생했습니다.';
};
```

---

## 테스트 가이드

### 🧪 테스트 전략
```
단위 테스트 → 통합 테스트 → E2E 테스트
   ↓            ↓            ↓
컴포넌트     API 연동    사용자 시나리오
```

#### 1. 단위 테스트 (추후 도입)
```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

#### 2. 통합 테스트
```typescript
// __tests__/pages/Contact.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contact } from '../Contact';

describe('Contact Page', () => {
  it('submits contact form successfully', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText(/이름/), '홍길동');
    await user.type(screen.getByLabelText(/이메일/), 'hong@example.com');
    await user.type(screen.getByLabelText(/메시지/), '문의드립니다.');

    await user.click(screen.getByRole('button', { name: /보내기/ }));

    await waitFor(() => {
      expect(screen.getByText('문의가 성공적으로 접수되었습니다.')).toBeInTheDocument();
    });
  });
});
```

---

## 배포 가이드

### 🚀 배포 전 체크리스트
- [ ] `npm run lint` 통과
- [ ] `npm run type-check` 통과
- [ ] `npm run build` 성공
- [ ] 환경 변수 설정 확인
- [ ] Firebase 설정 확인
- [ ] SEO 메타 태그 확인

### 🔄 배포 프로세스
```bash
# 1. 코드 푸시
git add .
git commit -m "feat: 새로운 기능 추가"
git push origin main

# 2. Vercel 자동 배포 확인
# (GitHub 연동 시 자동 배포)

# 3. 수동 배포 (필요시)
npm run predeploy
npm run deploy
```

### 📊 모니터링
- **Vercel Analytics**: 페이지뷰, 성능 지표
- **Firebase Analytics**: 사용자 행동 분석
- **Google Search Console**: SEO 모니터링
- **Sentry**: 에러 트래킹 (추후 도입)

---

## 문제 해결

### 🔧 자주 발생하는 문제

#### 1. 빌드 실패
```bash
# 캐시 클리어
npm run clean

# 의존성 재설치
npm run clean:all
npm install

# 타입 체크
npm run type-check
```

#### 2. Firebase 연결 오류
```typescript
// .env 파일 확인
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
// ...

// Firebase 설정 확인
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ...
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

#### 3. 스타일 충돌
```css
/* CSS 모듈 사용 */
import styles from './Component.module.css';

/* 또는 Tailwind 클래스 우선순위 조정 */
<div className="custom-style !important-class"></div>
```

#### 4. 성능 문제
```typescript
// React.memo 사용
const MemoizedComponent = React.memo(Component);

// useMemo/useCallback 사용
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

### 📞 지원 요청
문제가 해결되지 않는 경우:
1. **GitHub Issues**: 버그 리포트 작성
2. **Slack 채널**: 실시간 문의
3. **이메일**: dev@kydriving.co.kr

---

*본 가이드는 지속적으로 업데이트됩니다. 개선사항이나 추가 내용은 언제든지 제안해주세요.*