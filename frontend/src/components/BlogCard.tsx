import { Link } from "react-router-dom";


interface BlogCardProps {
   
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id:string;
}

export const BlogCard = ({ authorName, title, content, publishedDate,id }: BlogCardProps) => {
    return (<><Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 pb-4 p-4  w-screen max-w-screen-md cursor-pointer">
            <div className="flex text-sm">
                <Avatar  name={authorName} size={"small"} />
                <div className="font-thin pl-2 flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2 text-sm">
                    <Circle/>
                </div>
                <div className="pl-2 font-thin text-slate-400 flex justify-center flex-col">
                    {publishedDate}
                    </div>
                
            </div>
            <div className="font-semibold text-xl">
                {title}
            </div>
            <div className="font-thin text-md">
                {content.length > 100 ? content.slice(0, 100) + "..." : content}
            </div>
            <div className="text-xs font-thin text-slate-400 pt-2">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
            {/* <div className="bg-slate-200 h-1 w-full"></div> */}
        </div>


        </Link>

    </>)
}
function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500"></div>
}

export function Avatar({ name,size="small" }: { name: string, size?:"small"|"big" }) {
    return (
        <div className={`relative inline-flex items-center justify-center ${size==="small"? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600`}>
            <span className={`${size==="small"?"text-xs":"text-2xl"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
    )
}