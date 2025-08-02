# Week 08 - RESTful API 개념과 설계

## 📋 목차
1. [RESTful API 기본 개념](#1-restful-api-기본-개념)
2. [REST 원칙 및 HTTP 메서드](#2-rest-원칙-및-http-메서드)
3. [RESTful 엔드포인트 설계 방법](#3-restful-엔드포인트-설계-방법)
4. [Express/MongoDB 기반 REST API 예제](#4-expressmongodb-기반-rest-api-예제)
5. [실전 프로젝트 적용](#5-실전-프로젝트-적용)

---

## 1. RESTful API 기본 개념

### 1.1 REST란?
- **REST (Representational State Transfer)**: 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하는 아키텍처 스타일
- **자원(Resource) 중심의 설계**: 모든 것을 자원으로 표현
- **상태 없는(Stateless) 통신**: 각 요청은 독립적으로 처리
- **표준 HTTP 메서드 사용**: GET, POST, PUT, DELETE 등

### 1.2 RESTful API의 특징
- **Uniform Interface**: 일관된 인터페이스 제공
- **Stateless**: 각 요청은 독립적
- **Cacheable**: HTTP 캐싱 메커니즘 활용
- **Client-Server**: 클라이언트와 서버 분리
- **Layered System**: 계층화된 시스템 구조
- **Code on Demand**: 필요시 코드 전송 (선택사항)

---

## 2. REST 원칙 및 HTTP 메서드

### 2.1 HTTP 메서드와 의미

| 메서드 | 의미 | 예시 |
|--------|------|------|
| **GET** | 리소스 조회 | 사용자 목록 조회 |
| **POST** | 리소스 생성 | 새 사용자 등록 |
| **PUT** | 리소스 전체 수정 | 사용자 정보 전체 교체 |
| **PATCH** | 리소스 부분 수정 | 사용자 이름만 변경 |
| **DELETE** | 리소스 삭제 | 사용자 삭제 |

### 2.2 HTTP 상태 코드

#### 성공 응답 (2xx)
- **200 OK**: 요청 성공
- **201 Created**: 리소스 생성 성공
- **204 No Content**: 성공했지만 응답 본문 없음

#### 클라이언트 오류 (4xx)
- **400 Bad Request**: 잘못된 요청
- **401 Unauthorized**: 인증 필요
- **403 Forbidden**: 권한 없음
- **404 Not Found**: 리소스 없음
- **409 Conflict**: 리소스 충돌

#### 서버 오류 (5xx)
- **500 Internal Server Error**: 서버 내부 오류
- **502 Bad Gateway**: 게이트웨이 오류
- **503 Service Unavailable**: 서비스 불가

---

## 3. RESTful 엔드포인트 설계 방법

### 3.1 기본 설계 원칙

#### 1) 리소스 중심 설계
```
❌ 잘못된 예
GET /getUsers
POST /createUser
PUT /updateUser
DELETE /deleteUser

✅ 올바른 예
GET /users
POST /users
PUT /users/:id
DELETE /users/:id
```

#### 2) 계층 구조 표현
```
/users/:userId/posts/:postId/comments/:commentId
```

#### 3) 복수형 사용
```
/users (O)
/user (X)
```

#### 4) 동사 사용 금지
```
❌ /getUsers, /createUser, /updateUser
✅ /users (GET, POST, PUT)
```

### 3.2 실제 엔드포인트 설계 예제

#### 사용자 관리 API
```
GET    /users          # 사용자 목록 조회
GET    /users/:id      # 특정 사용자 조회
POST   /users          # 새 사용자 생성
PUT    /users/:id      # 사용자 정보 전체 수정
PATCH  /users/:id      # 사용자 정보 부분 수정
DELETE /users/:id      # 사용자 삭제
```

#### 게시글 관리 API
```
GET    /posts                    # 게시글 목록 조회
GET    /posts/:id               # 특정 게시글 조회
POST   /posts                   # 새 게시글 생성
PUT    /posts/:id               # 게시글 전체 수정
PATCH  /posts/:id               # 게시글 부분 수정
DELETE /posts/:id               # 게시글 삭제

GET    /posts/:id/comments      # 게시글의 댓글 목록
POST   /posts/:id/comments      # 게시글에 댓글 추가
```

#### 검색 및 필터링
```
GET /users?page=1&limit=10&sort=name&order=asc
GET /posts?category=tech&author=john&published=true
```

---

## 4. Express/MongoDB 기반 REST API 예제

### 4.1 프로젝트 구조
```
rest-api/
├── src/
│   ├── controllers/
│   │   ├── userController.js
│   │   └── postController.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── postModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── postRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── validation.js
│   ├── utils/
│   │   └── database.js
│   └── app.js
├── package.json
└── .env
```

### 4.2 데이터베이스 연결 (MongoDB)
```javascript
// src/utils/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB 연결 성공');
  } catch (error) {
    console.error('MongoDB 연결 실패:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### 4.3 사용자 모델 정의
```javascript
// src/models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '이름은 필수입니다'],
    trim: true,
    maxlength: [50, '이름은 50자를 초과할 수 없습니다']
  },
  email: {
    type: String,
    required: [true, '이메일은 필수입니다'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, '올바른 이메일 형식이 아닙니다']
  },
  password: {
    type: String,
    required: [true, '비밀번호는 필수입니다'],
    minlength: [6, '비밀번호는 최소 6자 이상이어야 합니다']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
```

### 4.4 사용자 컨트롤러
```javascript
// src/controllers/userController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 모든 사용자 조회
exports.getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'createdAt', order = 'desc' } = req.query;
    
    const users = await User.find()
      .select('-password')
      .sort({ [sort]: order === 'desc' ? -1 : 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.countDocuments();

    res.status(200).json({
      success: true,
      data: users,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다',
      error: error.message
    });
  }
};

// 특정 사용자 조회
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: '사용자를 찾을 수 없습니다'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다',
      error: error.message
    });
  }
};

// 사용자 생성
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 이메일 중복 확인
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: '이미 존재하는 이메일입니다'
      });
    }

    // 비밀번호 해싱
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    // JWT 토큰 생성
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다',
      error: error.message
    });
  }
};

// 사용자 정보 수정
exports.updateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: '사용자를 찾을 수 없습니다'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다',
      error: error.message
    });
  }
};

// 사용자 삭제
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: '사용자를 찾을 수 없습니다'
      });
    }

    res.status(200).json({
      success: true,
      message: '사용자가 성공적으로 삭제되었습니다'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '서버 오류가 발생했습니다',
      error: error.message
    });
  }
};
```

### 4.5 라우터 설정
```javascript
// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// 공개 라우트
router.post('/register', userController.createUser);

// 보호된 라우트 (인증 필요)
router.get('/', auth, userController.getUsers);
router.get('/:id', auth, userController.getUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;
```

### 4.6 인증 미들웨어
```javascript
// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const auth = async (req, res, next) => {
  try {
    // 헤더에서 토큰 추출
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: '액세스 토큰이 필요합니다'
      });
    }

    const token = authHeader.substring(7); // 'Bearer ' 제거

    // 토큰 검증
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 사용자 확인
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({
        success: false,
        message: '유효하지 않은 토큰입니다'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: '유효하지 않은 토큰입니다'
    });
  }
};

module.exports = auth;
```

### 4.7 메인 애플리케이션
```javascript
// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./utils/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

// 데이터베이스 연결
connectDB();

// 미들웨어
app.use(helmet()); // 보안 헤더
app.use(cors()); // CORS 설정
app.use(morgan('combined')); // 로깅
app.use(express.json({ limit: '10mb' })); // JSON 파싱
app.use(express.urlencoded({ extended: true }));

// 라우트
app.use('/api/users', userRoutes);

// 기본 라우트
app.get('/', (req, res) => {
  res.json({
    message: 'RESTful API 서버가 실행 중입니다',
    version: '1.0.0',
    endpoints: {
      users: '/api/users'
    }
  });
});

// 404 에러 핸들러
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: '요청한 리소스를 찾을 수 없습니다'
  });
});

// 전역 에러 핸들러
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: '서버 내부 오류가 발생했습니다'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
});
```

---

## 5. 실전 프로젝트 적용

### 5.1 API 테스트 예제

#### Postman 또는 curl을 사용한 테스트

```bash
# 1. 사용자 등록
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "홍길동",
    "email": "hong@example.com",
    "password": "123456"
  }'

# 2. 로그인 (토큰 받기)
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "hong@example.com",
    "password": "123456"
  }'

# 3. 사용자 목록 조회 (인증 필요)
curl -X GET http://localhost:5000/api/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# 4. 특정 사용자 조회
curl -X GET http://localhost:5000/api/users/USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# 5. 사용자 정보 수정
curl -X PUT http://localhost:5000/api/users/USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "김철수",
    "email": "kim@example.com"
  }'

# 6. 사용자 삭제
curl -X DELETE http://localhost:5000/api/users/USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### 5.2 프론트엔드 연동 예제

```javascript
// API 서비스 클래스
class UserService {
  constructor() {
    this.baseURL = 'http://localhost:5000/api';
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` })
    };
  }

  async getUsers(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${this.baseURL}/users?${queryString}`, {
      headers: this.getHeaders()
    });
    return response.json();
  }

  async getUser(id) {
    const response = await fetch(`${this.baseURL}/users/${id}`, {
      headers: this.getHeaders()
    });
    return response.json();
  }

  async createUser(userData) {
    const response = await fetch(`${this.baseURL}/users/register`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(userData)
    });
    return response.json();
  }

  async updateUser(id, userData) {
    const response = await fetch(`${this.baseURL}/users/${id}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(userData)
    });
    return response.json();
  }

  async deleteUser(id) {
    const response = await fetch(`${this.baseURL}/users/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
    return response.json();
  }
}

// 사용 예제
const userService = new UserService();

// 사용자 목록 조회
userService.getUsers({ page: 1, limit: 10 })
  .then(data => console.log('사용자 목록:', data))
  .catch(error => console.error('오류:', error));

// 새 사용자 생성
userService.createUser({
  name: '김철수',
  email: 'kim@example.com',
  password: '123456'
})
  .then(data => {
    console.log('생성된 사용자:', data);
    if (data.data.token) {
      userService.setToken(data.data.token);
    }
  })
  .catch(error => console.error('오류:', error));
```

### 5.3 모범 사례 및 주의사항

#### ✅ 권장 사항
- **일관된 응답 형식**: 모든 API 응답은 동일한 구조 사용
- **적절한 HTTP 상태 코드**: 상황에 맞는 상태 코드 반환
- **에러 처리**: 명확한 에러 메시지 제공
- **보안**: JWT 토큰, 입력 검증, CORS 설정
- **문서화**: API 문서 작성 (Swagger 등)

#### ❌ 피해야 할 사항
- **동사 사용**: `/getUsers`, `/createUser` 대신 `/users` 사용
- **단수형 사용**: `/user` 대신 `/users` 사용
- **중첩된 동사**: `/users/getAll` 대신 `/users` 사용
- **불필요한 복잡성**: 간단하고 직관적인 설계

---

## 📝 결론

RESTful API는 웹 서비스의 표준적인 설계 패턴으로, 다음과 같은 장점을 제공합니다:

1. **표준화**: HTTP 프로토콜의 표준 메서드 활용
2. **확장성**: 무상태(Stateless) 설계로 확장 용이
3. **캐싱**: HTTP 캐싱 메커니즘 활용 가능
4. **독립성**: 클라이언트와 서버의 독립적 개발
5. **재사용성**: 일관된 인터페이스로 재사용 가능

Express.js와 MongoDB를 조합하여 RESTful API를 구현하면, 현대적인 웹 애플리케이션 개발에 필요한 모든 기능을 제공할 수 있습니다.
