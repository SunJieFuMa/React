import {createTypes} from 'reduxsauce'
let types = createTypes(
    `LOGIN_REQUEST
  LOGIN_SUCCESS LOGIN_FAILURE`
);
let types2 = createTypes(
    'LOGIN_REQUEST\n ' +
    'LOGIN_SUCCESS LOGIN_FAILURE'
);
let types3 = createTypes(
    "LOGIN_REQUEST\n  " +
    "LOGIN_SUCCESS LOGIN_FAILURE"
);
console.log(types); // {LOGIN_REQUEST: "LOGIN_REQUEST", LOGIN_SUCCESS: "LOGIN_SUCCESS", LOGIN_FAILURE: "LOGIN_FAILURE"}
console.log(types2); // {LOGIN_REQUEST: "LOGIN_REQUEST", LOGIN_SUCCESS: "LOGIN_SUCCESS", LOGIN_FAILURE: "LOGIN_FAILURE"}
console.log(types3); // {LOGIN_REQUEST: "LOGIN_REQUEST", LOGIN_SUCCESS: "LOGIN_SUCCESS", LOGIN_FAILURE: "LOGIN_FAILURE"}

let types4 = createTypes(
    "login\n  " +
    "loginSuccess LOGIN_FAILURE"
);
console.log(types4); // {login: "login", loginSuccess: "loginSuccess", LOGIN_FAILURE: "LOGIN_FAILURE"}

/*
createActions
这个函数会将它的参数（一个对象）的keys输出到Types（一个对象）的keys和输出到Creators（一个对象）的keys，
参数如果带有数组，数组就变成Creators的参数，
参数是null就不带参数，参数是函数则可以自定义。
 */
