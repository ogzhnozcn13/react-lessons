import { useState,useEffect } from "react"

const UseEffectHook2 = () => {

const [count, setCount] = useState(0)

// useEffect(() => {
//   console.log("componentdidmount");
//   setTimeout(() => alert ("data fetched"), 1000)
// }, [])

// useEffect(() => {
//   console.log("componentdidmount + componentdidupdate");
//   setTimeout(() => alert ("data fetched"), 1000)
// }, [count])

const fetchData = () => {
    console.log("data fetching");
}

useEffect(() => {
  const timer = setInterval(fetchData, 1000)

  return() => {
    clearInterval(timer)
  }
}, [count])


return (
    <div className="container text-center">
      <h1 className="text-danger">LIFECYCLE METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>


      <br /><br /><br /><hr /><br />
    </div>
  )
}

export default UseEffectHook2

