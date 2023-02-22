import { useState } from "react"

const UseStateObject2 = () => {

  const [person, setPerson] = useState({
    name: "ahmet",
    surname: "can",
    salary: 10000
  })

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

  const handleSalaryInc = () => {
    setPerson({...person , salary: person.salary + 500})
  }

  const handleSalaryDec = () => {
    setPerson({...person , salary: person.salary - 500})
  }




  return (

      <div className='container text-center mt-4'>
        <h2 className='text-danger'>Use State Object</h2>
        <h1 className='display-4'>Count:{person.salary}</h1>
        <button onClick={handleSalaryInc} className='btn btn-success'>INC</button>
        <button onClick={() => setCount(0)} className='btn btn-danger'>CLR</button>
        <button onClick={handleSalaryDec} className='btn btn-warning'>DEC</button>
        {/* <button onClick={(() => setCount(count -1))} className='btn btn-warning'>DEC</button> */}


        <br /><br /><hr /><br /><br />
      </div> 
  )
}
export default UseStateObject2