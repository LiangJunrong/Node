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

  if(req.method == "POST") {
    
    console.log("\n【POST 形式】");

    // 获取前端发来的路由地址
    let pathName = req.url;
    
    console.log("\n接口为：" + pathName);
    
    // 接收发送过来的参数
    let tempResult = "";

    // 数据接入中
    req.addListener("data", function(chunk) {
      tempResult += chunk;
    });

    // 数据接收完成
    req.addListener("end", function() {
      
      let reuslt = JSON.stringify(qs.parse(tempResult));
      console.log("\n参数为：");
      console.log(reuslt);

      if(pathName == "/sendMessage") { // 提交留言信息
        
        console.log("\n【API - 提交留言信息】");

      } else if (pathName == "/login") { // 登录

        console.log("\n【API - 登录】");

      } else if (pathName == "/register") { // 注册

        console.log("\n【API - 注册】");

      }

      // 返回数据
      res.write(reuslt);
      
      // 结束响应
      res.end();
    })

  } else if(req.method == "GET") {
    
    console.log("\n【GET 形式】");

    // 解析 url 接口
    let pathName = url.parse(req.url).pathname;

    console.log("\n接口为：" + pathName);

    if(pathName == "/getMessage") { // 获取留言信息

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