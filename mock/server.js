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
//写的方法
function write(data, callback) {
  fs.writeFile('./mambo.json', JSON.stringify(data), callback)//成功之后调取callback
}
// read(function (data) {
//   console.log(data);
// });
let sliders = require('./sliders');
http.createServer(function (req, res) {
  let {pathname, query} = url.parse(req.url, true);
  if (pathname === '/api/sliders') {
    res.end(JSON.stringify(sliders))
  } else if (pathname === '/api/hot') {
    read(function (data) {
      //截取9个数据(reverse倒着)
      let mambos = data.reverse().slice(0, 9);
      res.end(JSON.stringify(mambos))
    });
  } else if (pathname === '/api/mambo') {
    //获取请求方法
    let method = req.method;
    let id = parseInt(query.id);//转化为数字类型
    if (method === 'GET') {
      //获取一个数据
      if (id) {//获取一个

      } else {
        //获取全部数据   用回调函数传参数
        read(function (mambos) {
          res.end(JSON.stringify(mambos))
        })
      }
    } else if (method === 'POST') {
//接受传递的数据，添加一个id写入到mambo，
      let str = '';
      req.on('data', function (data) {
        str += data;
      });
      req.on('end', function () {
        let mambo = JSON.parse(str);
        read(function (mambos) {//读取是否有书
          mambo.id = mambos.length === 0 ? 1 : mambos[mambos.length - 1].id + 1;
          mambos.push(mambo);//添加
          write(mambos, function () {
            //添加成功后返回添加的那一项
            res.end(JSON.stringify(mambo));
          })
        });
      })
    } else if (method === 'PUT') {//修改



    } else if (method === 'DELETE') {//删除
      //先读取
      read(function (mambos) {
        mambos = mambos.filter(item => item.id !=id);
        write(mambos, function () {//成功后返回
          res.end(JSON.stringify({}));//直接返回一个空
        })
      })
    }
  }
}).listen(3100);
//请求数据
/*AJAX jquery ajax-promise fetch axios*/
