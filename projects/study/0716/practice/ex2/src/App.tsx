import "./App.css";
import GreetingPage from "./pages/GreetingPage";
import ProductListPage from "./pages/ProductListPage";
import QuotePage from "./pages/QuotePage";
import ApplyScrapPage from "./pages/ApplyScrapPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";
import { useState } from "react";
import CounterPage from "./pages/CounterPage";

function App() {
  // stage 이동 구현, 카운트 증가 구현
  const [stage, setStage] = useState(1);
  const [count, setCount] = useState(0);

  // 이전 stage로 이동 맨 처음 stage 이전일 경우 제일 뒤에 구현한 stage로 이동
  const prevStage = () => {
    if (stage === 1) setStage(7);
    else setStage(stage - 1);
  };

  // 다음 stage로 이동 가장 마지막 stage 이후일 경우 제일 처음 구현한 stage로 이동
  const nextStage = () => {
    if (stage === 7) setStage(1);
    else setStage(stage + 1);
  };

  // Count 증가
  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <button className="p-4 m-4 bg-blue-500" onClick={countUp}>
        카운트 증가 {count}
      </button>
      <button className="p-4 m-4 bg-blue-500" onClick={prevStage}>
        이전
      </button>
      <span>{stage}</span>
      <button className="p-4 m-4 bg-blue-500" onClick={nextStage}>
        다음
      </button>
      {stage === 1 && <GreetingPage />}
      {stage === 2 && <ProductListPage />}
      {stage === 3 && <QuotePage />}
      {stage === 4 && <ApplyScrapPage />}
      {stage === 5 && <QuotationPage />}
      {stage === 6 && <ScrapCompletePage />}
      {stage === 7 && <CounterPage />}
    </main>
  );
}

export default App;
