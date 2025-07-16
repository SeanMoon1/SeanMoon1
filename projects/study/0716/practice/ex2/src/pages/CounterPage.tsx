import { initialCount } from "../data/initialCount";
import CounterButton from "../components/CounterButton";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-bold">🎯 클릭 카운터</h2>
      <CounterButton count={count} onClick={() => setCount(count + 1)} />
    </div>
  );
}
