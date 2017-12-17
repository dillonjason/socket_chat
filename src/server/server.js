import Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Yo'
})

app.listen(3000)
