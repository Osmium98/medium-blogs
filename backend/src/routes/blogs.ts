import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Jwt } from 'hono/utils/jwt';
import { sign,verify } from 'hono/jwt';



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
    const token = header.split(" ")[1]
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

})

blogRouter.get('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,

    }).$extends(withAccelerate())
    // const userId = c.get('userId')

    const post = await prisma.post.findMany({})
    return c.json({post})
})


blogRouter.post('/',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get('userId')
    const body =await c.req.json()

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
        }
    })

    return c.json(post)

})