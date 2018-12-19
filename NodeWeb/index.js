// 连接 MySQL：先安装 npm i mysql -D
var mysql = require('mysql');
// MySQL 的连接信息
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'nodebase'
});

// 引入 http 模块：http 是提供 Web 服务的基础
const http = require("http");

// 引入 url 模块：url 是对用户提交的路径进行解析
const url = require("url");

// 引入 qs 模块：qs 是对路径进行 json 化或者将 json 转换为 string 路径
const qs = require("querystring");

// 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {

  // 设置跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 设置 header 类型
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // 跨域允许的请求方式
  res.setHeader('Content-Type', 'application/json');

  if (req.method == "POST") {

    console.log("\n【POST 形式】");

    // 获取前端发来的路由地址
    let pathName = req.url;

    console.log("\n接口为：" + pathName);

    // 接收发送过来的参数
    let tempResult = "";

    // 数据接入中
    req.addListener("data", function (chunk) {
      tempResult += chunk;
    });

    // 数据接收完成
    req.addListener("end", function () {

      var result = JSON.stringify(qs.parse(tempResult));
      console.log("\n参数为：");
      console.log(result);

      if (pathName == "/sendMessage") { // 提交留言信息

        console.log("\n【API - 提交留言信息】");

      } else if (pathName == "/login") { // 登录

        console.log("\n【API - 登录】");

      } else if (pathName == "/register") { // 注册

        console.log("\n【API - 注册】");

        result = JSON.parse(result);

        let username = result.username;
        let password = result.password;
        let time = getNowFormatDate();

        if (!username) {
          res.end("注册失败，用户名为空。");
          return;
        } else if (!password) {
          res.end("注册失败，密码为空");
          return;
        } else {
          // 查询 user 表
          // readSql("user", "jsliang");
          let result = readSql("user");
          console.log(result);

          console.log("\n注册成功！");

        }

      }

      // 返回数据
      res.write(JSON.stringify(result));

      // 结束响应
      res.end();
    })

  } else if (req.method == "GET") {

    console.log("\n【GET 形式】");

    // 解析 url 接口
    let pathName = url.parse(req.url).pathname;

    console.log("\n接口为：" + pathName);

    if (pathName == "/getMessage") { // 获取留言信息

      console.log("\n【API - 获取留言信息】");

      // 解析 url 参数部分
      let params = url.parse(req.url, true).query;

      console.log("\n参数为：");
      console.log(params);

      // 返回数据
      res.write(JSON.stringify(params));

      // 结束响应
      res.end();
    }

  }

}).listen(8888); // 监听的端口

// 获取当前时间
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

// 查询某个表：表名，字段
function readSql(tableName, tableField) {

  new Promise( (resolve, reject) => {
    // 开始连接
    connection.connect();

    // 新增的 SQL 语句及新增的字段信息
    let readSql = "SELECT * FROM " + tableName;
    if(tableField) {
      readSql = "SELECT * FROM " + tableName + " WHERE user_name = " + tableField;
    }
    console.log("111");
    let result;
    // 连接 SQL 并实施语句
    connection.query(readSql, function (err, res) {
      if (err) {
        throw err;
      } else {
        console.log(res);
        result = res;
      }
    });

    resolve(result);
  }).then( (res) => {
    // 终止连接
    connection.end();

    return res;
  })
  
}

// 新增数据
function addSql() {
  // 新增的 SQL 语句及新增的字段信息
  let addSql = "INSERT INTO user(id,user_name,user_password, time) VALUES(0,?,?)";
  let addSqlParams = [result.username, result.password, time];

  // 连接 SQL 并实施语句
  connection.query(addSql, addSqlParams, function (error, response) {
    if (error) {
      console.log("新增错误：");
      console.log(error);
      return;
    } else {
      console.log("新增成功：");
      console.log(response);
    }
  });
}