import { useRef } from "react";

export default function MyComponenet() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="p-4 m-4 border border-red-300 rounded-md">
      <input className="border border-blue-300" ref={inputRef} type="text" />
      <button className="bg-green-300" onClick={focusInput}>
        포커스 주기
      </button>
    </div>
  );
}
