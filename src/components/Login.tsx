import { useState } from "react"
import Forget from "./Forget"
import useLogin from "../utils/useLogin"


const Login = () => {
    const [show, setShow] = useState(false)
    
    const {isLoading,setEmail,setPassword, login} = useLogin()

    const onSubmit = (e:any) => {
        e.preventDefault()
        login()
    }

  return (
    <>
    {
        !show && <div className="h-screen bg-black pt-36">
        <div className="mx-auto rounded-lg md:w-[420px] flex flex-col items-center p-6 gap-6 ">
            <h2 className="text-2xl font-bold text-primary">Login</h2>
            <div className="flex flex-col gap-2">
            <label className="font-semibold text-secondary" htmlFor="">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" className="w-full p-2 border-2 border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
            <label className="font-semibold text-secondary" htmlFor="">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" className="w-full p-2 border-2 border-gray-300 rounded-md" />
            <span onClick={()=>setShow(true)} className="w-full text-sm cursor-pointer text-end">Forget Password</span>
            </div>
            {
                isLoading?<div>Loading</div>:
                <button onClick={onSubmit} className="p-2 border-2 border-gray-300 rounded-md w-max text-primary hover:text-white hover:bg-purple-200">Login</button>
            }
        </div>
    </div>
    }
    {
        show && <Forget setShow={setShow} />
    }
    </>
  )
}

export default Login