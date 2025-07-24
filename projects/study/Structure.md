이 구조는 **React + Node.js(Express)** 기반 풀스택 프로젝트를 기준으로 하고,

프로젝트의 성장에 따라 자연스럽게 확장할 수 있게 설계했습니다.

---

## 🏗️ **풀스택 실전 프로젝트 폴더 구조 (CI/CD, Docker, Swagger 포함)**

```
my-service/
├── .github/                # GitHub Actions 워크플로우(CI/CD) 폴더
│   └── workflows/
│       └── ci.yml
│       └── cd.yml
│
├── docker/                 # 도커 관련 파일/설정 (DB, nginx 등)
│   └── nginx.conf
│   └── init.sql
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── models/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   └── swagger/         # Swagger(오픈API) 설정
│   │        └── swagger.yaml
│   ├── tests/
│   ├── Dockerfile
│   ├── docker-compose.yml   # 백엔드 단독 개발/테스트용
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── api/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── setupTests.ts
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── docker-compose.yml       # 전체 서비스(프론트+백+DB) 통합용
│
├── scripts/                 # CI/CD, 배포, 마이그레이션 등 스크립트
│   └── deploy.sh
│   └── db-migrate.js
│
├── docs/                    # 아키텍처/시스템 설계, API 문서
│   └── api-spec.md
│   └── system-arch.drawio
│
├── .env.example
├── .gitignore
└── README.md
```

---

### **폴더/파일 설명**

* **.github/workflows/**:

  * CI(테스트/빌드) & CD(배포) 자동화 워크플로우(YAML 파일)
* **docker/**:

  * Nginx, DB 초기화 등 인프라 설정파일
* **backend/swagger/**:

  * Swagger(OpenAPI) 명세파일. Express에서 자동 문서 서비스에 활용
* **backend/Dockerfile, docker-compose.yml**:

  * 백엔드만 단독 개발·테스트할 때 컨테이너 환경
* **frontend/Dockerfile**:

  * 프론트엔드 도커 빌드용
* **docker-compose.yml(루트)**:

  * 프론트+백+DB+Nginx까지 한번에 띄우는 통합 설정
* **scripts/**:

  * 배포/마이그레이션 등 자동화 스크립트

---

### **실제 활용 흐름 예시**

* **1. CI/CD**

  * PR/Merge 발생 시 `.github/workflows/ci.yml`로 테스트·빌드
  * main/master 브랜치 배포는 `cd.yml`로 배포 자동화(Docker 컨테이너, 클라우드, 서버 등)
* **2. Docker**

  * 개발환경(로컬/테스트/운영) 모두 Docker로 동일한 환경 보장
  * `docker-compose up` 한 번이면 프론트/백/DB/Nginx 전체 환경 구성
* **3. Swagger**

  * `backend/src/swagger/swagger.yaml`에 API 명세 작성
  * Express에서는 [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)로 자동 문서 서비스 제공(`api-docs` 라우트 등)

---

### **실전 확장 팁**

* `e2e/`, `cypress/`, `playwright/` 등 E2E 테스트 추가 가능
* `k8s/`, `helm/` 등 클라우드 인프라용 폴더 추가 가능
* `infra/` 폴더에 모니터링/로깅 설정(Grafana, Loki 등)도 통합 가능

---

## 📋 **정리**

* 실무형 프로젝트는 `코드`, `테스트`, `문서`, `배포`, `설정`, `자동화`를 명확히 구분해서 폴더/파일 설계
* **Docker + CI/CD + Swagger**까지 적용하면,
  “개발-테스트-배포-문서화” 전체가 표준화되고 협업·운영이 매우 쉬워집니다.

---

# 🏗️ **고급 React 프로젝트 폴더 구조 (e2e, mocks, constants, contexts 포함)**

```
frontend/
├── public/
│   └── index.html
│   └── ...
├── src/
│   ├── api/
│   │   └── boardApi.ts
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── ...
│   ├── constants/                 # 상수 모음 (enum, 문자열, 라벨 등)
│   │   ├── routes.ts
│   │   ├── colors.ts
│   │   └── messages.ts
│   ├── contexts/                  # React Context API 관련
│   │   ├── ThemeContext.tsx
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   └── useInput.ts
│   ├── mocks/                     # Mock 서버, MSW 핸들러 등
│   │   ├── handlers.ts
│   │   ├── server.ts
│   │   └── mockData.ts
│   ├── pages/
│   │   ├── BoardPage.tsx
│   │   ├── BoardPage.test.tsx
│   │   └── ...
│   ├── store/
│   │   ├── boardStore.ts
│   │   ├── boardStore.test.ts
│   │   ├── userStore.ts
│   │   └── userStore.test.ts
│   ├── styles/
│   │   └── tailwind.css
│   ├── types/
│   │   ├── board.ts
│   │   └── user.ts
│   ├── utils/
│   │   └── formatDate.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.ts
│   └── reportWebVitals.ts
├── cypress/                       # E2E 테스트 (Cypress 공식 폴더명)
│   ├── e2e/
│   │   ├── board.cy.ts
│   │   └── user.cy.ts
│   ├── fixtures/
│   │   └── users.json
│   ├── support/
│   │   ├── commands.ts
│   │   └── e2e.ts
├── .env
├── jest.config.js
├── cypress.config.ts
├── tailwind.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ **폴더별 역할**

* **constants/**:

  * 전체에서 쓰는 상수, enum, 라우트, 컬러, 에러 메시지 등
* **contexts/**:

  * React Context API, 전역 테마/인증/알림/설정 등 (zustand와 함께 사용 가능)
* **mocks/**:

  * MSW(Mock Service Worker) 기반 목서버 핸들러, 테스트용 목데이터, mock 함수 등
* **cypress/**:

  * Cypress 공식 구조, E2E 테스트코드(e2e/), 테스트용 fixture 데이터, 커스텀 명령어(support/)
* **store/**:

  * zustand 전역 상태 관리 파일과 각종 테스트
* **setupTests.ts**:

  * RTL, Jest, MSW 등 테스트 환경 전역 세팅
* **jest.config.js, cypress.config.ts**:

  * 각 테스트 도구 환경설정 파일

---

## ✅ **실무 확장성 팁**

* \*\*mocks/\*\*는

  * 개발/테스트 환경에서만 활성화(예: MSW로 API 응답 mocking)
  * E2E(통합) 테스트, Storybook 등에서 활용도 높음
* \*\*constants/\*\*는

  * 값 변경이 잦거나, 반복적으로 쓰이는 문자열/enum/라우트 관리에 효과적
* \*\*contexts/\*\*는

  * zustand로 관리하지 않는 컨텍스트 기반 전역 상태(테마, 언어, 접근성, 토스트 등)에 유용
* \*\*cypress/\*\*는

  * 실제 브라우저 기반 E2E(사용자 시나리오 전체 흐름) 테스트 관리
  * cypress/e2e/에는 실제 테스트 코드, fixtures/에는 목데이터, support/에는 커스텀 명령어

---

## ✅ **실제 테스트 연계 흐름**

* **unit:** `store/*.test.ts`, `components/*.test.tsx`
* **integration:** `pages/*.test.tsx`, mocks/ 핸들러와 연동
* **e2e:** `cypress/e2e/*.cy.ts` (실제 브라우저 기반 전체 플로우)

---

## 📝 **정리**

* 규모가 커질수록 폴더를 역할별/관심사별로 명확하게 분리하는 것이 유지보수/협업에 중요합니다.
* **테스트, 상수, mock, context, e2e까지** 실무에서 많이 쓰는 구조이니 이대로 확장하면 어떤 대형 프로젝트에도 대응할 수 있습니다!

---

# 🧪 **Zustand 기반 프로젝트 – 테스트 코드 예시**

## 1. **Zustand 스토어 단위 테스트 (store/boardStore.test.ts)**

Zustand 스토어의 로직은 매우 단순하므로, 스토어 함수(액션)들이 의도한 대로 상태를 변경하는지 직접 호출해서 테스트할 수 있습니다.

```ts
// src/store/boardStore.test.ts
import { act } from 'react-dom/test-utils';
import { useBoardStore } from './boardStore';

describe('useBoardStore', () => {
  beforeEach(() => {
    // 각 테스트마다 스토어 초기화
    useBoardStore.setState({ boards: [] });
  });

  it('보드를 추가할 수 있다', () => {
    act(() => {
      useBoardStore.getState().addBoard('새 보드');
    });
    const boards = useBoardStore.getState().boards;
    expect(boards.length).toBe(1);
    expect(boards[0].title).toBe('새 보드');
  });

  it('보드를 삭제할 수 있다', () => {
    act(() => {
      useBoardStore.getState().addBoard('테스트 보드');
    });
    const id = useBoardStore.getState().boards[0].id;
    act(() => {
      useBoardStore.getState().removeBoard(id);
    });
    expect(useBoardStore.getState().boards).toHaveLength(0);
  });
});
```

* **주의:** persist/immer 등 미들웨어를 쓸 때도 위 방식 그대로 동작합니다.
* `act()`는 리액트 환경에서 상태변화가 있을 때(엄격모드 등) 안전하게 래핑해줍니다.

---

## 2. **컴포넌트 통합 테스트 (pages/BoardPage.test.tsx)**

실제 컴포넌트에서 zustand 스토어가 제대로 동작하는지,
사용자가 입력하고 버튼을 클릭할 때 UI가 올바르게 반응하는지 테스트합니다.

```tsx
// src/pages/BoardPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import BoardPage from './BoardPage';
import { useBoardStore } from '../store/boardStore';

beforeEach(() => {
  // 테스트 전 상태 초기화 (persist 사용시 localStorage 초기화도 필요)
  useBoardStore.setState({ boards: [] });
});

test('새 보드를 추가하면 리스트에 표시된다', () => {
  render(<BoardPage />);
  const input = screen.getByPlaceholderText('보드 이름');
  fireEvent.change(input, { target: { value: 'My Board' } });

  const addButton = screen.getByText('추가');
  fireEvent.click(addButton);

  expect(screen.getByText('My Board')).toBeInTheDocument();
});

test('삭제 버튼을 누르면 해당 보드가 사라진다', () => {
  // 미리 보드 추가
  useBoardStore.setState({ boards: [{ id: 1, title: '테스트' }] });

  render(<BoardPage />);
  const deleteButton = screen.getByText('삭제');
  fireEvent.click(deleteButton);

  expect(screen.queryByText('테스트')).not.toBeInTheDocument();
});
```

* **실무 팁:**
  persist 미들웨어를 쓸 경우 `localStorage.clear()` 등으로 스토어 상태를 완전히 초기화하는 것이 안전합니다.

---

## 3. **실행 방법**

1. 필요한 테스트 패키지 설치

   ```
   npm install --save-dev @testing-library/react @testing-library/jest-dom
   ```
2. 테스트 실행

   ```
   npm test
   ```

   또는

   ```
   yarn test
   ```

---

## 4. **구조 한눈에 보기**

```
src/
├── store/
│   ├── boardStore.ts
│   └── boardStore.test.ts      # zustand 스토어 단위 테스트
├── pages/
│   ├── BoardPage.tsx
│   └── BoardPage.test.tsx      # 컴포넌트(통합) 테스트
```

---

## 5. **추가 팁**

* **다른 스토어(userStore 등)도 동일한 방식으로 테스트 파일 추가 가능**
* 컴포넌트 테스트에서 여러 스토어가 연계될 경우, 각 스토어의 상태를 `beforeEach`에서 같이 초기화
* `jest --coverage`로 테스트 커버리지도 쉽게 측정 가능

---