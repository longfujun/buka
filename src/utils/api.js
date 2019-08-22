//推荐页面
//传入参数(必传) ?page=1    例:{page:1}  {page:2}
//get请求
const API_V3_HOME =  '/api/v3/home'

//排行页面
//post
const RANKING_GET_DATA = '/ranking/get_data'

//分类页面
//post请求
//目前只能请求到最近更新15条数据
const CATEGORY_AJAX_GROUP =  '/category/ajax_group'



/* fun: 14
param: 
gname: 最近更新
count: 16
start: 0 */

/* fun: 1
param: 12041
gname: 玄幻
count: 16
start: 0 */

export default {
    API_V3_HOME,
    RANKING_GET_DATA,
    CATEGORY_AJAX_GROUP,
}