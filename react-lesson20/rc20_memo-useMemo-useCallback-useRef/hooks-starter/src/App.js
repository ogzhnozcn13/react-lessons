import { useRef, useState } from "react";
import ClearButton from "./components/ClearButton";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";


function App() {
  const [count, setCount] = useState(0)

  const taxData = {taxRate:0.18, ship:25};

  const taxData2 = useRef({taxRate:0.18, ship:25})
  console.log(taxData2);

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button className='btn btn-danger d-flex mx-auto' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <hr />
      <HeaderMemo count={count}/>
      <br />
      <hr />
      <TaxComp taxData={taxData}/>
      <br />
      <hr />
      <UseRefComp/>
      <br />
      <hr />
      <ClearButton/>
    </div>
  );
}

export default App;
