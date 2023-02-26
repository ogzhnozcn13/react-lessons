// import { useState } from "react"
// import LifeCycleMethods from "./components/LifeCycleMethods"
// import UseEffectHook from "./components/UseEffectHook"
// import UseEffectHook2 from "./components/UseEffectHook2"
// import User from "./components/User"
import User2 from "./components/User2"

function App() {
  // const [toggle, setToggle] = useState(false)

  return (
    <div className="container text-center mt-4">

      <User2/>
      {/* <UseEffectHook2/> */}

      {/* <button className="btn btn-danger" onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"}
      </button> */}
      {/* {toggle ? <LifeCycleMethods /> : null} */}
      {/* {toggle && <LifeCycleMethods />} */}
      {/* {toggle && <UseEffectHook />} */}

      {/* <User /> */}
      
    </div>
  )
}

export default App
