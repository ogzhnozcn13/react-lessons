import './App.css';
import Card from './components/card/Card';
import data from "./helpers/data"

function App() {

  console.log(data);

  return (
    <>
      {data.map(({id, language, img, btnName}) => (
      <Card key={id}
            lang={language}
            img={img}
            btn={btnName}/>))}
      
    </>
  );
}

export default App;
