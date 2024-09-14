import { Link, useNavigate } from "react-router-dom"


export const LandingPage = () => {
    const navigate = useNavigate()
    function SigninPage(){
        navigate("/signin")
    }
    return (
        <div className="h-screenbg-slate-200 ">
            <div className=" h-20 border-b-2 flex justify-between">
                <div className="flex justify-center flex-col px-20 font-serif text-5xl font-semibold">
                     Medium 
                     </div>
                <div className=" flex justify-center flex-col px-20">
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-ms font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 hover:border-black-700" onClick={SigninPage}>Get started</button>
                </div>


            </ div>
        </div>
    )
}
