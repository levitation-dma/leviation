import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "./slices/userSlice";
interface ILogin {
    email: string;
    password: string;
}

const useLogin = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');

    const login = async () => {
        try{
            setIsLoading(true);
            const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                    },
                body: JSON.stringify({
                email,
                password
                 })
                    });
            const data = await response.json();
            if(data){
                dispatch(setToken(data.authToken));
                setIsLogin(true);
            // }
            }
                }
            catch(err){
            setError('Something went wrong')
        }
        finally{
            setIsLoading(false);
        }

    }


    return {isLogin,isLoading,error,login,setEmail,setPassword};
}


export default useLogin;