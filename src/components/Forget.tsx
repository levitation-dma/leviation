interface ForgetProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Forget = ({setShow}:ForgetProps) => {
  return (
    <div className="h-screen bg-black pt-36">
        <div className="mx-auto rounded-lg md:w-[420px] flex flex-col items-center p-6 gap-6 ">
            <h2 className="text-2xl font-bold text-primary">Recover</h2>
            <div className="flex flex-col gap-2">
            <label className="font-semibold text-secondary" htmlFor="">Email</label>
            <input type="text" className="w-full p-2 border-2 border-gray-300 rounded-md" />
            <span onClick={()=>setShow(false)} className="w-full text-sm cursor-pointer text-end">Login</span>
            </div>
            <button className="p-2 border-2 border-gray-300 rounded-md w-max text-primary hover:text-white hover:bg-purple-200">Send OTP</button>
        </div>
    </div>
  )
}

export default Forget