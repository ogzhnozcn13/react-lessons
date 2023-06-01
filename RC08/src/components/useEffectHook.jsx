import React, { useEffect, useState } from "react";

const useEffectHook = () => {

  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log("componentDidMount");
  //   setTimeout(() => alert(`data fetched`), 1000)
  //   return () => {
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log("componentDidMount + componentDidUpdate");
  //   setTimeout(() => alert(`data fetched`), 1000)
  //   return () => {
  //   }
  // }, [count])

  const fetchData = () => {
    console.log(`data fetching`);
  }

  useEffect(() => {
    
    const timer = setInterval(() => {
      fetchData()
    }, 1000)
    return () => {
      clearInterval(timer)
      console.log("unmounting");
    }
  }, [count])
  
  const handleInc = () => {
    setCount(count + 1)
  }

  console.log("rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">LIFECYCLE METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={handleInc}>
        INC
      </button>
    </div>
  );
};

export default useEffectHook;
