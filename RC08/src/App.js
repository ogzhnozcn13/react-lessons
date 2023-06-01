// import { useState } from 'react';
import './App.css';
import User from './components/User';
// import LifeCycleMethods from './components/LifeCycle';
// import Timer from './components/Timer';
// import UseEffectHook from './components/useEffectHook';

function App() {

  // const [toggle, setToggle] = useState(true)

  // const handleClick = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div className='container text-center mt-4'>
      {/* <button onClick={handleClick} className='btn btn-danger'>{toggle ? "HIDE" : "SHOW"}</button>
      {toggle && <LifeCycleMethods/>} */}
      {/* <Timer/> */}
      {/* <button onClick={handleClick} className='btn btn-danger'>{toggle ? "HIDE" : "SHOW"}</button>
      {toggle && <UseEffectHook/>} */}
      <User/>
    </div>
  );
}

export default App;
