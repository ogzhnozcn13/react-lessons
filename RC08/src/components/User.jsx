import React, { useEffect, useState } from "react";

const User = () => {
  // let user = ""

  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
    console.log("mounting");
    return () => {};
  }, []);

  console.log("rendering");
  console.log(user);

  return (
    <>
      <div className="bg-warning p-3">
        <h1>
          {user?.name?.first} {user?.name?.last}
        </h1>
        <img className="rounded-circle" src={user?.picture?.large} alt="" />
        <h4>{user?.email}</h4>
        <h5>{user?.phone}</h5>
        {/* <p>{user?.dob?.date}</p> */}
        <p>{new Date(user?.dob?.date).toLocaleDateString()}</p>

        <button className="btn btn-success" onClick={getUser}>
          Get User
        </button>
      </div>
    </>
  );
};

export default User;
