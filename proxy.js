const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "https://grammy-hotel-api-server.fly.dev", //api 요청을 보낼 서버 주소
      changeOrigin: true,
    }),
  )
}
