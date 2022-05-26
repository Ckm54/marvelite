import React, {useState} from "react"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
  const { user, signup } = useAuth()
  
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
    <div className="flex py-[20%] md:py-[10%] items-center justify-center bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center text-titleRed">Signup</h1>
        <div className="mt-4">
          <form onSubmit={handleSignup}>
            <label className="block">Email</label>
            <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" type="email" name="email" required value={data.email} onChange={(e: any) => setData({...data, email: e.target.value})} />

            <label className="block">Password</label>
            <input className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" type="password" name="password" required value={data.password} onChange={(e: any) => setData({...data, password: e.target.value})} />

            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700" type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup