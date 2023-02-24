import { useState } from "react"


const Form2 = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value)
    }


    const handleSubmit = (e) => {
      e.preventDefault()
      alert(`
        username: ${username},
        email: ${email},
        password: ${password}
      `)
    }



  return (
    <form onSubmit={handleSubmit}>
        <h2 className="display-6 text-danger">Froms</h2>

    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username: <span>{username}</span></label>
      <input type="text" className="form-control" id="username" aria-describedby="emailHelp" onChange={handleUsername} required/>
    </div>

    <div className="mb-3">
      <label htmlFor="eemail" className="form-label">Email address: <span>{email}</span></label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} required/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password: {password}</label>
      <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} required/>
    </div>

    <button type="submit" className="btn btn-danger">Submit</button>
  </form>
  )
}

export default Form2