

const Events = () => {

    const handleClick = () => {
        alert("clicked")
    }

    const handleClear = (msg) => {
        window.confirm(msg)
    }

    const handleChange = (e) => {
        console.log(e.target);
    }

  return (
    <div className="container text-center mt-4">
        <button onClick={() => handleClick()} className="btn btn-success">Click</button>

        <button  onClick={() => handleClear("you want this?")} className="btn btn-danger">Clear</button>

        <button onClick={(e) => handleChange(e)} className="btn btn-warning" >Change</button>
    </div>
  )
}

export default Events