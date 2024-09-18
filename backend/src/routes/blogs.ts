import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Jwt } from 'hono/utils/jwt';
import { sign,verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from "@subhammallik/medium-common";



export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,

    },
    Variables:{
        userId:string
    }
}>()


blogRouter.use('/*', async (c, next) => {
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1];

    try {
        const response = await verify(token, c.env.JWT_SECRET);
        if (response.id) {
           c.set('userId',response.id as string);
            await next();
        } else {
            c.status(403)
            return c.json({
                error: "unauthorized"
            })
        }
    } catch (error) {
        c.status(403)
            return c.json({
                error: "unauthorized"
            })
    }
   

})

blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,

    }).$extends(withAccelerate())
    // const userId = c.get('userId')

    const post = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({post})
})


blogRouter.post('/',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get('userId')
    const body =await c.req.json()
    const {success} = createBlogInput.safeParse(body);

    if(!success){
        c.status(403);
        return c.json({error:"Invalid Input"})
    }

    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content:body.content,
            authorId:  userId        

        }
    });
    return c.json({
        id: blog.id
    })

})
blogRouter.put('/',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

        const userId = c.get('userId')
    const body =await c.req.json();
    const {success} = updateBlogInput.safeParse(body);

    if(!success){
        c.status(403);
        return c.json({error:"Invalid Input"})
    }
    const blog = await prisma.post.update({
        where:{
            id:body.id,
            authorId:userId
        },
        data:{
            title:body.title,
            content:body.content
        }
    })

    return c.json({
        msg:"updated post"
    })

})
blogRouter.get('/:id',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const id =c.req.param('id');

    const post = await prisma.post.findUnique({
        where:{
            id:id
        },
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }

        }
    })

   

    return c.json(post)

})