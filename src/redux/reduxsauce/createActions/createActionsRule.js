import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    loginRequest: null,
    logout: null,
    login_success:null,
    login_failureMsg:null,
    login_Test:null
}, {});
console.log(Types);
// {LOGIN_REQUEST: "LOGIN_REQUEST",
// LOGOUT: "LOGOUT",
// LOGIN_SUCCESS: "LOGIN_SUCCESS",
// LOGIN_FAILURE_MSG: "LOGIN_FAILURE_MSG",
// LOGIN__TEST: "LOGIN__TEST"} 遇到大写直接加_,不管前面有没有_,所以这里有两个_
