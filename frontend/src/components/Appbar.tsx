import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

interface AppbarProps {
    showButton?: boolean; // Optional prop to control button visibility
}

export const Appbar = ({showButton=true}:AppbarProps) => {
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link className="flex justify-center flex-col cursor-pointer font-serif text-3xl font-semibold" to="/blogs">
                Medium
            </Link>

            <div className="flex">
               {showButton && (<Link to={"/publish"}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
                </Link>)}
                <Avatar size={"big"} name="Subham" />
            </div>
        </div>
    )
} 