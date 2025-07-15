import {useClock} from './hooks'
import Clock from './pages/Clock'
import {useState} from 'react'
// import {useEffect, useState} from 'react'

// export default function App() {
//   const [today, setToday] = useState(newDate())

//   useEffect(() => {
//     const duration = 1000
//     const id = setInterval(() => {
//       setToday(newDate())
//     }, duration)
//     return () => clearInterval(id)
//   }, [])
//   return <Clock today={today} />
// }

export default function App() {
  const today = useClock()
  return <Clock today={today} />
}

// export default function App() {
//   const [number1, setNumber1] = useState(0)
//   const [number2, setNumber2] = useState(0)

//   return (
//     <div>
//       <h2>{'덧셈기'}</h2>
//       <div className="flex flex-row items-center">
//         <input
//           className="text-white bg-black border"
//           type="number"
//           value={number1}
//           onChange={e => setNumber1(parseInt(e.target.value))}
//         />
//         <span>{'+'}</span>
//         <input
//           className="text-white bg-black border"
//           type="number"
//           value={number2}
//           onChange={e => setNumber2(parseInt(e.target.value))}
//         />
//       </div>

//       <p>{`덧셈결과는: ${number1} + ${number2} = ${number1 + number2}`}</p>
//     </div>
//   )
// }
