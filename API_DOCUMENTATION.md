# 📡 API 문서

## 목차
1. [Firebase 설정](#firebase-설정)
2. [데이터베이스 구조](#데이터베이스-구조)
3. [API 엔드포인트](#api-엔드포인트)
4. [에러 처리](#에러-처리)
5. [보안 규칙](#보안-규칙)

---

## Firebase 설정

### 환경 변수
```env
# .env 파일
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
```

### 초기화 코드
```typescript
// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
```

---

## 데이터베이스 구조

### Firestore 컬렉션 구조

```
firestore/
├── 📁 contacts/           # 상담 문의
│   ├── contactId/
│   │   ├── name: string
│   │   ├── email: string
│   │   ├── phone: string
│   │   ├── message: string
│   │   ├── courseType: string
│   │   ├── preferredTime: string
│   │   ├── createdAt: timestamp
│   │   └── status: string
├── 📁 users/             # 사용자 정보 (추후)
├── 📁 courses/           # 교육 과정 정보
└── 📁 reviews/           # 후기 데이터 (추후)
```

### 데이터 타입 정의

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

// types/course.ts
export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
  isActive: boolean;
}
```

---

## API 엔드포인트

### 📝 상담 문의 API

#### 문의 등록
```typescript
// POST /api/contacts
const createContact = async (contactData: Omit<Contact, 'id' | 'createdAt' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      status: 'pending',
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    throw new Error('문의 등록에 실패했습니다.');
  }
};

// 사용 예
const contactId = await createContact({
  name: '홍길동',
  email: 'hong@example.com',
  phone: '010-1234-5678',
  message: '운전면허 교육 문의드립니다.',
  courseType: 'basic',
  preferredTime: 'weekday-morning',
});
```

#### 문의 목록 조회 (관리자용)
```typescript
// GET /api/contacts
const getContacts = async (): Promise<Contact[]> => {
  try {
    const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
    })) as Contact[];
  } catch (error) {
    throw new Error('문의 목록을 불러오는데 실패했습니다.');
  }
};
```

#### 문의 상태 업데이트
```typescript
// PATCH /api/contacts/:id
const updateContactStatus = async (id: string, status: Contact['status']) => {
  try {
    await updateDoc(doc(db, 'contacts', id), {
      status,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw new Error('문의 상태 업데이트에 실패했습니다.');
  }
};
```

#### 문의 삭제
```typescript
// DELETE /api/contacts/:id
const deleteContact = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'contacts', id));
  } catch (error) {
    throw new Error('문의 삭제에 실패했습니다.');
  }
};
```

### 📚 교육 과정 API

#### 과정 목록 조회
```typescript
// GET /api/courses
const getCourses = async (): Promise<Course[]> => {
  try {
    const q = query(collection(db, 'courses'), where('isActive', '==', true));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Course[];
  } catch (error) {
    throw new Error('교육 과정 목록을 불러오는데 실패했습니다.');
  }
};
```

#### 과정 상세 조회
```typescript
// GET /api/courses/:id
const getCourse = async (id: string): Promise<Course> => {
  try {
    const docRef = doc(db, 'courses', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Course;
    } else {
      throw new Error('교육 과정을 찾을 수 없습니다.');
    }
  } catch (error) {
    throw new Error('교육 과정 조회에 실패했습니다.');
  }
};
```

---

## 에러 처리

### 표준 에러 응답
```typescript
interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// 에러 코드 정의
export const ERROR_CODES = {
  // 인증 관련
  AUTH_REQUIRED: 'auth/required',
  AUTH_INVALID: 'auth/invalid-credentials',

  // 데이터 관련
  DATA_NOT_FOUND: 'data/not-found',
  DATA_INVALID: 'data/invalid-format',
  DATA_DUPLICATE: 'data/duplicate-entry',

  // 네트워크 관련
  NETWORK_ERROR: 'network/request-failed',
  NETWORK_TIMEOUT: 'network/timeout',

  // 서버 관련
  SERVER_ERROR: 'server/internal-error',
  SERVER_UNAVAILABLE: 'server/service-unavailable',
} as const;
```

### 에러 처리 유틸리티
```typescript
// utils/errorHandler.ts
export class ApiError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleFirebaseError = (error: any): ApiError => {
  const errorCode = error.code;
  const errorMessage = error.message;

  switch (errorCode) {
    case 'permission-denied':
      return new ApiError('접근 권한이 없습니다.', ERROR_CODES.AUTH_REQUIRED, 403);

    case 'not-found':
      return new ApiError('요청한 데이터를 찾을 수 없습니다.', ERROR_CODES.DATA_NOT_FOUND, 404);

    case 'already-exists':
      return new ApiError('이미 존재하는 데이터입니다.', ERROR_CODES.DATA_DUPLICATE, 409);

    case 'resource-exhausted':
      return new ApiError('요청 한도를 초과했습니다.', ERROR_CODES.SERVER_ERROR, 429);

    case 'unavailable':
      return new ApiError('서비스를 사용할 수 없습니다.', ERROR_CODES.SERVER_UNAVAILABLE, 503);

    default:
      console.error('Unhandled Firebase error:', error);
      return new ApiError('알 수 없는 오류가 발생했습니다.', ERROR_CODES.SERVER_ERROR, 500);
  }
};

export const handleApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return '알 수 없는 오류가 발생했습니다.';
};
```

### React 컴포넌트에서의 에러 처리
```typescript
// hooks/useAsync.ts
import { useState, useCallback } from 'react';
import { handleApiError } from '../utils/errorHandler';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useAsync = <T, Args extends any[]>(
  asyncFunction: (...args: Args) => Promise<T>
) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (...args: Args) => {
    setState({ data: null, loading: true, error: null });

    try {
      const data = await asyncFunction(...args);
      setState({ data, loading: false, error: null });
      return data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      setState({ data: null, loading: false, error: errorMessage });
      throw error;
    }
  }, [asyncFunction]);

  return { ...state, execute };
};

// 사용 예
const ContactForm: React.FC = () => {
  const { loading, error, execute } = useAsync(createContact);

  const handleSubmit = async (formData: ContactFormData) => {
    try {
      await execute(formData);
      // 성공 처리
    } catch (error) {
      // 이미 에러 처리는 useAsync에서 수행됨
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 필드들 */}
      {error && <div className="error-message">{error}</div>}
      <button disabled={loading}>
        {loading ? '보내는 중...' : '보내기'}
      </button>
    </form>
  );
};
```

---

## 보안 규칙

### Firestore 보안 규칙
```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 상담 문의 - 인증된 사용자만 읽기, 누구나 쓰기
    match /contacts/{contactId} {
      allow read: if request.auth != null;
      allow create: if request.auth == null ||
        (request.auth != null && request.auth.token.email_verified == true);
      allow update, delete: if request.auth != null &&
        request.auth.token.admin == true;
    }

    // 교육 과정 - 누구나 읽기, 관리자만 쓰기
    match /courses/{courseId} {
      allow read: if true;
      allow write: if request.auth != null &&
        request.auth.token.admin == true;
    }

    // 사용자 프로필 - 본인만 접근
    match /users/{userId} {
      allow read, write: if request.auth != null &&
        request.auth.uid == userId;
    }
  }
}
```

### Storage 보안 규칙
```javascript
// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 프로필 이미지 - 본인만 업로드
    match /users/{userId}/profile/{fileName} {
      allow read: if true;
      allow write: if request.auth != null &&
        request.auth.uid == userId &&
        request.resource.size < 5 * 1024 * 1024 && // 5MB 제한
        request.resource.contentType.matches('image/.*');
    }

    // 교육 자료 - 관리자만 업로드, 누구나 읽기
    match /courses/{courseId}/{fileName} {
      allow read: if true;
      allow write: if request.auth != null &&
        request.auth.token.admin == true &&
        request.resource.size < 50 * 1024 * 1024; // 50MB 제한
    }
  }
}
```

### 환경별 설정
```typescript
// config/firebase.ts
const configs = {
  development: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY_DEV,
    // ... 다른 설정
  },
  staging: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY_STAGING,
    // ... 다른 설정
  },
  production: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // ... 다른 설정
  },
};

const env = import.meta.env.VITE_APP_ENV || 'development';
export const firebaseConfig = configs[env as keyof typeof configs];
```

---

## API 사용 예제

### 상담 폼 구현
```typescript
// components/ContactForm.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAsync } from '../hooks/useAsync';
import { createContact } from '../services/contactService';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  courseType: 'basic' | 'advanced' | 'special';
  preferredTime: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    courseType: 'basic',
    preferredTime: 'anytime',
  });

  const { loading, error, execute } = useAsync(createContact);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await execute(formData);
      // 성공 메시지 표시
      alert('문의가 성공적으로 접수되었습니다!');
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        courseType: 'basic',
        preferredTime: 'anytime',
      });
    } catch (error) {
      // 에러는 useAsync에서 처리됨
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="contact-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-group">
        <label htmlFor="name">이름 *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">이메일 *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">연락처 *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseType">관심 과정</label>
        <select
          id="courseType"
          name="courseType"
          value={formData.courseType}
          onChange={handleChange}
        >
          <option value="basic">기초반</option>
          <option value="advanced">실전반</option>
          <option value="special">특별반</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredTime">선호 시간</label>
        <select
          id="preferredTime"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
        >
          <option value="anytime">언제든지</option>
          <option value="weekday-morning">평일 오전</option>
          <option value="weekday-afternoon">평일 오후</option>
          <option value="weekend">주말</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">문의 내용 *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={loading}
        className="submit-button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? '보내는 중...' : '문의 보내기'}
      </motion.button>
    </motion.form>
  );
};
```

---

*본 API 문서는 지속적으로 업데이트됩니다. 새로운 엔드포인트나 변경사항이 있을 경우 즉시 반영해주세요.*