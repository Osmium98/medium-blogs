import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { SingleBlogSkeleton } from "../components/BlogSkeleton";
import { Spinner } from "../components/Spinner";

export const Blog=()=>{
    const {id} =useParams();
    const {blog,loading} = useBlog({
        id: id || ""
    });
    
    if(loading){
        return (
            <div>
<Spinner />
{/* <SingleBlogSkeleton/> */}
            </div>
        )
    }
    return (<>
    <div>
        <FullBlog blog = {blog}/>
    </div>
    </>)
}