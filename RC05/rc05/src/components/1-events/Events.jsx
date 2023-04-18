

const Events = () => {

    let message = "Frontend"
    
    const handleClick = () => {
        alert("clicked")
    }

    const handleClear = (msg) => {
        window.confirm(msg)
    }

    const handleChange = (e) => {
        message = "Backend";
        console.log(message);
        console.log(e.target);
    }

  return (
    <div className="container text-center mt-4">

        <h1>{message}</h1>

        <button onClick={() => handleClick()} className="btn btn-success">Click</button>

        <button onClick={() => handleClear("you want this?")} className="btn btn-danger">Clear</button>

        <button onClick={(e) => handleChange(e)} className="btn btn-warning" >Change</button>
    </div>
  )
}

export default Events