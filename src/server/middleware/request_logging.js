export const requestLogger = async (ctx, next) => {
  console.log(`Recieved request for ${ctx.url}`)
  next()
}
