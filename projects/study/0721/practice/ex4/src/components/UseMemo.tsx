import React, {useMemo, useState} from "react"

function slowFunction(num: number) {
    console.log('무거운 계산 실행 중 ...')
    let result = 0;
    for (let i =0; i<1e8; i++){
        result += num * Math.random();
    }
    return result;
}
export default function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(false);

    const expensiveResult = useMemo(()=>{
        return slowFunction(count);
    }, [count]); // count가 바뀔 때만 재계산

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 m-4">
            <p>Count: {count}</p>
            <button className="p-4 m-4 bg-blue-300" onClick={()=>setCount(count+1)}>+1 증가</button>
            <button className="p-4 m-4 bg-blue-300" onClick={()=>setCount(count)}>+0 증가</button>
            <button className="p-4 m-4 bg-blue-300" onClick={()=>setOther(!other)}>Toggle: {other.toString()}</button>
            <p>계산 결과: {expensiveResult.toFixed(2)}</p>
        </div>
    )
}