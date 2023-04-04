import "./Header.css"
import ozy from "../../assets/images/OZY13.jpeg"

const Header = () => {
  return (
    <div className="header"> 
      <img src={ozy} alt="" style={{width:"150px"}} />
    </div>
  )
}

export default Header