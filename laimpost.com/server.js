const Koa = require('koa'),
  next = require('next'),
  app = next({ dev: false }),
  handle = app.getRequestHandler(),
  port = process.env.SERVER_PORT || 3001;

app.prepare().then(() => {
  const server = new Koa();

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server running on http://localhost:${port}`);
  });
});
