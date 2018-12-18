/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

//  1. fs.stat
let fs = require('fs');

fs.stat('index.js', (error, stats) => {
  if(error) {
    console.log(error);
    return false;
  } else {
    console.log(stats);
    /**
     * Console：
     * Stats {
     *  dev: 886875,
     *  mode: 33206,
     *  nlink: 1,
     *  uid: 0,
     *  gid: 0,
     *  rdev: 0,
     *  blksize: undefined,
     *  ino: 844424931461390,
     *  size: 284,
     *  blocks: undefined,
     *  atimeMs: 1542847157494,
     *  mtimeMs: 1543887546361.2158,
     *  ctimeMs: 1543887546361.2158,
     *  birthtimeMs: 1542847157493.663,
     *  atime: 2018-11-22T00:39:17.494Z,
     *  mtime: 2018-12-04T01:39:06.361Z,
     *  ctime: 2018-12-04T01:39:06.361Z,
     *  birthtime: 2018-11-22T00:39:17.494Z }
     */

    console.log(`文件：${stats.isFile()}`); 
    // Console：文件：true
    
    console.log(`目录：${stats.isDirectory()}`); 
    // Console：目录：false

    return false;
  }
})

/**—————————————————————————————————————————————————————————————— */

//  2. fs.mkdir
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
// fs.mkdir('css', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("创建目录成功！");
//     // Console：创建目录成功！
//   }
// })

/**—————————————————————————————————————————————————————————————— */

//  3. fs.writeFile
/**
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。
 * callback { Function } 回调，传递一个异常参数 err。
 */
// fs.writeFile('index.js', 'Hello jsliang', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log('写入成功！');
//   }
// })

/**—————————————————————————————————————————————————————————————— */

//  4. fs.appendFile
// fs.appendFile('index.js', '这段文本是要追加的内容', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("追加成功");
//   }
// })

/**—————————————————————————————————————————————————————————————— */

// 5. fs.readFile
// fs.readFile('index.js', (err, data) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("读取文件成功！");
//     console.log(data);
//     // Console：
//     // 读取文件成功！
//     // <Buffer 48 65 6c 6c 6f 20 6a 73 6c 69 61 6e 67 e8 bf 99 e6 ae b5 e6 96 87 e6 9c ac e6 98 af e8 a6 81 e8 bf bd e5 8a a0 e7 9a 84 e5 86 85 e5 ae b9>
//   }
// })

/**—————————————————————————————————————————————————————————————— */

// 6. fs.readdir 读取目录
// fs.readdir('node_modules', (err, data) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("读取目录成功！");
//     console.log(data);
//     // Console：
//     // 读取目录成功！
//     // [ '03_tool-multiply.js', 'jsliang-module' ]
//   }
// })

/**—————————————————————————————————————————————————————————————— */

// 7. fs.rename 重命名 - 重命名
// fs.rename('jsliang.js', 'node_modules/jsliang.js', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("剪切成功！");
//   }
// })

// 7. fs.rename 重命名 - 剪切
// fs.rename('jsliang.js', 'node_modules/jsliang.js', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("剪切成功！");
//   }
// })

/**—————————————————————————————————————————————————————————————— */

//  8. fs.rmdir
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
// fs.rmdir('css', (err) => {
//   if(err) {
//     console.log(err);
//     return false;
//   } else {
//     console.log("创建目录成功！");
//     // Console：创建目录成功！
//   }
// })