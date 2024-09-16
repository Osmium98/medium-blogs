import { SigninInput, SignupInput } from "@subhammallik/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { LabelledInput } from "./LabelledInput";
import { AuthHeader } from "./Authheader";


export const SigninAuth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInput, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
        
    })
    const navigate = useNavigate();
    
    async function sendRequest(){
        try {
            
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInput)
            const jwt = response.data;
            const jwt_token = "Bearer "+ jwt.jwt;
            localStorage.setItem("token",jwt_token);
            navigate("/blogs")
            console.log(jwt)

        } catch (error) {
            //alert the user 
            console.log(error);
            alert("An error occurred during the request.");
        }
    }
    
    return (
        <div className="h-screen flex justify-center flex-col ">
            <div className="flex justify-center">
                <div className="p-5 border-2 rounded-2xl shadow-lg">
                    <AuthHeader type={type} />
                    <div className="pt-2">
                        <LabelledInput label="EmailId" placeholder="subhammallik223@gmail.com...." onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                        
                        <LabelledInput label="Password" type="password" placeholder="Subham@123...." onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }}  />
                        
                        <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup"? "Sign Up":"Sign In"}</button>

                    </div>
                </div>
            </div>

        </div>
    )
}
