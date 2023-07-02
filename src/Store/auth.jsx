import {combineReducers} from "redux"
const USER_LOGIN= 'LOGIN'
const USER_LOGOUT= 'LOGOUT'

export const login = (user) => {
    return {
      type: USER_LOGIN,
      payload: user,
    };
  };
  
  export const logout = () => {
    return {
      type: USER_LOGOUT,
    };
  };
  const initialState = {
    isLoggedIn: false,
    user: {
      name: null,
      email: null,
      password: null,
    },
  };
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN:
        return {
          isLoggedIn: true,
          user: action.payload,
        };
      case USER_LOGOUT:
        return initialState;
      default:
        return state;
    }
  };
  const UserAuth = combineReducers({authReducer})
  export default UserAuth;