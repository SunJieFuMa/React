import React from 'react'
import ReactDOM from 'react-dom'

function Str(props) {
    return <h1>Hello,{props.name}</h1>
}

function Num(props) {
    return <h1>Hello,{props.age}</h1>
}

function Boo(props) {
    return <h1>Hello,{props.marry ? '有老婆' : '光棍'}</h1>
}

function Obj(props) {

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

