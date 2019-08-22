import api from '../../utils/api';
import {get,post} from '../../utils/request';

//type

// state
const initialState = {
    isLogin: false,
    userInfo: {}
};

// reducer
export default (state = initialState, action)=>{
   switch (action.type) {

       default:
          return state;
   }
};

//同步action


//异步action
export const requestLoginAction = () => async (dispatch) => {
    let {data} = await post(api.RANKING_GET_DATA)
    console.log(data);
}
