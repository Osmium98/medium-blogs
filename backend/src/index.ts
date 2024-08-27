import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/extension';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Jwt } from 'hono/utils/jwt';
import { sign } from 'hono/jwt';


const app = new Hono<{
  Bindings:{
    DATABASE_URL: string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();

  const user = await prisma.user.create({
    data:{
      email: body.email,
      password: body.password
    }

  })

  const token = sign({id:user.id},"secret",);


  return c.json({
    jwt:token
  })

})
app.post('/api/v1/signin', (c) => {
  return c.text('Hello Hono!')

})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')

})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')

})
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')

})

export default app
