import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return (

        <div role="status" className="animate-pulse">
            <div className="border-b border-slate-200 pb-4 p-4  w-screen max-w-screen-md cursor-pointer">
                <div className="flex text-sm">
                    <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="flex justify-center flex-col pl-2 text-sm">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-400 flex justify-center flex-col">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>

                </div>
                <div className="font-semibold text-xl">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="font-thin text-md">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="text-xs font-thin text-slate-400 pt-2">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                {/* <div className="bg-slate-200 h-1 w-full"></div> */}
            </div>


            <span className="sr-only">Loading...</span>
        </div>


    )
}

export const SingleBlogSkeleton = () => {
    return (

        <div role="status" className="animate-pulse " >
            <div className="flex justify-center max-w-screen">
                <div className="grid grid-cols-12 px-10 pt-12 max-w-screen-3xl ">
                    <div className="col-span-8 p-6">

                        <div className="text-5xl font-extrabold break-words">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                        <div className="text-slate-500 pt-4">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                        <div className="pt-2 text-slate-700 break-words">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>

                    </div>
                    {/* Author Section */}
                    <div className="col-span-4 p-6">
                        <div className="text-slate-600 text-lg">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>

                        <div className="flex w-full items-center gap-4">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
                            </div>
                            {/* Author Name */}
                            <div>
                                <div className="font-bold text-2xl">
                                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                                </div>
                                <div className="pt-2 text-slate-500 break-words">
                                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            {/* <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div> */}
            <span className="sr-only">Loading...</span>
        </div>


    )
}