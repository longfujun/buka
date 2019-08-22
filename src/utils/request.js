import 'whatwg-fetch'
//get请求
export const get = async (url, params = {}) => {
    try {
        //处理参数
        let paramsStr = '';
        Object.entries(params).forEach(([key, value], index) => {
            paramsStr += (index === 0) ? "?" : "&;"
            paramsStr += `${key}=${encodeURIComponent(value)}`;
        })
        //发送请求, 当成得到响应对象
        let response = await fetch(`${url}${paramsStr}`)
        console.log(response);
        //解析数据, 当成文本解析
        let result = await response.json();
        //解析完成, 得到结果
        if (result.ret === 0) {
            return result
        }else{
            // throw new Error("请求失败!")
            console.log("请求失败");
        }
    } catch (error) {
        throw error
    }
}

//post请求
export const post = async (url, params = {}) => {
    try {
        //发送请求
        let response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        console.log(response);
        //接收到响应, 处理数据
        let result = await response.json();
        if(result.ret === 0){
            // console.log(result);
            return result
        }else{
            throw new Error("请求失败")
        }
    } catch (error) {
        throw error
    }
}

export default{
    get,post
}


//axios 方式请求数据
/* import axios from "axios"
export const get = (url, params = {})=>{
    console.log(params);
  return new Promise((resolve,reject)=>{
    axios.get(url, {
        params: params,
        baseURL: "http://localhost:3000",
    })
    .then(response=>{
        if (response.status === 200 && response.data.status === 0) {
            resolve(response.data);
        }else{
            console.log("请求失败!~");
        }
    })
    .catch(error=>{
        console.log("请求失败!~");
    })
  })
}

export const post = async(url, params = {})=>{
    try {
        let response = await axios.post(url, params, {
            baseURL: "http://localhost:8080"
        });
        if (response.status === 200 && response.data.status === 0) {
            return response.data;
        }else{
            throw new Error()
        }
    } catch (error) {
        console.log("请求失败!~");
    }
} */