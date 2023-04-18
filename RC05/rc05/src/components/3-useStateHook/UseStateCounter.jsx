import { useState } from "react"



const UseStateCounter = () => {

  const [count, setCount] = useState(0)

  const [person, setPerson] = useState({
    name: "ali",
    surname: "ak",
    age: 33
  })

  const incAge = () => {
    setPerson({
      ...person,
      age: person.age + 1
    })
  }

  const inc = () => {
    setCount(count + 1)
  }

  const clear = () => {
    setCount(0)
  }

  // const dec = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   }
  //   else{
  //     setCount(0)
  //   }
  // }
  const dec = () => {
    count > 0 ? setCount(count -1) : setCount(0)
  }


  return (
    <div>
      <section>
        <h1>Use State Hook</h1>
        <h2>Count:{count}</h2>

        <button onClick={() => inc()} className="btn btn-success">Increment</button>

        <button onClick={clear} className="btn btn-danger">Clear</button>

        <button onClick={dec} className="btn btn-warning" >Decrement</button>
      </section>

      <section>
        <h1>use state object</h1>
        <h2>{person.name}</h2>
        <h3>{person.surname}</h3>
        <h4>{person.age}</h4>
        <button className="btn btn-info" onClick={incAge}>INC AGE</button>
      </section>
    </div>
  )
}

export default UseStateCounter