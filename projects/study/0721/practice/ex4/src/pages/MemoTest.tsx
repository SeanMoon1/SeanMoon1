import ExpensiveComponent from "../components/ExpensiveComponent"
import UseMemoExample from "../components/UseMemo"
import Parent from "../components/Parent"
import UseCallBackExample from "../components/UseCallBackExample"


export default function MemoTest() {
    return (
        <div>
            <h2>useMemo 테스트</h2>
            <ExpensiveComponent />
            <UseMemoExample />
            <Parent />
            <UseCallBackExample />
        </div>
    )
}