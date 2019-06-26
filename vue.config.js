// 模拟数据
const express = require('express')
const app = express()
var appData = require('./data.json')
// json卖家数据
var seller = appData.seller
// json商品数据
var goods = appData.goods
// json评论数据
var ratings = appData.ratings
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
  devServer: {
    open: true, // 配置自动启动浏览器
    host: 'localhost',
    port: '8080',
    before (app) {
      app.get('/api/seller', (req, res, next) => {
        res.json({
          // 这里是你的json内容
          errno: 0,
          data: seller
        })
      })
      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', function (rea, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  }

}
