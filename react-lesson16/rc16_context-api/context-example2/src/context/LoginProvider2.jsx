import { createContext, useContext, useState } from "react";
import { useLoginContext } from "./LoginProvider";


export const LoginContext = createContext()


const LoginProvider2 = ({children}) => {

    const [user, setUser] = useState({ email: "", password: "" })
    const values = {user, setUser}

  return (
    <LoginContext.Provider value ={values}>
        {children}
    </LoginContext.Provider>
  )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export default LoginProvider2