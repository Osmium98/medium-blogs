import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { CreateBlogInput } from "@subhammallik/medium-common"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [blogInput, setBlogInputs] = useState<CreateBlogInput>({
        title: "",
        content: ""
    });
    const navigate = useNavigate();
    return (
        <div>
            <Appbar />


            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full">


                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                    <textarea onChange={(e) => {
                        setBlogInputs(c => ({
                            ...c,
                            title: e.target.value
                        }))
                    }} className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Title"></textarea>

                    <TextEditor onChange={(e) => {
                        setBlogInputs(c => ({
                            ...c,
                            content: e.target.value
                        }))
                    }} />
                    <button onClick={async () => {
                       const response= await axios.post(`${BACKEND_URL}/api/v1/blog`,blogInput, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })
                       navigate(`/blog/${response.data.id}`)
                    }} type="submit" className=" mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    )

}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (

        <form>
            <div className="w-full mb-4">
                <div className="flex items-center justify-between border">

                    <div className="py-2 bg-white rounded-b-lg w-full">
                        <label className="sr-only">Publish post</label>
                        <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 " placeholder="Write an article..." required ></textarea>
                    </div>
                </div>

            </div>
        </form>


    )
}