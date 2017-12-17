import React from 'react'
import Router from 'koa-router'
import ReactDomServer from 'react-dom/server'
import { Html } from '../views/index'
import { App } from '../../client/js/app'

export const viewRouter = new Router()

viewRouter.get('/', async ctx => {
  ctx.type = 'html'
  ctx.body = ReactDomServer.renderToNodeStream(
    <Html>
      <App />
    </Html>
  )
})
