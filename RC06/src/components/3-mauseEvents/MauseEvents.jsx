import { useState } from 'react'

const MauseEvents = () => {
    const [visible, setVisible] = useState(false)
    // let visible = false
    const [toggle, setToggle] = useState(false)

    const handleDoubleClick = (e) => {
        setToggle(!toggle)
        toggle
        ? (e.target.className = "bg-success text-light w-50 p-4 mt-4")
        : (e.target.className = "bg-danger text-light w-50 p-4 mt-4")
    }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
    <h2 className="text-danger">MOUSE EVENTS</h2>

    <div
      id="todo-1"
      className="bg-success text-light w-50 p-4"
      onMouseEnter={() => {setVisible(true)}}
      onMouseOut={() => {setVisible(false)}}>
      todo item 1
    </div>

     {visible && <div>I SEE YOU</div>}

    <div
      id="todo-2"
      className="bg-success text-light w-50 p-4 mt-4"
      onDoubleClick = {handleDoubleClick}>
      todo item 2
    </div>

    <div
      id="todo-3"
      className="bg-success text-light w-50 p-4 my-4">
      todo item 3
    </div>

    <p>X and Y</p>
    <p className="text-danger fw-bold">
      {"X"} {"Y"}
    </p>
  </div>
  )
}

export default MauseEvents