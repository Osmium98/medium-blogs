import { Hono } from "hono";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()


blogRouter.use('/api/v1/blog/*', async (c, next) => {
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1]
    const response = await verify(token, c.env.JWT_SECRET);
    if (response.id) {
        await next();
    } else {
        c.status(403)
        return c.json({
            error: "unauthorized"
        })
    }

})

blogRouter.get('/', (c) => {
    return c.text('Hello Hono!')
})


blogRouter.post('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')

})
blogRouter.put('/api/v1/blog', (c) => {
    return c.text('Hello Hono!')

})
blogRouter.get('/api/v1/blog/:id', (c) => {
    return c.text('Hello Hono!')

})