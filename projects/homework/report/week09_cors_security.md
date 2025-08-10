# CORS 정책과 웹 보안 기본 개념

## 목차
1. [CORS란?](#cors란)
2. [Origin 이해하기](#origin-이해하기)
3. [CORS Headers](#cors-headers)
4. [Preflight 요청](#preflight-요청)
5. [웹 보안 기본 개념](#웹-보안-기본-개념)
6. [실제 예제](#실제-예제)
7. [CORS 설정 방법](#cors-설정-방법)
8. [보안 고려사항](#보안-고려사항)

---

## CORS란?

**CORS (Cross-Origin Resource Sharing)**는 웹 브라우저에서 실행되는 JavaScript가 다른 출처(Origin)의 리소스에 접근할 때 적용되는 보안 정책입니다.

### CORS의 필요성
- **Same-Origin Policy**: 브라우저의 기본 보안 정책으로, 같은 출처의 리소스만 접근 가능
- **Cross-Origin 요청**: 다른 출처의 API나 리소스에 접근해야 하는 현대 웹의 요구사항
- **보안과 기능성의 균형**: 안전하면서도 필요한 기능을 제공

### CORS 동작 원리
```
클라이언트 (https://example.com) 
    ↓ 요청
서버 (https://api.example.com)
    ↓ CORS 헤더 포함 응답
브라우저가 CORS 정책 검사
    ↓ 허용/차단 결정
클라이언트에 결과 전달
```

---

## Origin 이해하기

### Origin의 구성 요소
Origin은 다음 세 가지 요소로 구성됩니다:

```
https://www.example.com:8080/path/to/resource
│     │                │     │
│     │                │     └── Path (Origin에 포함되지 않음)
│     │                └── Port
│     └── Hostname
└── Protocol
```

### Origin 비교 예시

| URL | Origin | 설명 |
|-----|--------|------|
| `https://example.com/api` | `https://example.com` | 같은 Origin |
| `https://api.example.com` | `https://api.example.com` | 다른 Origin (서브도메인) |
| `http://example.com` | `http://example.com` | 다른 Origin (프로토콜) |
| `https://example.com:3000` | `https://example.com:3000` | 다른 Origin (포트) |

### Same-Origin vs Cross-Origin

```javascript
// Same-Origin 요청 (허용됨)
fetch('https://example.com/api/data')

// Cross-Origin 요청 (CORS 정책 적용)
fetch('https://api.example.com/data')
```

---

## CORS Headers

### 서버에서 설정하는 CORS 헤더

#### 1. Access-Control-Allow-Origin
```http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Origin: *  // 모든 Origin 허용 (보안상 권장하지 않음)
```

#### 2. Access-Control-Allow-Methods
```http
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
```

#### 3. Access-Control-Allow-Headers
```http
Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With
```

#### 4. Access-Control-Allow-Credentials
```http
Access-Control-Allow-Credentials: true  // 쿠키, 인증 헤더 포함 허용
```

#### 5. Access-Control-Max-Age
```http
Access-Control-Max-Age: 86400  // Preflight 캐시 시간 (초)
```

### 클라이언트에서 보내는 CORS 헤더

#### 1. Origin
```http
Origin: https://example.com
```

#### 2. Access-Control-Request-Method
```http
Access-Control-Request-Method: POST
```

#### 3. Access-Control-Request-Headers
```http
Access-Control-Request-Headers: Content-Type, Authorization
```

---

## Preflight 요청

### Preflight 요청이란?
브라우저가 실제 요청을 보내기 전에 서버의 CORS 정책을 미리 확인하는 **OPTIONS** 요청입니다.

### Preflight 요청이 발생하는 경우

#### 1. Simple Request가 아닌 경우
- **Simple Request 조건**:
  - GET, HEAD, POST 메서드
  - 기본 헤더만 사용 (Accept, Accept-Language, Content-Language, Content-Type)
  - Content-Type이 다음 중 하나: `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`

#### 2. Custom 헤더가 포함된 경우
```javascript
// Preflight 요청 발생
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer token',
    'Custom-Header': 'value'
  }
})
```

#### 3. 복잡한 Content-Type 사용
```javascript
// Preflight 요청 발생
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: 'value' })
})
```

### Preflight 요청 흐름

```
1. 클라이언트가 복잡한 요청 준비
2. 브라우저가 OPTIONS 요청 전송 (Preflight)
3. 서버가 CORS 정책 응답
4. 브라우저가 정책 확인
5. 허용된 경우 실제 요청 전송
6. 서버가 실제 응답 전송
```

### Preflight 요청 예시

#### 클라이언트 요청 (OPTIONS)
```http
OPTIONS /api/data HTTP/1.1
Host: api.example.com
Origin: https://example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type, Authorization
```

#### 서버 응답
```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400
```

---

## 웹 보안 기본 개념

### 1. Same-Origin Policy (SOP)
- 브라우저의 기본 보안 정책
- 같은 출처의 리소스만 접근 가능
- XSS, CSRF 공격 방지

### 2. Cross-Site Scripting (XSS)
- 악성 스크립트를 웹페이지에 삽입하는 공격
- 사용자 정보 탈취, 세션 하이재킹 등

### 3. Cross-Site Request Forgery (CSRF)
- 사용자가 모르는 사이에 악의적인 요청을 보내는 공격
- 토큰 기반 방어 필요

### 4. Content Security Policy (CSP)
- 웹페이지에서 실행 가능한 리소스를 제한하는 정책
- XSS 공격 방지에 효과적

---

## 실제 예제

### 1. Node.js Express 서버에서 CORS 설정

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// 기본 CORS 설정
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// 특정 라우트에만 CORS 적용
app.get('/api/data', cors({
  origin: 'https://example.com'
}), (req, res) => {
  res.json({ message: 'CORS 허용된 데이터' });
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
```

### 2. 클라이언트에서 CORS 요청

```javascript
// Simple Request (Preflight 없음)
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// Complex Request (Preflight 발생)
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },
  credentials: 'include', // 쿠키 포함
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('CORS 오류:', error));
```

### 3. CORS 오류 처리

```javascript
// CORS 오류 감지 및 처리
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'TypeError' && error.message.includes('CORS')) {
      console.error('CORS 정책으로 인한 오류:', error);
      // 대체 방법 제공
    } else {
      console.error('기타 오류:', error);
    }
  });
```

---

## CORS 설정 방법

### 1. 서버 측 설정

#### Express.js
```javascript
const cors = require('cors');

// 모든 Origin 허용 (개발 환경)
app.use(cors());

// 특정 Origin만 허용
app.use(cors({
  origin: 'https://example.com'
}));

// 여러 Origin 허용
app.use(cors({
  origin: ['https://example.com', 'https://app.example.com']
}));

// 동적 Origin 허용
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['https://example.com', 'https://app.example.com'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS 정책 위반'));
    }
  }
}));
```

#### Python Flask
```python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['https://example.com'])
```

#### Java Spring Boot
```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("https://example.com")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

### 2. 프록시 서버 사용

#### 개발 환경에서 프록시 설정 (Vite)
```javascript
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://api.example.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
}
```

---

## 보안 고려사항

### 1. CORS 설정 시 주의사항

#### ❌ 잘못된 설정
```javascript
// 모든 Origin 허용 (보안 위험)
app.use(cors({
  origin: '*',
  credentials: true  // credentials와 '*' 함께 사용 불가
}));
```

#### ✅ 올바른 설정
```javascript
// 특정 Origin만 허용
app.use(cors({
  origin: 'https://example.com',
  credentials: true
}));
```

### 2. 보안 모범 사례

#### 1) Origin 검증
```javascript
const allowedOrigins = [
  'https://example.com',
  'https://app.example.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('허용되지 않은 Origin'));
    }
  }
}));
```

#### 2) HTTPS 강제
```javascript
// HTTPS 리다이렉트
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`);
  } else {
    next();
  }
});
```

#### 3) 적절한 헤더 설정
```javascript
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});
```

### 3. 환경별 설정

#### 개발 환경
```javascript
const isDevelopment = process.env.NODE_ENV === 'development';

app.use(cors({
  origin: isDevelopment 
    ? ['http://localhost:3000', 'http://localhost:3001']
    : ['https://example.com'],
  credentials: true
}));
```

#### 프로덕션 환경
```javascript
// 엄격한 CORS 설정
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
}));
```

---

## 결론

CORS는 현대 웹 개발에서 필수적인 보안 정책입니다. 올바른 CORS 설정은:

1. **보안성**: 무단 접근 방지
2. **기능성**: 필요한 Cross-Origin 요청 허용
3. **사용자 경험**: 원활한 웹 애플리케이션 동작

개발자는 CORS의 동작 원리를 이해하고, 환경에 맞는 적절한 설정을 통해 안전하고 효율적인 웹 애플리케이션을 구축해야 합니다.

---

## 참고 자료

- [MDN Web Docs - CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
- [CORS Specification](https://fetch.spec.whatwg.org/#cors-protocol)
- [OWASP Security Guidelines](https://owasp.org/www-project-top-ten/)
- [Express.js CORS Documentation](https://expressjs.com/en/resources/middleware/cors.html)
