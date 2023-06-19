import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../utils/slices/stepSlice";

interface Props {
  setFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Singlefile = ({setFile}:Props) => {
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files?.[0].type === "image/png" || event.target.files?.[0].type === "application/pdf"){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files?.[0]);
      reader.onload = () => {
        setFile(reader.result as string)
      }
      
    }
    else{
        alert("Only PNG and PDF files are allowed");
        return;
    }
  };

 

  const handleNext = () => {
   
      dispatch(setStep(4));
  }

 

  return (
    <div className="flex flex-col">
      <label htmlFor="file-upload" className="mb-2 font-bold">
        Upload File
      </label>
      <p className="mb-2 text-sm text-gray-500">
        Only PNG and PDF files are allowed
      </p>
      <input
        id="file-upload"
        type="file"
        onChange={handleChange}
        className="p-2 mb-2 border rounded file-input-primary"
      />
      <button onClick={()=>handleNext()} className="self-center mt-4 btn-primary btn">Next</button>
    </div>
  );
};

export default Singlefile;