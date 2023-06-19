import Addressform from "./components/Addressform"
import Basicform from "./components/Basicform"
import Fileform from "./components/Fileform"
import Singlefile from "./components/Singlefile"
import {selectStep} from "./utils/slices/stepSlice"
import {useSelector} from "react-redux"
import {selectToken} from "./utils/slices/userSlice"
import Login from "./components/Login"
import { useState } from "react"


function App() {
  const token = useSelector(selectToken);
  const step = useSelector(selectStep);
  const [file, setFile] = useState<string>();
  
  
  
 if(!token){
  return(
    <Login/>
   
  )
 }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-full max-w-lg mx-auto">
      <ul className="my-6 steps">
        <li className="step step-primary">Basic Details</li>
        <li className={`step ${step>=2?'step-primary':''}`}>Address</li>
        <li className={`step ${step>=3?'step-primary':''}`}>File Upload</li>
        <li className={`step ${step>=4?'step-primary':''}`}>Files & Location</li>
        <li className={`step ${step>=5?'step-primary':''}`}>Finish</li>
      </ul>
   
      <div className="px-4 mt-10">
        {
          step === 1 && <Basicform/>
        }
        {
          step === 2 && <Addressform/>
        }
        {
          step === 3 && <Singlefile setFile={setFile} />
        }
        {
          step === 4 && <Fileform file={file} />
        }
        {
          step === 5 && <div className="text-2xl font-bold text-center text-gray-700">Thank You! Form Has Been Submitted</div>
        }
      </div>
      
      </div>
     
  

    </div>
  )
}

export default App
