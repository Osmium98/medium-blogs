import { Avatar } from "./BlogCard"


export const Appbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <div className="flex justify-center flex-col">
                Medium
            </div>
            <div>
                Blogs
            <Avatar size={"big"} name="Subham" />
            </div>
        </div>
    )
}