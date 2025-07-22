import React, {useState, useCallback} from "react"

const Button = React.memo(({onClick, label}: {onClick: () => void, label: string}) => {
    console.log(`Rendering: ${label}`);
    return <button className="p-4 m-4 bg-blue-300" onClick={onClick}>{label}</button>
})

export default function Parent() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {setCount((prev) => prev +1)}, [])

return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 m-4">
        <p>Count: {count}</p>
        <Button onClick={handleClick} label="Increment" />
    </div>
    )
}