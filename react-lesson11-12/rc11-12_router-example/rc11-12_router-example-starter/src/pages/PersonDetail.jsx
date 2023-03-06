import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "./NotFound";

const PersonDetail = () => {


  // const {state : person} = useLocation()
  const navigate = useNavigate()
  const {id} = useParams()
  const [person, setPerson] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)


  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if(!res.ok){
          setError(true)
          setLoading(false)
          throw new Error("can not be found")
        }
      
      return res.json()
    })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);
  
  console.log(person);
  console.log(id);

  if (error) {
    return (
     <NotFound/>
    )
  }
  else if(loading){
    return(
    <h1>loading...</h1>
    )
  }
  else{
    return (
    <div className="container text-center">
    <h3>
      {person?.first_name} {person?.last_name}
    </h3>
    <img className="rounded" src={person?.avatar} alt="" />
    <p>{person?.email}</p>
    <div>
      <button
        onClick={() => navigate("/")}
        className="btn btn-success me-2"
      >
        Go Home
      </button>
      <button onClick={() => navigate(-1)} className="btn btn-warning">
        Go Back
      </button>
    </div>
  </div>
  )
}

  
}

export default PersonDetail