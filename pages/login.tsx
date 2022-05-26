import { useAuth } from "context/AuthContext";
import { useRouter } from "node_modules/next/router";
import React, {useState} from "react";

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [err, setErr] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e: any) => {
    e.preventDefault();

    
      try {
        await login(data.email, data.password)
        router.push('/home')
      } catch(err) {
        console.log("error")
      }
  
      setData({
        ...data,
        email: "",
        password: "",
      })

  }

  return (
    <div className="flex py-[20%] md:py-[10%] items-center justify-center bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center text-titlered">Login</h1>
        <div className="mt-4">
          <form onSubmit={handleLogin}>
            <label className="block">Email</label>
            <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" type="email" name="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

            <label className="block">Password</label>
            <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" type="password" name="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700" type="submit">Login</button>
            </div>
          </form>
          {err ? <p className="my-4 text-red-400 text-normal">Error</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Login;