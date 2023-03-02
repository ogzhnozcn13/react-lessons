import "./Header.css";
import Nav from "../nav/Nav";

const Header = () => {
  return (
    <div className="header">
        <div className="headerRight">
            <h3>
                <span className="ozy">Ozy</span>
                Frontend Developer
            </h3>
        </div>
        <Nav/>
    </div>
  )
}

export default Header
