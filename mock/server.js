//server提供接口
//第一个轮播图数据/api/sliders
//第二接口获取上映/api/hot
let http = require('http');
let url = require('url');
let fs = require('fs');//文件读取
//读取图书
function read(callback) {
  fs.readFile('./mambo.json', 'utf-8', function (err, data) {//如果错误文件就是不存在 或者data没有数据的时候调callback
    if (err || data === '') return callback([]);
    callback(JSON.parse(data));//转为对象
  })
}
// read(function (data) {
//   console.log(data);
// });
let sliders = require('./sliders');
http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url, true)
  if (pathname === '/api/sliders') {
    res.end(JSON.stringify(sliders))
  } else if (pathname === '/api/hot') {
    read(function (data) {
      //截取9个数据(reverse倒着)
      let mambos = data.reverse().slice(0, 9);
      res.end(JSON.stringify(mambos))
    });

  }
}).listen(3000);
//请求数据
/*AJAX jquery ajax-promise fetch axios*/
