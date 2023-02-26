import { useState, useEffect } from "react"


const User2 = () => {

    const [user, setUser] = useState("")

    const getUser = () => {
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => setUser(data.results[0]))
    .catch((err) => console.log(err))
    }

    useEffect(() => {
        console.log("mounting");
        getUser()
    }, [])


    console.log(user);

  return (
    <div>
        <h1>{user?.name?.first} {user?.name?.last}</h1>
        <img className="rounded-circle" src={user?.picture?.large} alt="" />
        <h4>{user?.email}</h4>
        <h5>{user?.phone}</h5>
        <p>{user?.dob?.date}</p>

        <button onClick={getUser}>Get User</button>
    </div>
  )
}

export default User2