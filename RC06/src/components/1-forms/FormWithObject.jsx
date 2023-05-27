import { useState } from "react"


const FormWithObject = () => {

// const [username, setUsername] = useState("")
// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")

const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
  address:""
})
const {username, email, password, address} = formData

// const handleUsername = (e) => {
//   setUsername(e.target.value)
// }
// const handleEmail = (e) => {
//   setEmail(e.target.value)
// }

const handleFormData = (e) => {
  console.log(e.target.value);
  setFormData({...formData, [e.target.id]: e.target.value})
}


const handleSubmit = (e) => {
  e.preventDefault()
  alert(`
  username: ${username}
  email: ${email}
  password: ${password}
  `)
  // setEmail("")
  // setPassword("")
  // setUsername("")
}
  return (
    
        <form onSubmit={handleSubmit}>
            <h2 className="text-danger">Form With Object</h2>

          <div className="mb-3">
          <label htmlFor="username" className="form-label">Username: <span className="text-primary">{username}</span></label>
          <input type="text" className="form-control" id="username" onChange={handleFormData} value={username}/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address: <span className="text-primary">{email}</span></label>
          <input type="email" className="form-control" id="email" onChange={handleFormData}/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" required onChange={handleFormData} />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input type="text" className="form-control" id="address" onChange={handleFormData} value={address} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    
  )
}

export default FormWithObject