# 프로그래밍 아키텍처 패턴 비교

## MVC, MVP, MVVM 패턴의 구조와 특징

---

### 1. MVC (Model-View-Controller)

#### 구조

- **Model**: 애플리케이션의 데이터와 비즈니스 로직을 담당. 데이터의 상태를 관리하고, 변경 사항을 알림.
- **View**: 사용자에게 보여지는 UI를 담당. Model의 데이터를 받아 화면에 표시.
- **Controller**: 사용자의 입력을 받아 처리하고, Model과 View를 연결하는 역할.

#### 특징

- 역할이 명확하게 분리되어 유지보수와 확장성이 좋음.
- View와 Model이 직접적으로 연결될 수 있음.
- 웹, 데스크톱 등 다양한 환경에서 사용됨.
- 예시: Spring MVC, ASP.NET MVC

#### 구조도

```
사용자 입력
    ↓
Controller ──→ Model ──→ View
    ↑             ↓         ↑
    └─────────────┴─────────┘
```

---

### 2. MVP (Model-View-Presenter)

#### 구조

- **Model**: 데이터와 비즈니스 로직을 담당.
- **View**: UI 요소를 담당하며, 사용자와 상호작용.
- **Presenter**: View와 Model 사이의 중재자 역할. View의 입력을 받아 Model을 갱신하고, Model의 데이터를 View에 전달.

#### 특징

- View와 Model이 직접적으로 연결되지 않고, Presenter를 통해서만 상호작용.
- 테스트가 용이하며, UI 로직과 비즈니스 로직이 분리됨.
- 주로 데스크톱, 모바일 앱에서 많이 사용됨.
- 예시: Android MVP 패턴

#### 구조도

```
사용자 입력
    ↓
  View
    ↓
Presenter ──→ Model
    ↑           ↓
    └───────────┘
```

---

### 3. MVVM (Model-View-ViewModel)

#### 구조

- **Model**: 데이터와 비즈니스 로직을 담당.
- **View**: UI를 담당하며, ViewModel과 데이터 바인딩을 통해 상태를 반영.
- **ViewModel**: View의 상태와 동작을 추상화. Model의 데이터를 가공하여 View에 제공하고, View의 입력을 처리.

#### 특징

- View와 ViewModel이 데이터 바인딩(Data Binding)으로 연결되어, 코드의 양이 줄고 생산성이 높아짐.
- View는 ViewModel만 참조하고, Model과 직접 연결되지 않음.
- 주로 WPF, Xamarin, Angular, React 등에서 사용됨.
- 테스트와 유지보수가 용이함.

#### 구조도

```
사용자 입력
    ↓
  View
    ↕ (Data Binding)
ViewModel ──→ Model
    ↑           ↓
    └───────────┘
```

---

## 요약 비교

| 패턴 | View와 Model 연결 | 중재자 역할 | 데이터 바인딩 | 주요 사용 환경               |
| ---- | ----------------- | ----------- | ------------- | ---------------------------- |
| MVC  | O                 | Controller  | X             | 웹, 데스크톱                 |
| MVP  | X                 | Presenter   | X             | 데스크톱, 모바일             |
| MVVM | X                 | ViewModel   | O             | 데스크톱, 모바일, 프론트엔드 |
