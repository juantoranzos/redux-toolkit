import { useSelector, useDispatch } from "react-redux"
import { incrementar , decrementar, reseterar } from "./slice/counterSlice"



function App() {
 
  const counter = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
 
  return (
    <>
      <h1 className="m-5 text-center" >{counter}</h1>
      <section className="text-center">

      <button  className="btn btn-danger m-2" onClick={()=>dispatch(decrementar(1))}>-1</button>
      <button className="btn btn-danger m-2" onClick={()=>dispatch(reseterar())}>reset</button>
      <button className="btn btn-danger m-2" onClick={()=>dispatch(incrementar(1))}>+1</button>
      </section>

    </>
  )
}

export default App
