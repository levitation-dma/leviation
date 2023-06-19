import PhoneInput from "react-phone-number-input/input";
import FlagSelect from "react-flags-select";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setStep1 } from "../utils/slices/addressSlice";
import { setStep } from "../utils/slices/stepSlice";




const Basicform = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("IN"); // Setting India as default
    const [value, setValue] = useState("");
    const [id, setId] = useState("");
    const [mail, setMail] = useState("");
    

  const handleSelect = (countryCode:string) => {
    console.log(countryCode);
    setSelected(countryCode);
  };


  function validateInputs() {
    // validate name
    if (id.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
    // validate email
    if (!/^\S+@\S+\.\S+$/.test(mail)) {
      alert("Please enter a valid email address.");
      return false;
    }
    // validate phone
    if (!/^\+[1-9]\d{1,14}$/.test(value)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    return true;
  }

  const handleNext = () => {
    if(validateInputs()){
      dispatch(setStep1({name:id,email:mail,phone:value}));
      dispatch(setStep(2));
    }
  };


  return (
    <div className="flex flex-col">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" onChange={(e)=>setId(e.target.value)} id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="last_name" onChange={(e)=>setMail(e.target.value)} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
      </div>
      <div className="flex flex-col mt-2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No.</label>
      <div className="flex">
      <FlagSelect
        selected={selected}
        onSelect={handleSelect}
        className="mt-1 mr-2 text-gray-600 rounded-lg"
      />

      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onChange={(value) => setValue(value!)}
        country={"IN"}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      </div>
    </div>

      <button onClick={()=>handleNext()} className="self-center mt-4 btn-primary btn">Next</button>
        
</div>
  )
}

export default Basicform