import React, {useState} from "react"

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = (e: any) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input type="email" name="email" required value={data.email} onChange={(e: any) => setData({...data, email: e.target.value})} />

        <label>Password</label>
        <input type="password" name="password" required value={data.password} onChange={(e: any) => setData({...data, password: e.target.value})} />

        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup