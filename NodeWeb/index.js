// import/export
const tools = require("jsliang-node/tools");

// 引入 http 模块：http 是提供 Web 服务的基础
const http = require("http");

// 引入 url 模块：url 是对用户提交的路径进行解析
const url = require("url");

// 引入 fs 模块：fs 是对文件进行操作
const fs = require("fs");

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

  if(req.method == "POST") {
    console.log("\n进入 POST 方法");

    // 接收发送过来的参数
    let result = "";
    // 获取前端发来的路由地址
    let pathName = url.parse(req.url).pathName;
    
    // 数据接入中
    req.addListener("data", function(chunk) {
      console.log("data：");
      console.log(chunk);
      result += chunk;
    });

    // 数据接收完成
    req.addListener("end", function() {
      console.log("qs 拆分：");
      console.log(qs.parse(result));

      // 返回数据
      res.write(result);
      
      // 结束响应
      res.end();
    })

  } else if(req.method == "GET") {
    console.log("\n进入 GET 方法");

    // 解析 url 参数部分
    let params = url.parse(req.url, true).query;
    console.log("params：");
    console.log(params);

    // 结束响应
    res.end();
  }



  // // 防止 url 请求 2 次
  // if(req.url != "/favicon.ico") {
    
  //   console.log("开始编程");

  //   // 判断 url
  //   console.log(req.url);

  //   // 引用工具库
  //   console.log(tools.add(1, 2, 3));
    
  //   // 引用 fs
  //   fs.readFile("index.js", (err) => {
  //     if(err) {
  //       console.log(err);
  //     } else {
  //       console.log("读取 index.js 成功！");
  //     }
  //   })

  // }

  // // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  // res.writeHead(200, {
  //   "Content-Type": "text/html;charset=UTF-8"
  // });

  // // 往页面打印值
  // res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  

}).listen(8888); // 监听的端口