import { useState } from "react"

const UseStateCount2 = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    if(count>0) {
      setCount(count - 1)
    } else{
      alert("dont click!.. :)")
    }
  }


  return (

      <div className='container text-center mt-4'>
        <h2 className='text-danger'>Use State Counter</h2>
        <h1 className='display-4'>Count:{count}</h1>
        <button onClick={increment} className='btn btn-success'>INC</button>
        <button onClick={() => setCount(0)} className='btn btn-danger'>CLR</button>
        <button onClick={decrement} className='btn btn-warning'>DEC</button>
        {/* <button onClick={(() => setCount(count -1))} className='btn btn-warning'>DEC</button> */}


        <br /><br /><hr /><br /><br />
      </div> 
  )
}

export default UseStateCount2