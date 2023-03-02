import "./Nav.styled"
import { Link } from "react-router-dom";
import { Div } from "./Nav.styled";

const Nav = () => {
  return (
    <Div>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
    </Div>
  )
}

export default Nav