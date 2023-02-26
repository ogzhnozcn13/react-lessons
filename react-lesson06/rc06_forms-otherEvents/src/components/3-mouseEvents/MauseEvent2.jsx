import { useState } from "react";

const MauseEvent2 = () => {

    // let visible = false
    // 

    const [visible, setVisible] = useState(false)
    const [toggle, setToggle] = useState(false)
  

    const handleDoubleClick = (e)=> {
      setToggle(!toggle)
      toggle ? (e.target.className = "bg-danger text-light w-50 p-4 my-4") : (e.target.className = "bg-success text-light w-50 p-4 my-4")
    }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1" className="bg-success text-light w-50 p-4"
        onMouseOver={ () => setVisible(true)}
        onMouseOut= { () => setVisible(false)}>todo item 1
      </div>

      <div>
        {visible && <div>Mouse Events</div>}
      </div>

      <div
        id="todo-2" className="bg-success text-light w-50 p-4 mt-4" onDoubleClick={handleDoubleClick}>todo item 2
      </div>

      <div
        id="todo-3" className="bg-success text-light w-50 p-4 my-4">todo item 3
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">
        {"X"} {"Y"}
      </p>


      <br /><br /><br /><hr /><br />
    </div>
  )
}

export default MauseEvent2