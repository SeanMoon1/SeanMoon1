import React, {useState, useTransition} from "react"

export default function Transition() {
    const [input,setInput] = useState('');
    const [list, setList] = useState<string[]>([])
    const [isPending, startTransition] = useTransition();

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);

        startTransition(() => {
            //비긴급 상태 업데이트
            const items = [];
            for(let i = 0; i < 10000000000000000; i++){
                items.push(value);
            }
            setList(items);
        })
    }
    return (
        <div>
            <input value={input} onChange={handelChange} />
            {isPending && <span>로딩 중...</span>}
            <div>총 {list.length}개</div>
        </div>
    )
}