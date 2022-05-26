import React, {useState} from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(data);
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