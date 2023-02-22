import React, { Component } from 'react'




export class Counter2 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
    }

    this.increment = this.increment.bind(this)
  }

  

  increment() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  // clear() {
  //   this.setState({
  //     count: 0,
  //   })
  // }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }


  render() {
    return (
      <div className='container text-center mt-4'>
        <h2 className='text-danger'>Class Components</h2>
        <h1 className='display-4'>Count:{this.state.count}</h1>
        <button onClick={this.increment} className='btn btn-success'>INC</button>
        <button onClick={() => this.setState({ count:0 })} className='btn btn-danger'>CLR</button>
        <button onClick={this.decrement} className='btn btn-warning'>DEC</button>


        <br /><br /><hr /><br /><br />
      </div>
    )
  }
}

export default Counter2