import React, {useId, useState} from "react"

export default function IdExample() {
    const id = useId();
    const [name, setName] = useState("");

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 m-4">
            <label htmlFor={id}>이름: </label>
            <input id={id} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>  
    )
}