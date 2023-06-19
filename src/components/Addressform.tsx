import { useState } from "react"
import { useDispatch } from "react-redux"
import { setStep2 } from "../utils/slices/addressSlice"
import { setStep } from "../utils/slices/stepSlice";


const Addressform = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        address1: "",
        address2: "",
        city: "",
        State: "",
        zip: "",
        country:""
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleNext = () => {
        if(data.address1!=="" && data.city!=="" && data.State!=="" && data.zip!==""){
            dispatch(setStep2({
                address1: data.address1,
                address2: data.address2,
                city: data.city,
                State: data.State,
                zip: data.zip,
                country:data.country
            }));
            dispatch(setStep(3));
        }
        else{
            alert("Please fill all the fields");
        }
    }


  return (
    <div className="flex flex-col">
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Lane 1</label>
            <input onChange={handleChange} name="address1"  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required/>
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Lane 2</label>
            <input onChange={handleChange} name="address2" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input onChange={handleChange} name="city" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Delhi" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
            <input onChange={handleChange} name="State" type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Haryana" required/>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
            <input onChange={handleChange} name="zip" type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="433331" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input onChange={handleChange} name="country" type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="India" required/>
        </div>
      </div>
      <button onClick={()=>handleNext()} className="self-center mt-4 btn-primary btn">Next</button>
        
</div>
  )
}

export default Addressform