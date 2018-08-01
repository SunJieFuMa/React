import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    loginRequest: ['username', 'password'],
    logout: null,
    custom: (a, b) => ({type: 'CUSTOM', total: a + b}),
    test: function (a, b) {
        return {total: a + b}
    },
    loginSuccess: {name: '张三', age: 18},
}, {});

console.log(Types); // {LOGIN_REQUEST: "LOGIN_REQUEST" ...}
console.log(Creators.loginRequest(123, 'aabbcc')); // {type: "LOGIN_REQUEST", username: 123, password: "aabbcc"}
console.log(Creators.logout(123));  // {type: "LOGOUT"}
console.log(Creators.custom(5, 6));  // {type: "CUSTOM", total: 11}
console.log(Creators.test(5, 6));  // { total: 11}
console.log(Creators.loginSuccess({})); // {type: "LOGIN_SUCCESS", name: "张三", age: 18}
console.log(Creators.loginSuccess({name:'李狗蛋'})); // {type: "LOGIN_SUCCESS", name: "李狗蛋", age: 18}
console.log(Creators.loginSuccess({sex:'男',name:'李狗蛋'})); // {type: "LOGIN_SUCCESS", name: "李狗蛋", age: 18}


