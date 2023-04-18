import { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        Count: 0,
      }
    }

    increment(){
        this.setState()
    }

  render() {
    return (
      <div>
        <h1>C.C.</h1>
        <h2>Count:{this.state.Count}</h2>

        <button onClick={increment} className="btn btn-success">Click</button>

        <button  className="btn btn-danger">Clear</button>

        <button  className="btn btn-warning" >Change</button>
      </div>
    )
  }
}

export default Counter