import React from 'react'
import ReactDOM from 'react-dom'

function Str(xxxx) {
    // props.name="lisi";
    return <h1>Hello,{xxxx.name}</h1>
}

function Num(props) {
    // props.age=3;
    return <h1>Hello,{props.age}</h1>
}

function Boo(props) {
    // props.marry=false;
    return <h1>Hello,{props.marry ? '有老婆' : '光棍'}</h1>
}

function Obj(props) {
    console.log(props.company.name);
    props.company.name="毅诚科技";
    console.log(props.company.name);
    return (
        <div>
            <h1>Hello,{props.company.name}</h1>
            <img src={props.company.avatarUrl} alt=""/>
        </div>
    )
}

function App() {
    return (
        <div>
            <Str name='张三'/>
            <Num age={2}/>
            <Boo marry={true}/>
            <Obj company={{
                name: '阿吉比',
                avatarUrl: 'http://placekitten.com/g/64/64'
            }}/>
        </div>
    )

}

export default function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
}

