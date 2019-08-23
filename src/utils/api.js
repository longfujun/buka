//推荐页面
//传入参数(必传) ?page=1    例:{page:1}  {page:2}
//get请求
const API_V3_HOME =  '/api/v3/home'

//排行页面
//post
const RANKING_GET_DATA = '/ranking/get_data'

//分类页面
//post请求
    //后面参数必传 : 例 '?fun=1&param=12041&gname=玄幻&count=16&start=1'
    //count=16&start=0
    //const=16 每次请求16条数据
        //start=0 每start 有 16 条数据
    //所有参数都在hashs.js 里
const CATEGORY_AJAX_GROUP =  '/category/ajax_group'

//调用一下方法进行对象作为参数拼接
/* function buildUri(obj){
    var uri = '';
    for(var index in obj){
      if(isEmpty(obj[index])){
        uri +=( index + '=' + obj[index] + '&');
      }else{
        uri += buildUri(obj[index]);
      }
    }
    return uri;
  }
  function isEmpty(obj){
    if(typeof obj == 'string' ) return true;
    for(var i in obj){
      return false;
    }
    return true;
  } */


export default {
    API_V3_HOME,
    RANKING_GET_DATA,
    CATEGORY_AJAX_GROUP,
}