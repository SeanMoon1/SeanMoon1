import React, {useState, useCallback} from "react"

// 자식 컴포넌트 (React.memo로 감싼다.)
const Child = React.memo(({onClick}: {onClick: () => void}) => {
    console.log('🔁 자식 컴포넌트 렌더링');
    return (
        <div>
            <button className="p-4 m-4 bg-blue-300" onClick={onClick}>자식 버튼 클릭</button>
        </div>
    )
})

export default function UseCallBackExample() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(false);

    //useCallback을 사용한 이벤트 핸들러
    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [])

   return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 m-4" style={{padding: 20}}>
        <h2>useCallback 예제</h2>
        <p>Count: {count}</p>
        <button className="p-4 m-4 bg-blue-300" onClick={() => setOther(!other)}>
            Toggle: {other.toString()}
        </button>
        <Child onClick={handleClick} />
    </div>
   )
}