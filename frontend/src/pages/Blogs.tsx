import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks";


export const Blogs = () => {
    const {loading,blogs} = useBlogs();
    
    if(loading){
        return (
            <div>
                loading....
            </div>
        )
    }
    return (
        <div>
            <Appbar />

            <div className="flex justify-center">
                <div className="max-w-xl">

                    <BlogCard
                        authorName={"Subham"}
                        title={"StoryQ .How an ugly  Single Page Website Makes $5,000 a Month with Affiliates Marketing"}
                        content={"content of the blog.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur iusto, rem vel odio in consequuntur quos inventore, nulla illum voluptatem animi molestias nostrum vitae similique. Consectetur beatae sed maxime voluptates ab rem animi natus. Quibusdam, itaque vitae ipsum voluptatem fugiat quia enim eos iusto eius minima, tempore, laborum doloremque aperiam cupiditate dolorum! Laudantium recusandae iure dolore rem! Voluptatibus inventore tenetur eum impedit, quam debitis dolorem, incidunt ducimus sit deserunt soluta praesentium. Minima nemo blanditiis quis fuga distinctio consectetur ad vitae cum accusamus doloribus est obcaecati accusantium itaque nostrum, reiciendis corporis ex, porro odio asperiores tempora temporibus sint facere laboriosam. Saepe fuga alias eum! Sit voluptatibus, aliquam voluptate mollitia similique in ipsum autem eaque quae enim! Commodi earum iure soluta est natus placeat, enim libero adipisci iste quas nostrum saepe reiciendis in ea. Delectus quis odit reiciendis dolor natus dolorum illo blanditiis similique cumque saepe voluptatibus nemo, totam corporis nesciunt laborum veniam. Cumque debitis temporibus perferendis perspiciatis blanditiis distinctio eum dolorum deleniti? Velit cumque impedit, obcaecati corrupti quam dolor. Harum laborum ea possimus rem, officiis enim? Doloremque eius fugiat ducimus vel consectetur? Officia debitis vero enim magnam accusamus similique! Mollitia, tempora quae asperiores provident repellat id autem tempore corporis fugit!"}
                        publishedDate={"12/9/2024"} />
                    <BlogCard
                        authorName={"Subham"}
                        title={"StoryQ .How an ugly  Single Page Website Makes $5,000 a Month with Affiliates Marketing"}
                        content={"content of the blog.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur iusto, rem vel odio in consequuntur quos inventore, nulla illum voluptatem animi molestias nostrum vitae similique. Consectetur beatae sed maxime voluptates ab rem animi natus. Quibusdam, itaque vitae ipsum voluptatem fugiat quia enim eos iusto eius minima, tempore, laborum doloremque aperiam cupiditate dolorum! Laudantium recusandae iure dolore rem! Voluptatibus inventore tenetur eum impedit, quam debitis dolorem, incidunt ducimus sit deserunt soluta praesentium. Minima nemo blanditiis quis fuga distinctio consectetur ad vitae cum accusamus doloribus est obcaecati accusantium itaque nostrum, reiciendis corporis ex, porro odio asperiores tempora temporibus sint facere laboriosam. Saepe fuga alias eum! Sit voluptatibus, aliquam voluptate mollitia similique in ipsum autem eaque quae enim! Commodi earum iure soluta est natus placeat, enim libero adipisci iste quas nostrum saepe reiciendis in ea. Delectus quis odit reiciendis dolor natus dolorum illo blanditiis similique cumque saepe voluptatibus nemo, totam corporis nesciunt laborum veniam. Cumque debitis temporibus perferendis perspiciatis blanditiis distinctio eum dolorum deleniti? Velit cumque impedit, obcaecati corrupti quam dolor. Harum laborum ea possimus rem, officiis enim? Doloremque eius fugiat ducimus vel consectetur? Officia debitis vero enim magnam accusamus similique! Mollitia, tempora quae asperiores provident repellat id autem tempore corporis fugit!"}
                        publishedDate={"12/9/2024"} />
                    <BlogCard
                        authorName={"Subham"}
                        title={"StoryQ .How an ugly  Single Page Website Makes $5,000 a Month with Affiliates Marketing"}
                        content={"content of the blog.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur iusto, rem vel odio in consequuntur quos inventore, nulla illum voluptatem animi molestias nostrum vitae similique. Consectetur beatae sed maxime voluptates ab rem animi natus. Quibusdam, itaque vitae ipsum voluptatem fugiat quia enim eos iusto eius minima, tempore, laborum doloremque aperiam cupiditate dolorum! Laudantium recusandae iure dolore rem! Voluptatibus inventore tenetur eum impedit, quam debitis dolorem, incidunt ducimus sit deserunt soluta praesentium. Minima nemo blanditiis quis fuga distinctio consectetur ad vitae cum accusamus doloribus est obcaecati accusantium itaque nostrum, reiciendis corporis ex, porro odio asperiores tempora temporibus sint facere laboriosam. Saepe fuga alias eum! Sit voluptatibus, aliquam voluptate mollitia similique in ipsum autem eaque quae enim! Commodi earum iure soluta est natus placeat, enim libero adipisci iste quas nostrum saepe reiciendis in ea. Delectus quis odit reiciendis dolor natus dolorum illo blanditiis similique cumque saepe voluptatibus nemo, totam corporis nesciunt laborum veniam. Cumque debitis temporibus perferendis perspiciatis blanditiis distinctio eum dolorum deleniti? Velit cumque impedit, obcaecati corrupti quam dolor. Harum laborum ea possimus rem, officiis enim? Doloremque eius fugiat ducimus vel consectetur? Officia debitis vero enim magnam accusamus similique! Mollitia, tempora quae asperiores provident repellat id autem tempore corporis fugit!"}
                        publishedDate={"12/9/2024"} />
                </div>
            </div>
        </div>

    )
}