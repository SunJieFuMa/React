import React from 'react'
import ReactDOM from 'react-dom'

class Str extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>
    }
}

class Num extends React.Component {
    render() {
        return <h1>Hello,{this.props.age}</h1>
    }

}

class Boo extends React.Component {
    render() {
        return <h1>Hello,{this.props.marry ? '有老婆' : '光棍'}</h1>
    }
}

class Obj extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,{this.props.company.name}</h1>
                <img src={this.props.company.avatarUrl} alt=""/>
            </div>
        )
    }

}

class App extends React.Component {
    render() {
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

}

export default function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )
}

