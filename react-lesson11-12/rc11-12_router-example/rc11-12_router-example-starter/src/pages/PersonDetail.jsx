import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const PersonDetail = () => {

  const {state : person} = useLocation()
  const navigate = useNavigate()
  const {id} = useParams()
  
  console.log(person);
  console.log(id);

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

export default PersonDetail