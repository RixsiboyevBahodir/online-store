import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { CgArrowRight } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await fetch("https://68a97460b115e67576eb31a9.mockapi.io/user")
      const users = await res.json()
      const user = users.find(user => user.login == login && user.password == password)

      if (user) {
        localStorage.setItem("LoginUser", JSON.stringify(user))
        navigate("/home")
      } else {
        setError("Login yoki password xato!")
      }

    } catch (error) {
      console.log("ERROR")
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-2xl rounded-2xl px-10 py-10 w-full max-w-md flex flex-col items-center gap-6 border border-gray-100">
        <img src={logo} alt="Logo" className="w-40 h-20 mb-2" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-700">Login</p>
            <input
              value={login}
              onChange={e => setLogin(e.target.value)}
              type="text"
              placeholder="youremail@gmail.com"
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 text-gray-800 bg-gray-50 transition-all outline-none"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-700">Password</p>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 text-gray-800 bg-gray-50 transition-all outline-none"
              autoComplete="current-password"
            />
          </div>
          <button onClick={handleLogin} className="mt-2 flex items-center justify-center gap-2 cursor-pointer bg-[#6233d9] text-white p-2 rounded-md shadow-xl/30 active:opacity-50 transition-all">Login <CgArrowRight className="text-lg" /></button>
          {error && <p className='text-red-600 text-center'>{error}</p>}
        </div>
      </div>
    </div>
  );
}
