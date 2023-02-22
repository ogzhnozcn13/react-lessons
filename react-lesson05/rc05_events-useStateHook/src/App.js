import Event from "./components/1-events/Event"
import Counter from "./components/2-classComponent/Counter"
import Counter2 from "./components/2-classComponent/Counter2"
import UseStateCount2 from "./components/3-useStateHook/UseStateCount2"
import UseStateCounter from "./components/3-useStateHook/UseStateCounter"
import UseStateObject from "./components/3-useStateHook/UseStateObject"
import UseStateObject2 from "./components/3-useStateHook/UseStateObject2"

function App() {
  return (
    <div>

    <Counter2/>
    <UseStateCount2 />
    <UseStateObject2 />

      {/* <Event />
      <Counter /> */}
      <UseStateCounter />
      <UseStateObject />
    </div>
  )
}
export default App
