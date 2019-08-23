import api from '../../utils/api';
import {get,post} from '../../utils/request';
import hashs from './hashs'



//type
const HA = hashs["#1"]




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

}
