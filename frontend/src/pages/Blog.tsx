import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";

export const Blog=()=>{
    const {id} =useParams();
    const {blog,loading} = useBlog({
        id: id || ""
    });
    
    if(loading){
        return (
            <div>
loading.....
            </div>
        )
    }
    return (<>
    <div>
        <FullBlog blog = {blog}/>
    </div>
    </>)
}