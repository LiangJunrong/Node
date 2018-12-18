// 引入 http 模块
const http = require("http");

// 引入 url 模块
const url = require("url");

// import/export
const tools = require("jsliang-node/tools");

// fs 模块
const fs = require("fs");

// 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {
 
  // 防止 url 请求 2 次
  if(req.url != "/favicon.ico") {
    
    console.log("开始编程");

    // 判断 url
    console.log(req.url);

    // 引用工具库
    console.log(tools.add(1, 2, 3));
    
    // 引用 fs
    fs.readFile("index.js", (err) => {
      if(err) {
        console.log(err);
      } else {
        console.log("读取 index.js 成功！");
      }
    })

  }

  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(8888); // 监听的端口