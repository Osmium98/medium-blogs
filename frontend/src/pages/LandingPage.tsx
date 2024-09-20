import { useNavigate } from "react-router-dom"


export const LandingPage = () => {
    const navigate = useNavigate()
    function SigninPage(){
        navigate("/signin")
    }
    return (
        <div className="min-h-screen  flex flex-col">
            <div className="h-20 border-b-2 flex justify-between border-slate-200 w-screen md:px-20">
                <div className="flex items-center font-serif text-3xl md:text-5xl font-semibold">
                     Medium 
                     </div>
                <div className=" flex items-center">
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-ms font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 hover:border-black-700" onClick={SigninPage}>Get started</button>
                </div>


            </ div>
        </div>
    )
}
