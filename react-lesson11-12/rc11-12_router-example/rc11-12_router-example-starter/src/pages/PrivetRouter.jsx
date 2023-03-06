import { Navigate, Outlet } from "react-router-dom"
import Login from "./Login"

const isSigned = true

const PrivetRouter = () => {
  return (
    <div>
        {isSigned ? <Outlet/> : <Navigate to= "/login" />}
    </div>
  )
}

export default PrivetRouter