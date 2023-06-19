import { useState, ChangeEvent, useEffect } from "react";
import { Coordinates } from "../interface/stepProp";
import Location from "./Location";
import { useDispatch } from "react-redux";
import { setStep4} from "../utils/slices/addressSlice";
import { setStep } from "../utils/slices/stepSlice";
import useFormSubmit from "../utils/useformSubmit";

interface Props {
  file: string | undefined;
}

const Fileform = ({file}:Props) => {
  const {file2,success,setFile2,setFile1,formSubmit,isLoading} = useFormSubmit();
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useDispatch();
  const [location, setLocation] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files?.[0].type === "image/png" || event.target.files?.[0].type === "application/pdf"){
      if(file2.length>5){
        alert("You can only upload up to 5 files");
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files?.[0]);
      reader.onload = () => {
        setFile2([...file2,reader.result as string])
      }
      setFiles([...files,event.target.files?.[0]]);
    }
  };

  const handleDelete = (index: number) => {
    const newFiles = [...file2];
    const newFiles2 = [...files];
    newFiles.splice(index, 1);
    newFiles2.splice(index, 1);
    setFile2(newFiles);
    setFiles(newFiles2)
  };

  useEffect(() => {
    if (location.latitude !== null && location.longitude !== null) {
      dispatch(setStep4({
        location: `${location.latitude},${location.longitude}`
      }));
    }
  }, [location,dispatch]);

  useEffect(() => {
    setFile1(file);
  }, [file]);

  useEffect(() => {
    if(success){
      dispatch(setStep(5));
    }
  }, [success]);

  const handleNext = (e:any) => {
    e.preventDefault();
    formSubmit();
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="file-upload" className="mb-2 font-bold">
        Upload Files (Upto 5 files)
      </label>
      <p className="mb-2 text-sm text-gray-500">
        Only PNG and PDF files are allowed
      </p>
      <input
        id="file-upload"
        type="file"
        multiple
        onChange={handleChange}
        className="p-2 mb-2 border rounded file-input-primary"
      />
      {files.length > 0 && (
        <ul className="list-disc list-inside">
          {files.map((file, index) => (
            <li key={index}>
              {file.name}{" "}
              <button className="text-red-500" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <Location location={location} setLocation={setLocation} />
      {
        isLoading?
        <div className="self-center mt-4 text-white bg-primary btn">Creating</div>:
        <button onClick={(e)=>{
          handleNext(e);
        }} className="self-center mt-4 btn-primary btn">Submit</button>
      }
    </div>
  );
};

export default Fileform;