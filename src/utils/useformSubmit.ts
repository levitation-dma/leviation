import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAddress } from "./slices/addressSlice";


const useFormSubmit = () => {
    const address = useSelector(selectAddress);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [file1, setFile1] = useState<string>();
    const [file2, setFile2] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);
    
    const token ="eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.Bq_Nh481BgOLy8YrR48XKlqs-ziJNxaIjX8pHlHAwh1ZtO4uqXrEhwOTw0wtfaNiXJdzX9UEVR3PGiVQdohDY6D1FeajCeMS.cBQk_08mPo4p4JzQVdfD6w.4Efbaj5QCM-LJFAf0rYyFmEaYXOUESBmMrkd8pLBlkll7EdWuSCyxkud5VUiZTHLzsxvCdC3YVDYGUugwva1bPq3TUMaPoqrN5JaJQ6Oapwql0UaD4FNXlnsS_miMmdfNIcTACzjUWcCbFJa69EX9slBYRuCJ9yPqer4B9YMDe8.u-CLy0HM6efWquXkQKOg2j5lnpN5UlrQ60UGIScnqbg"

    

   


    const formSubmit = async () => {
        try{
           
            setIsLoading(true);
            const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form", {
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
                

                    },
                body: JSON.stringify({
                    name: address.name,
                    email: address.email,
                    phone_number: address.phone,
                    address_1: address.address1,
                    address_2 : address.address2,
                    city: address.city,
                    state: address.State,
                    pincode: address.zip,
                    country: address.country,
                    single_file: file1,
                    multi_file: file2,
                    geolocation: address.location
                })
                    });
            const data = await response.json();
            if(data){
                setIsLoading(false);
                setSuccess(true);
                
            }
                }
            catch(err){
            setError('Something went wrong')
        }
        finally{
            setIsLoading(false);
        }

    }

    return {isLoading,error,formSubmit,setFile1,setFile2,file2,success};
};


export default useFormSubmit;