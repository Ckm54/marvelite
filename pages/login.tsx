import { useAuth } from "context/AuthContext";
import { useRouter } from "node_modules/next/router";
import React, {useState} from "react";

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log("logged in: ", user)
      try {
        await login(data.email, data.password)
        router.push('/home')
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
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" name="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

        <label>Password</label>
        <input type="password" name="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;