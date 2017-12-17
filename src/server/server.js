import Koa from 'koa'
import serve from 'koa-static'

import {viewRouter} from './routers/views'

import {requestLogger} from './middleware/request_logging'

const app = new Koa()
app.use(serve(`${process.cwd()}/dist`))

// middleware
app.use(requestLogger)

// routes
app.use(viewRouter.routes())

app.listen(3000)
console.log('Server started on port 3000')
