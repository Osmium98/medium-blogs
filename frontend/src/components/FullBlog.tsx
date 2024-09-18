import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"



export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 pt-12 max-w-screen-3xl ">
                    <div className="col-span-8 p-6">

                        <div className="text-5xl font-extrabold break-words">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-4">
                            Post on 2nd December 2023
                        </div>
                        <div className="pt-2 text-slate-700 break-words">
                            {blog.content}
                        </div>

                    </div>
                    {/* Author Section */}
                    <div className="col-span-4 p-6">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div>

                        <div className="flex w-full items-center gap-4">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <Avatar name={blog.author.name} size="big" />
                            </div>
                            {/* Author Name */}
                            <div>
                                <div className="font-bold text-2xl">
                                    {blog.author.name}
                                </div>
                                <div className="pt-2 text-slate-500 break-words">
                                    Random catch phrase bout the utor's bility to grab the user's attention
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}