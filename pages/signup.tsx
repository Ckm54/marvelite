import React, {useState} from "react"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password)
    } catch(err) {
      console.log(err)
    }

    setData({
      ...data,
      email: "",
      password: "",
    })
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