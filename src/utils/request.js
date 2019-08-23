import axios from 'axios'

export const get = (url, params = {})=>{
    console.log(params);
  return new Promise((resolve,reject)=>{
    axios.get(url, {
        params: params,
        baseURL: "http://localhost:3000",
    })
    .then(response=>{
        if (response.status === 200 && response.data.ret === 0) {
            resolve(response);
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
            baseURL: "http://localhost:3000"
        });
        if (response.status === 200 && response.data.ret === 0) {
            return response;
        }else{
            throw new Error()
        }
    } catch (error) {
        console.log("请求失败!~");
    }
}

export default{
    get,post
}