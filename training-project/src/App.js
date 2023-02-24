import './App.css';
import data from './data'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      {data.map((item) => <Main {...item}/>)}
      <Footer/>

    </div>
  );
}

export default App;
