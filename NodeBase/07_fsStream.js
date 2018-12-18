// 1. 流的读取

// 新建 fs
const fs = require('fs');
// 流的方式读取文件
let fileReadStream = fs.createReadStream('index.js');
// 读取次数
let count = 0;
// 保存数据
let str = '';
// 开始读取
fileReadStream.on('data', (chunk) => {
  console.log(`${++count} 接收到：${chunk.length}`);
  // Console：1 接收到：30
  str += chunk;
})
// 读取完成
fileReadStream.on('end', () => {
  console.log("——结束——");
  console.log(count);
  console.log(str);

  // Console：——结束——
  // 1
  // console.log("Hello World！");
})
// 读取失败
fileReadStream.on('error', (error) => {
  console.log(error);
})

/** ———————————————————————————————————————————————————— */

// 2. 流的存入

// let fs = require('fs');
// let data = 'console.log("Hello World! 我要存入数据！")';

// // 创建一个可以写入的流，写入到文件 index.js 中
// let writeStream = fs.createWriteStream('index.js');
// // 开始写入
// writeStream.write(data, 'utf8');
// // 写入完成
// writeStream.end();
// writeStream.on('finish', () => {
//   console.log('写入完成！');
//   // Console：写入完成
// })