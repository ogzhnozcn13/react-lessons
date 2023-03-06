import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import { Routes, Route } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import PrivetRouter from "./pages/PrivetRouter";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/people" element={<People />}/> 
        <Route path="/people/:id" element={<PersonDetail />}/>

      <Route path="" element= {<PrivetRouter/>}>
        <Route path="/contact" element={<Contact />}/> 
      </Route>
        

        <Route path="/paths" element={<Paths />}>
          <Route path="fullstack" element= {<FullStack/>}/>
          <Route path="" element= {<Aws/> }/>
        </Route>

        <Route path="/login" element={<Login />}/> 
        <Route path="*" element={<NotFound />}/> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;
