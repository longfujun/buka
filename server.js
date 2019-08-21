// 一个完整的http事务过程？
/*
1.客户端发送请求给服务器
2.服务器接收到请求，处理请求
3.服务器需要响应客户端结果
4.客户端得到结果，处理结果，显示出来
*/



const http = require('http');

// 创建服务
const server = http.createServer();

//处理请求
server.on('request', (request, response)=>{
    // request是客户端发送过来的请求对象
    // response将要响应给客户端的响应对象

    console.log('接收到了请求:', request.url);

    // response.write('<h1>hello world</h1>');
    // response.write('<mark>hello world</mark>');
    // response.end();

    response.end('<h1>hello world</h1><mark>hello world</mark>');
})



// 启动服务
server.listen(8080, 'localhost', (error)=>{
    if(error){
        console.log('创建服务器失败');
        console.log(error);
    }else{
        console.log('创建服务器成功');
    }
});

