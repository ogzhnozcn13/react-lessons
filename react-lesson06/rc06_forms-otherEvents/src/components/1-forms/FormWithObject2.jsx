import { useState } from "react"


const FormWithObject2 = () => {

    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:""
    })


    const {username, password, email} = formData


    const handleSubmit = (e) => {
      e.preventDefault()
      alert(`
        username: ${username},
        email: ${email},
        password: ${password}
      `)
    }

    const handleFormData = (e) => {
        setFormData({...formData, [a.target.id]: e.target.value})
    }



  return (
    <form onSubmit={handleSubmit}>
        <h2 className="display-6 text-danger">Form With Object</h2>

    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username: <span>{username}</span></label>
      <input type="text" className="form-control" id="username" aria-describedby="emailHelp" onChange={handleFormData} required/>
    </div>

    <div className="mb-3">
      <label htmlFor="eemail" className="form-label">Email address: <span>{email}</span></label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleFormData} required/>
    </div>
    
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password: {password}</label>
      <input type="password" className="form-control" id="password" onChange={handleFormData} required/>
    </div>

    <button type="submit" className="btn btn-danger">Submit</button>
  </form>
  )
}

export default FormWithObject2